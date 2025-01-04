const PostCSSPlugin = require("eleventy-plugin-postcss")
const { rm } = require("fs/promises")
const fs = require('fs');

module.exports = function(eleventyConfig) {
    // -- constants --
    const buildEnvironment = process.env.ENVIRONMENT.trim();
    const srcDir = "src"
    const dstDir = "docs"
    

    // -- assets --
    eleventyConfig.addPlugin(PostCSSPlugin);
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('src/code');
    eleventyConfig.addPassthroughCopy('fonts');


    // -- filters --
    eleventyConfig.addFilter("getDateString", dateToString);
    eleventyConfig.addFilter('handleize', handleize);
    eleventyConfig.addFilter('getDateShortString', dateToShortString);
    eleventyConfig.addFilter('getArchiveYears', getArchiveYears);
    eleventyConfig.addFilter('getArchiveMonths', getArchiveMonths);
    eleventyConfig.addFilter('getArticlesForMonth', getArticlesForMonth);

    // -- config --
    fs.writeFileSync(`${dstDir}/code/config.js`, getConfig(buildEnvironment));

    
    // -- build --
    // remove the _collections dir from the site output
    eleventyConfig.on("eleventy.after", async () => {
        await rm(`${dstDir}/_collections`, { recursive: true, force: true });
        await fs.copyFile(`${dstDir}/rss/index.html`, `${dstDir}/rss.txt`, (err) => {
            if (err) throw err;
            console.log('copied rss feed to txt file');
        });
        await rm(`${dstDir}/rss`, { recursive: true, force: true });
    })

    // copy CNAME over
    fs.copyFile('CNAME', 'docs/CNAME', (err) => {
        if (err) throw err;
        console.log('File was copied to destination');
    });


    return {
        dir: {
            input: srcDir,
            output: dstDir
        }
    };
}


async function postBuildStep(dstDir) {
    await rm(`${dstDir}/_collections`, { recursive: true, force: true });
    // await fs.copyFile(`${dstDir}/rss/index.html`, `${dstDir}/rss.txt`);
    await rm(`${dstDir}/rss`, { recursive: true, force: true });
}


function handleize(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '');
}


function dateToString(date) {
    // Request a weekday along with a long date
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: 'UTC'
    };
    
    return date.toLocaleString("en-US", options);
}


function dateToShortString(date) {
    // Request a weekday along with a long date
    const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timeZone: 'UTC'
    };
    let dateString = date.toLocaleString('en-US', options);
    let month = dateString.split('/')[0];
    let day = dateString.split('/')[1];
    let year = dateString.split('/')[2];

    if(month.length === 1) {
        month = `0${month}`;
    }
    if(day.length === 1) {
        day = `0${day}`;
    }
    
    return `${month}-${day}-${year}`;
}


function getMonthString(month) {
    switch(month) {
        case 0: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "UNKNOWN MONTH";
    }
}


function getConfig(env) {
    switch(env) {
        case "dev":
            return "const API_BASE_URL = 'http://localhost:7071/api';";
        case "prod":
            return "const API_BASE_URL = 'https://website-commentsapi.azurewebsites.net/api';";
        default:
            console.log("NO ENVIRONMENT SPECIFIED");
            break;
    }
}


function getArchiveYears(posts) {
    let years = new Set();
    let dates = posts.map(post => post.date);

    dates.forEach(date => {
        let year = dateToShortString(date).split('-')[2];
        if(years.has(year)) {
            // skip
        }
        else {
            years.add(year);
        }
    });

    return years;    
}


function getArchiveMonths(posts, year) {
    let months = new Set();
    let dates = posts.map(post => post.date);
    
    dates.forEach(date => {
        let dateComponents = dateToString(date);
        let articleYear = dateComponents.split(',')[1].trim();
        let month = dateComponents.split(' ')[0];
        
        if(articleYear == year && !months.has(month)) {
            months.add(month);
        }
    });

    return months;    
}


function getArticlesForMonth(posts, year, month) {
    let articles = [];    
    posts.forEach(post => {
        let date = post.date;
        let dateComponents = dateToString(date);
        let articleYear = dateComponents.split(',')[1].trim();
        let articleMonth = dateComponents.split(' ')[0];
        
        if(articleYear == year && articleMonth == month) {
            articles.push(post);
        }
    });
    return articles;
}