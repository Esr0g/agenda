/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/views/**/*.{vue,js,html}"
    ],
    theme: {
        extend: {
            spacing: {
                '1/7': '14.285714286%'
            }
        },
    },
    plugins: [],
}
