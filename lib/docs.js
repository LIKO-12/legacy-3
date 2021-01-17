import fs from "fs";
import path from "path";
import matter from "gray-matter";
import highlight from "highlight.js";
import MarkdownIt from "markdown-it";

import mdReplaceLink from "markdown-it-replace-link";
import kbd from "markdown-it-kbd";
import emoji from "markdown-it-emoji";
import twemoji from "twemoji";

import standardEmojis from "markdown-it-emoji/lib/data/full.json";

/**
 * The absolute path to the documents directory.
 */
const documentsDirectory = path.join(process.cwd(), "docs");

const md = new MarkdownIt({
    html: true,
    linkify: true,

    replaceLink: (link, env) => {
        link = link.replace(/.md$/, ""); // Remove .md from the links
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

const emojisDefinition = Object.assign({
    "cmd": "⌘",
    "shift": "⇧",
    "alt": "⌥",
    "ctrl": "⌃",
    "liko-12": ""
}, standardEmojis);

md.use(kbd).use(mdReplaceLink).use(emoji, { defs: emojisDefinition });

md.renderer.rules.emoji = (token, idx, _, env) => {
    if (token[idx].markup == "liko-12") return `<span class="emoji_liko12"></span>`;
    return twemoji.parse(token[idx].content);
}

/**
 * Gets the parsed data of the document if it exists.
 * @param {string} id The URL path to the document, without the .md extension.
 * @return {*} The document's data. null if the document doesn't exist.
 */
export async function getDocumentData(id) {
    const fullPath = path.join(documentsDirectory, `${id}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // Use gray-matter to parse the document's metadata section.
    const matterResult = matter(fileContents);

    // Use markdown-it to convert markdown into HTML string.
    const contentHtml = md.render(matterResult.content, { documentPath: path.posix.join("docs", id) });

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}

/**
 * Indexes a directory and it's sub-directories for markdown files.
 * @param {string} dirPath The path of the directory to index.
 * @param {string} prefix Adds a prefix to the indexed paths.
 * @param {array} array An array to add the indexed paths to.
 * @return {array} An array containing the index paths. It's the same array passed in the parameters.
 */
function indexDirectoryForMdFiles(dirPath, prefix = "/docs/", array = []) {
    const fileNames = fs.readdirSync(dirPath, "utf-8");
    for (let fileName of fileNames) {
        const filePath = path.join(dirPath, fileName);
        if (fs.statSync(filePath, "mode").isDirectory()) {
            indexDirectoryForMdFiles(filePath, prefix + fileName + "/", array);
        } else {
            if (fileName.endsWith(".md")) {
                array.push(prefix + fileName.substr(0, fileName.length - 3));
            }
        }
    }
    return array;
}

/**
 * Indexes the /docs directory and it's sub-directories for markdown files.
 * @return {array} An array containing the paths of markdown documents.
 */
export function getAllDocumentsPaths() {
    return indexDirectoryForMdFiles(documentsDirectory);
}