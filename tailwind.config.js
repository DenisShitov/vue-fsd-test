/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '800px',
            'lg': '1024px',
            'xl': '1300px',
            '2xl': '1600px',
        },
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
                error: 'rgb(var(--color-error) / <alpha-value>)',
            }
        },
    },
    plugins: [],
}

