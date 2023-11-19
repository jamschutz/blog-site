const PostCSSPlugin = require("eleventy-plugin-postcss")
const { rm } = require("fs/promises")
const fs = require('fs');

module.exports = function(eleventyConfig) {
    // -- constants --
    const srcDir = "src"
    const dstDir = "docs"
    

    // -- assets --
    eleventyConfig.addPlugin(PostCSSPlugin);
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('fonts');


    // -- filters --
    eleventyConfig.addFilter("getDateString", dateToString);
    eleventyConfig.addFilter('handleize', handleize);

    
    // -- build --
    // remove the _collections dir from the site output
    eleventyConfig.on("eleventy.after", async () => {
        await rm(`${dstDir}/_collections`, { recursive: true, force: true })
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
    
    console.log(date.toLocaleString("en-US", options));
    return date.toLocaleString("en-US", options);
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