const production = process.env.NODE_ENV === "production"

module.exports = {
    basePath: production ? "/new" : ""
}