//Prototype script

const Templates = require("./src/templates");
const Renderer = require("./src/renderer");
const Static = require("./src/static");
const Styles = require("./src/styles");

Styles.attemptToCompileStandardDirectory();

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
