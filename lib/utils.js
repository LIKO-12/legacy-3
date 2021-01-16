const production = process.env.NODE_ENV === "production"

module.exports = {
    getBasePath: function() {
        return production ? "/new" : "";
    }
}