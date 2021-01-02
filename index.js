//Prototype script

const highlight = require("highlight.js");

const MarkdownIt = require("markdown-it");
const md = new MarkdownIt({
    html: true,
    linkify: true,

    highlight: (str, lang) => {
        if (lang && highlight.getLanguage(lang)) {
            try {
                return highlight.highlight(lang, str).value;
            } catch (error) {
                console.error(error);
            }
        }

        return ''; // use external default escaping.
    }
});

const fs = require("fs");

const rebuild = () => {
    const testMarkdown = fs.readFileSync("source/test.md", "utf-8");
    const testHtml = md.render(testMarkdown);

    const templateHtml = fs.readFileSync("public/index.html", "utf-8");
    const testStatic = templateHtml.replace("Hello main content!", testHtml);

    fs.writeFileSync("public/test.html", testStatic);

    console.log("Generated test.html successfully!");
}


if (process.argv.includes("--watch")) {
    rebuild();

    const watch = require("node-watch");

    const watcher = watch(["./public/index.html", "./source/test.md"], {delay: 0}, (evt, name) => {
        if (evt === "update") rebuild();
    });

    process.on("SIGINT", watcher.close);
} else {
    rebuild();
}

