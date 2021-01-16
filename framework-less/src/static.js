require("colors");
const fs = require("fs");
const path = require("path");

module.exports = class Static {

    /**
     * Copies a whole directory from source to destination in the build directory.
     * @param {string} source The file path of the source directory.
     * @param {string} destination The file path of the build directory.
     * @param {boolean} recursive Whether to copy the directory recursively or the top-level only.
     */
    static copyDirectory(source, destination="", recursive=false) {
        if (fs.statSync(source, "mode").isDirectory()) {
            if (!fs.existsSync(destination)) fs.mkdirSync(destination, {recursive: true});
            for (let fileName of fs.readdirSync(source, "utf-8")) {
                const filePath = path.join(source, fileName);
                const subDestination = path.join(destination, fileName);

                if (!fs.statSync(filePath, "mode").isDirectory() || recursive) {
                    this.copyDirectory(filePath, subDestination, recursive);
                }
            }
        } else {
            fs.copyFileSync(source, destination);
            console.log(("- Copied " + source).blue);
        }
    }

    /**
     * Copies the standard static files directory (./static) into the build directory.
     */
    static copyStandardDirectory() {
        this.copyDirectory("static", "build", true);
    }

    /**
     * Watch for the changes in the (./static) directory and automatically copy the files.
     * @returns {Watcher} The created watcher.
     */
    static watchStandardDirectory() {
        const watch = require("node-watch");
        return watch("static", { delay: 0, recursive: true }, (event, filePath) => {
            const destination = path.join("build", path.relative("static", filePath));
            if (event == "update") {
                this.copyDirectory(filePath, destination, true);
            } else if (event == "remove") {
                fs.rmSync(destination, { recursive: true });
                console.log(("- Removed " + destination).red);
            }
        });
    }
}