import Path from "path"

export const root = Path.join(__dirname, "../../")

export const source = {
    app: Path.join(root, "./source/app"),
    public: Path.join(root, "./source/public")
}

export const build = {
    app: Path.join(root, "./build/app"),
    public: Path.join(root, "./build/public")
}
