/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                mainGreen: '#2DCA72',
                secondaryGray: '#C9C9C9',
            }
        },
    },
    plugins: [],
}

