/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'unbounded': ['Unbounded', 'sans-serif'],
            },
            colors: {
                surface: '#FFFFFF',
                background: '#FAFAFA',
                'text-primary': '#0A0A0A',
                'text-secondary': '#6B7280',
                accent: '#1A1A1A',
                'accent-hover': '#333333',
                divider: '#E5E7EB',
            },
            boxShadow: {
                'card': '0 4px 24px rgba(0,0,0,0.06)',
                'card-hover': '0 12px 40px rgba(0,0,0,0.12)',
                'modal': '0 24px 80px rgba(0,0,0,0.15)',
            },
        },
    },
    plugins: [],
}
