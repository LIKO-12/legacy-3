//Prototype script

require("colors");
console.log("LIKO-12's Website static generation script:".bold.cyan);
console.log("-------------------------------------------".bold.cyan);

const Templates = require("./src/templates");
const Renderer = require("./src/renderer");
const Static = require("./src/static");
const Styles = require("./src/styles");

console.info("\nCompiling .sass/.scss stylesheets...".magenta);
Styles.attemptToCompileStandardDirectory();
console.info("\nCopying static files into ./build...".magenta);
Static.copyStandardDirectory();
console.info("\nLoading templates...".magenta);
Templates.loadStandardTemplates();
console.info("\nLoading templates partials...".magenta);
Templates.loadStandardPartials();
console.info("\nRendering documents...".magenta);
Renderer.renderStandardDirectory();
console.info("\nBuilt the website successfully!".green);

if (process.argv.includes("--watch")) {
    const sassWatcher = Styles.watchStandardDirectory();
    const staticWatcher = Static.watchStandardDirectory();
    const pagesWatcher = Renderer.watchStandardDirectory();
    const templatesWatcher = Templates.watchStandardDirectory();

    console.info("\nWatching for files changes, press Ctrl-C to terminate the process.\n".yellow.bold);

    process.on("SIGINT", () => {
        sassWatcher.close();
        staticWatcher.close();
        pagesWatcher.close();
        templatesWatcher.close();
        console.log("Terminated live rebuilding.".yellow);
    });
}

// ------------------------------ Watching directories ------------------------------ //

// function onFileEvent(eventName, filePath) {
//     if (eventName === "update") {
//         if (filePath.substr(0, 6) === "public") {
//             copyFilesRecursive(filePath, "build" + filePath.substr(6));
//         } else if (filePath.substr(0, 5) === "pages") {
//             render(filePath, "build" + filePath.substr(5));
//         } else if (filePath.substr(0, 19) == "templates/_partials") {
//             loadTemplatePartial(filePath);
//             render("pages", "build");
//         } else if (filePath.substr(0, 9) == "templates") {
//             loadTemplate(filePath);
//             render("pages", "build");
//         }

//         console.log(("- Processed " + filePath).cyan);
//     }
// }

// if (process.argv.includes("--watch")) {
//     const watch = require("node-watch");

//     const watcher = watch(["public", "pages", "templates"], { delay: 0, recursive: true }, onFileEvent);

//     process.on("SIGINT", watcher.close);
// }
