/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            aspectRatio: {
                '4/3': '4 / 3',
                '5/7': '5 / 7',
            },
            translate: {
                '280%': '280%',
                '200%': '200%',
                '170%': '170%',
                '160%': '160%',
                '140%': '140%',
                '16%': '16%',
                '15%': '15%',
                '10%': '10%',
                '8%': '8%',
                '6%': '6%',
                '3%': '3%',
            },
            rotate: {
                24: '24deg',
                15: '15deg',
                8: '8deg',
            },
        },
    },
    plugins: [],
};
