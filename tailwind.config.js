/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./templates/**/*.twig', './src/**/*.{js,jsx,ts,tsx,vue,css,pcss}'],
    darkMode: 'class',
    theme: {
        fontSize: {
            lg: ['1.125rem', '2rem'], // 20px
            xl: ['1.5625rem', '2.5rem'], // 25px
            '2xl': ['2.1875rem', '2.8125rem'], // 35px
            '3xl': ['2.5rem', '5rem'], // 40px
            '4xl': ['3.125rem', '4.225rem'], // 50px
            '5xl': ['4.6875rem', '5.625rem'], // 75px
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
            },
        },
        extend: {
            maxWidth:{
                '8xl': '90rem',
            },
            zIndex: {
                '60': 60,
                '70': 70,
                '80': 80,
            },
            fontFamily: {
                sans: ['Josefin Sans', 'sans-serif'],
            },
            colors: {
                primary: '#D52E7F',
                secondary: '#564B4F',
                input: '#AAA5A7'
            },
        },
    },
    plugins: [],
}
