require("colors");
const fs = require("fs");
const path = require("path");
const Mustache = require("mustache");

/**
 * Manages the loading and the caching of the mustache templates.
 */
module.exports = class Templates {
    /**
     * Contains all the loaded templates.
     */
    static loaded = {};

    /**
     * Contains all the loaded partials.
     */
    static loadedParitals = {};

    /**
     * Loads a specific template from file.
     * @param {string} filePath The file path of the template file to load.
     * @param {string} templateName The name of the template to register.
     */
    static loadTemplate(filePath, templateName) {
        const template = fs.readFileSync(filePath, "utf-8");
        Mustache.parse(template);
        this.loaded[templateName] = template;

        console.log(("- Loaded " + filePath + " as a template.").blue);
    }

    /**
     * Loads a specific partial from file.
     * @param {string} filePath The file path of the partial file to load.
     * @param {string} paritalName The name of the partial to register.
     */
    static loadPartial(filePath, paritalName) {
        const partial = fs.readFileSync(filePath, "utf-8");
        Mustache.parse(partial);
        this.loadedParitals[paritalName] = partial;

        console.log(("- Loaded " + filePath + " as a template partial.").blue);
    }

    /**
     * Loads a directory of templates, not recursive.
     * @param {string} directory The file path of the directory to load.
     * @param {string} templateNamePrefix Prefixes the loaded templates names,
     * useful for loading sub-directories of templates.
     */
    static loadTemplatesDirectory(directory, templateNamePrefix="") {
        for (let fileName of fs.readdirSync(directory)) {
            const filePath = path.join(directory, fileName);
            if (fs.statSync(filePath, "mode").isDirectory()) continue;

            const templateName = templateNamePrefix + path.basename(fileName, path.extname(fileName));
            this.loadTemplate(filePath, templateName);
        }

        console.log(("- Loaded templates from " + directory + ".").cyan);
    }

    /**
     * Loads a directory of partials, not recursive.
     * @param {string} directory The filepath of the directory to load.
     * @param {string} partialNamePrefix Prefixes the loaded partials names,
     * useful for loading sub-directories of partials.
     */
    static loadPartialsDirectory(directory, partialNamePrefix="") {
        for (let fileName of fs.readdirSync(directory)) {
            const filePath = path.join(directory, fileName);
            if (fs.statSync(filePath, "mode").isDirectory()) continue;

            const partialName = partialNamePrefix + path.basename(fileName, path.extname(fileName));
            this.loadPartial(filePath, partialName);

            console.log(("- Loaded templates partials from " + directory + ".").cyan);
        }
    }

    /**
     * Loads the templates from the standard directory (./templates).
     */
    static loadStandardTemplates() {
        if (!fs.existsSync("templates")) return;
        this.loadTemplatesDirectory("templates");
    }

    /**
     * Loads the templates partials from the standard directory ("./templates/_partials").
     */
    static loadStandardPartials() {
        if (!fs.existsSync("templates/_partials")) return;
        this.loadPartialsDirectory("templates/_partials");
    }
};