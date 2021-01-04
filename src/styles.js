require("colors");
const fs = require("fs");
const path = require("path");
const sass = require("sass");

module.exports = class Styles {
    
    /**
     * Attempts to compile a .sass/.scss style file, outputing the error into the console.
     * @param {string} source The file path to the directory to store the output css at.
     * @param {string} destination A **directory** path relative to the build directory to store the result css at.
     */
    static attemptToCompileFile(source, destination) {
        const baseName = path.basename(source, path.extname(source));
        try {
            const result = sass.renderSync({file: source, sourceMap: baseName + ".css.map"});

            fs.writeFileSync(path.join(destination, baseName + ".css"), result.css);
            fs.writeFileSync(path.join(destination, baseName + ".css.map"), result.map);

            console.log(("- Rendered " + source).blue);
        } catch (error) {
            console.error(("- Failed to render " + source + ": " + error.message).red);
        }
    }

    /**
     * Attmpts to compile a directory of .sass/.scss style files, outputing errors into the console.
     * @param {string} source The file path to the directory to compile
     * @param {string} destination The file path to the directory to store the output css at.
     * @param {boolean} recursive Whether to compile the directory recusively or only the top-level of it.
     */
    static attemptToCompileDirectory(source, destination, recursive=false) {
        if (!fs.existsSync(destination)) fs.mkdirSync(destination, {recursive: true});
        for (let fileName of fs.readdirSync(source, "utf-8")) {
            if (fileName.startsWith("_")) continue;

            const filePath = path.join(source, fileName);
            if (fs.statSync(filePath, "mode").isDirectory()) {
                if (recursive) this.attemptToCompileDirectory(filePath, path.join(destination, fileName), recursive);
            } else {
                this.attemptToCompileFile(filePath, destination);
            }
        }
    }

    /**
     * Attempts to compile the standard directory (./sass) to (./build/assets/css).
     */
    static attemptToCompileStandardDirectory() {
        this.attemptToCompileDirectory("sass", "build/assets/css");
    }
}