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