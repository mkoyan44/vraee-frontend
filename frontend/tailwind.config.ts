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
                DEFAULT: '0.875rem', // Reduced from 1rem to 0.875rem
                sm: '0.875rem', // Reduced from 1rem to 0.875rem
                md: '1.75rem', // Reduced from 2rem to 1.75rem
                lg: '3.5rem', // Reduced from 4rem to 3.5rem
                xl: '7rem', // Reduced from 8rem to 7rem
                '2xl': '8.75rem', // Reduced from 10rem to 8.75rem
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
