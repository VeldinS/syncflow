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
                defaultDark: '#0D0D0D'
            },
            fontFamily: {
                redHat: ['"Red Hat Display"', 'sans-serif'],
            },
            boxShadow: {
                mainGreenShadow: '0 1px 30px rgba(0, 256, 0, 1)',
            },
        },
    },
    plugins: [],
}

