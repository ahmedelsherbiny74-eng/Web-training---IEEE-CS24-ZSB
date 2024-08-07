/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
            'sans': ['Helvetica', 'Arial', 'sans-serif'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': ['Oswald'],
            'body': ['"Open Sans"'],
        },
        extend: {},
    },
    plugins: [],
  }