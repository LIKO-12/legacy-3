const production = process.env.NODE_ENV === "production"

export function getBasePath() {
    return production ? "/new" : "";
}