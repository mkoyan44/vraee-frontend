/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                md: '2rem',
                lg: '4rem',
                xl: '8rem',
                '2xl': '10rem',
            },
            maxWidth: {
                none: '100%',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                "2xl": "1536px",
            }
        },
        colors: {
            "primary": "#FFC933",
            "secondary": "#565658",
            "dark":"#000000",
            "primary-text": "#343434",
            "primary-light": "#ffffff",
            "secondary-light": "#EAEAEA",
            "error": "#E63549",
            "warning": "#41AF60",
        },
        extend: {
            fontFamily: {
                Inter: ['"Inter"', 'sans-serif']
            },
            fontSize: {
                "2.5xl" : "1.75rem"
            }
        },
    },
    plugins: [],
};
