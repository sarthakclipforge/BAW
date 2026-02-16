/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#111111",
                "primary-hover": "#333333",
                "accent-new": "#F97316", // Orange for New pill
                "background": "#F8F8F8", // Off-white
                "background-card": "#FFFFFF",
                "border-light": "#E5E5E5",
                "text-primary": "#111111",
                "text-secondary": "#666666",
                "badge-bg": "#ECFDF5",
                "badge-text": "#059669",
                "badge-purple": "#8B5CF6", // Approximate purple for custom badge
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
            },
            fontSize: {
                'h1': ['80px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
                'h2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
                'body': ['18px', { lineHeight: '1.6' }],
                'small-ui': ['15px', { lineHeight: '1.5' }],
            },
            spacing: {
                '128': '32rem', // 512px
                '160': '10rem', // 160px
                'card-pad': '48px',
                'card-pad-sm': '32px',
            },
            borderRadius: {
                'pill': '100px',
                'card': '24px',
                'image': '32px',
            },
            maxWidth: {
                'screen-xl': '1200px',
            },
            boxShadow: {
                'subtle': '0 10px 40px rgba(0,0,0,0.04)',
                'card-hover': '0 20px 40px rgba(0,0,0,0.08)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
