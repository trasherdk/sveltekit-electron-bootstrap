module.exports = {
    purge: ["./index.html", "./**/*.{svelte,ts,svg}"],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "2rem"
        },
        borderWidth: {
            DEFAULT: "1px",
            0: "0",
            2: "2px",
            3: "3px",
            4: "4px",
            6: "6px"
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"]
        },
        extend: {
            colors: {}
        }
    },
    variants: {},
    plugins: []
}
