//Prototype script

const child_process = require("child_process");
child_process.execSync(`"node_modules/.bin/sass" source/sass:public/css`);

// ------------------------------ Libraries ------------------------------ //

require("colors");

const fs = require("fs");
const path = require("path");

const highlight = require("highlight.js");

const Mustache = require("mustache");
const MarkdownIt = require("markdown-it");
const { profileEnd } = require("console");

// ------------------------------ Markdown ------------------------------ //

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

// ------------------------------ Templates ------------------------------ //

const templates = {};
const templatesPartials = {};

// Loads a mustache template from a file.
//- (string) filePath: The file path of the template.
function loadTemplate(filePath) {
    const templateName = path.basename(filePath, path.extname(filePath));
    const template = fs.readFileSync(filePath, "utf-8");

    Mustache.parse(template);
    templates[templateName] = template;
}

// Loads a mustache template partial from a file.
//- (string) filePath: The file path of the template partial.
function loadTemplatePartial(filePath) {
    const partialName = path.basename(filePath, path.extname(filePath));
    const partial = fs.readFileSync(filePath, "utf-8");

    Mustache.parse(partial);
    templatesPartials[partialName] = partial;
}

console.info("Loading templates...".magenta);

for (let fileName of fs.readdirSync("templates")) {
    const filePath = path.join("templates", fileName);
    if (fs.statSync(filePath, "mode").isDirectory()) continue;

    console.log(("- Loading " + fileName).cyan);
    loadTemplate(filePath);
}

console.info("Loading templates partials...".magenta);

for (let fileName of fs.readdirSync("templates/_partials")) {
    const filePath = path.join("templates/_partials", fileName);
    if (fs.statSync(filePath, "mode").isDirectory()) continue;

    console.log(("- Loading " + fileName).cyan);
    loadTemplatePartial(filePath);
}

// ------------------------------ Building system ------------------------------ //

// Renders a static markdown document.
//- (string) sourceMarkdown: The source markdown data.
//- (string) templateName: The name of the mustache template to use.
//- returns (string): the generated HTML.
function renderMarkdown(sourceMarkdown, templateName) {
    const renderedContent = md.render(sourceMarkdown);
    const renderingView = {
        markdown: renderedContent
    };

    return Mustache.render(templates[templateName], renderingView, templatesPartials);
}

// Renders a static markdown document from and to a file.
//- (string) sourcePath: The file path of the markdown document.
//- (string) destinationPath: The destination file path of the generated document.
function renderMarkdownDocument(sourcePath, destinationPath) {
    const sourceMarkdown = fs.readFileSync(sourcePath, "utf-8");
    const renderedDocument = renderMarkdown(sourceMarkdown, "markdown");
    fs.writeFileSync(destinationPath, renderedDocument, "utf-8");
}

// ------------------------------ Utility ------------------------------ //

function copyFilesRecursive(source, destination) {
    if (fs.statSync(source, "mode").isDirectory()) {
        if (!fs.existsSync(destination)) fs.mkdirSync(destination);
        for (let filename of fs.readdirSync(source))
            copyFilesRecursive(path.join(source, filename), path.join(destination, filename));
    } else {
        fs.copyFileSync(source, destination);
    }
}

// ------------------------------ Building methods ------------------------------ //

function render(source, destination) {
    if (fs.statSync(source, "mode").isDirectory()) {
        if (!fs.existsSync(destination)) fs.mkdirSync(destination);
        for (let filename of fs.readdirSync(source)) 
            render(path.join(source, filename), path.join(destination, filename));
    } else {
        const extname = path.extname(source);
        const dirname = path.dirname(destination);
        const basename = path.basename(source, extname);

        if (extname !== ".md") return;
        renderMarkdownDocument(source, path.join(dirname, basename + ".html"));

        console.log(("- Rendered " + basename + extname).blue);
    }
}

// ------------------------------ Building ------------------------------ //

if (!fs.existsSync("build")) fs.mkdirSync("build");

console.log("Building...".magenta);

console.log("- Copying files from ./public to ./build...".cyan);
copyFilesRecursive("public", "build");

console.log("- Rendering directory ./pages...".cyan);
render("pages", "build");

// ------------------------------ Watching directories ------------------------------ //

function onFileEvent(eventName, filePath) {
    if (eventName === "update") {
        if (filePath.substr(0, 6) === "public") {
            copyFilesRecursive(filePath, "build" + filePath.substr(6));
        } else if (filePath.substr(0, 5) === "pages") {
            render(filePath, "build" + filePath.substr(5));
        } else if (filePath.substr(0, 19) == "templates/_partials") {
            loadTemplatePartial(filePath);
            render("pages", "build");
        } else if (filePath.substr(0, 9) == "templates") {
            loadTemplate(filePath);
            render("pages", "build");
        }

        console.log(("- Processed " + filePath).cyan);
    }
}

if (process.argv.includes("--watch")) {
    const watch = require("node-watch");

    const watcher = watch(["public", "pages", "templates"], { delay: 0, recursive: true }, onFileEvent);

    process.on("SIGINT", watcher.close);
}
