module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {

            }
        },
    },
    safelist: [
        {
            pattern: /bg-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|500|600|700|800|900)/,
        },
        {
            pattern: /border-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|500|600|700|800|900)/,
        },
        {
            pattern: /text-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|500|600|700|800|900)/,
        },
        {
            pattern: /ring-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|500|600|700|800|900)/,
        },
        {
            pattern: /hover:bg-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|500|600|700|800|900)/,
        },
        {
            pattern: /hover:border-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|500|600|700|800|900)/,
        },
        {
            pattern: /focus:border-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|500|600|700|800|900)/,
        },
        {
            pattern: /focus:ring-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|500|600|700|800|900)/,
        },
    ],
    plugins: [],
};
