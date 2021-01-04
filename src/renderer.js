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
    static md = null; // initialized later in this file.

    /**
     * Renderes a reference document into an HTML file.
     * @param {string} content The document's content in HTML.
     * @param {object} view The view properties of the document (for the usage by the template).
     * @param {string} destination A file path relative to the build directory,
     * pointing to the destination HTML document.
     */
    static renderReference(content, view, destination) {
        const extendedView = Object.assign({
            content: content,
            rootPath: path.posix.relative(path.posix.dirname(destination), "")
        }, view);

        const renderedDocument = Mustache.render(Templates.loaded.reference, extendedView, Templates.loadedParitals);
        fs.writeFileSync(path.join("build", destination), renderedDocument, "utf-8");
    }

    /**
     * Renders a reference document written in markdown into an HTML file.
     * @param {string} markdown The document's content in Markdown.
     * @param {object} view The view properties of the document (for the usage by the template).
     * @param {string} destination A file path relative to the build directory,
     * pointing to the desination HTML deocument.
     */
    static renderMarkdownReference(markdown, view, destination) {
        const rootPath = path.posix.relative(path.posix.dirname(destination), "");
        const content = md.render(markdown, {rootPath: rootPath});
        this.renderReference(content, view, destination);
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
        link.replace(/.md$/, ".html"); // Convert .md links into .html
        if (path.posix.isAbsolute(link)) link = env.rootPath + link; //Convert absulote paths to relative ones.
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