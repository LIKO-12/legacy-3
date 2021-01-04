require("colors");
const fs = require("fs");
const path = require("path");
const Mustache = require("mustache");
const Templates = require("./templates");
const highlight = require("highlight.js");
const MarkdownIt = require("markdown-it");

const mdReplaceLink = require("markdown-it-replace-link");
const kbd = require("markdown-it-kbd");
const emoji = require("markdown-it-emoji");
const twemoji = require("twemoji");

/**
 * Renders the static documents.
 */
const Renderer = class Renderer {
    static md = null; // (MarkdownIt instance) initialized later in this file.

    /**
     * Renderes a reference document into an HTML file.
     * @param {string} content The document's content in HTML.
     * @param {object} view The view properties of the document (for the usage by the template).
     * @param {string} destination A file path relative to the build directory,
     * pointing to the destination HTML document.
     */
    static renderReference(content, view, destination) {
        const dirName = path.relative(path.dirname(destination), "").replace(/\\/g, "/");
        const extendedView = Object.assign({
            content: content,
            rootPath: (dirName == "") ? "" : (dirName + "/")
        }, view);

        const renderedDocument = Mustache.render(Templates.loaded.reference, extendedView, Templates.loadedParitals);
        fs.writeFileSync(path.join("build", destination), renderedDocument, "utf-8");

        console.log(("- Rendered " + destination).blue);
    }

    /**
     * Renders a reference document written in markdown into an HTML file.
     * @param {string} markdown The document's content in Markdown.
     * @param {object} view The view properties of the document (for the usage by the template).
     * @param {string} destination A file path relative to the build directory,
     * pointing to the desination HTML document.
     */
    static renderMarkdownReference(markdown, view, destination) {
        const documentPath = path.dirname(destination).replace(/\\/g, "/");
        const content = md.render(markdown, { documentPath: documentPath });
        this.renderReference(content, view, destination);
    }

    /**
     * Renderes a reference document written in markdown into an HTML file.
     * @param {string} filePath The file path to the markdown document.
     * @param {object} view The view properties of the document (for the usage by the template).
     * @param {string} destination A file path relative to the build directory,
     * pointing to the destination HTML document.
     */
    static renderMarkdownFile(filePath, view, destination) {
        const markdown = fs.readFileSync(filePath, "utf-8");
        this.renderMarkdownReference(markdown, view, destination);
    }

    /**
     * Renderes a directory of documents into HTML documents in the build directory.
     * @param {string} source The file path to the source directory.
     * @param {string} destination A file path relative to the build directory.
     * @param {boolean} recursive Whether to render the directory recursively, or only the top-level of it.
     */
    static renderDirectory(source, destination, recursive = false) {
        if (fs.statSync(source, "mode").isDirectory()) {
            if (!fs.existsSync("build/" + destination)) fs.mkdirSync("build/" + destination, {recursive: true});
            for (let fileName of fs.readdirSync(source, "utf-8")) {
                const filePath = path.join(source, fileName);
                const subDestination = path.join(destination, fileName);

                if (!fs.statSync(filePath, "mode").isDirectory() || recursive) {
                    this.renderDirectory(filePath, subDestination, recursive);
                }
            }
        } else {
            const view = {
                title: "TITLE",
                description: "DESCRIPTION",
                navbar: null, //TODO: navbar processing
                sidepanel: null //TODO: sidepanel processing
            }

            this.renderMarkdownFile(source, view, destination.replace(/.md$/, ".html"));
        }
    }

    /**
     * Renders the standard documents directory (./pages) into the build directory.
     */
    static renderStandardDirectory() {
        this.renderDirectory("pages", "", true);
    }

    /**
     * Watch for the changes in the (./pages) directory and automatically rebuild.
     * @returns {Watcher} The created watcher.
     */
    static watchStandardDirectory() {
        const watch = require("node-watch");
        return watch("pages", { delay: 0, recursive: true }, (event, filePath) => {
            const destination = path.relative("pages", filePath.replace(/.md$/, ".html"));
            if (event == "update") {
                this.renderDirectory(filePath, destination, true);
            } else if (event == "remove") {
                fs.rmSync(path.join("build", destination));
                console.log(("- Removed build/" + destination).red);
            }
        });
    }
}

const md = new MarkdownIt({
    html: true,
    linkify: true,

    /**
     * Process markdown links.
     * @param {string} link The link to replace.
     * @param {object} env The markdown render environment.
     */
    replaceLink: (link, env) => {
        link = link.replace(/.md$/, ".html"); // Convert .md links into .html
        if (path.posix.isAbsolute(link)) link = path.posix.relative(env.documentPath, "." + link); //Convert absolute paths to relative ones.   
        return link;
    },

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

md.use(kbd).use(mdReplaceLink).use(emoji);
md.renderer.rules.emoji = (token, idx) => {
    return twemoji.parse(token[idx].content);
}

Renderer.md = md;

module.exports = Renderer;