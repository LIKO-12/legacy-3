const production = process.env.NODE_ENV === "production"

if (production) console.log("PRODUCTION");

module.exports = {
    basePath: production ? "/new" : ""
}