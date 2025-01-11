/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'light-red': '#ffc5ab',
                'light-blue': '#9ce4dc',
                'dark-blue': '#01314d',
                red: '#f95a5a',
                yellow: '#ffc53d',
                green: '#afd157',
                blue: '#35cee1',
                purple: '#9a63ff',
            },
        },
    },
    plugins: [],
};
