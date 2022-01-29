module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.tsx', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {},
            fontFamily: {
                sans: ['Roboto'],
                serif: ['Roboto\\ Slab'],
                display: ['Roboto\\ Slab'],
                body: ['Roboto'],
                mono: ['Roboto\\ Mono'],
            },
            colors: {
                primary: '#003eb9',
                secondary: '#bdbcb5',
                invert: '#ffffff',
                copy: '#3d4653',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
};
