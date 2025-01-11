/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'pur-light': '#E787FC',
                'pur-med': '#BF5BF3',
                'pur-dark': '#4E1595',
                'yel-light': '#FFC144',
                'yel-med': '#FF9F0A',
                'yel-dark': '#C15B02',
            },
        },
    },
    plugins: [],
};
