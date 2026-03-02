export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#d33131",
        "background-light": "#ffffff",
        "background-dark": "#703535",
      },
      fontFamily: {
        "display": ["Work Sans", "sans-serif"],
        "sans": ["Work Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1.25rem",
        "3xl": "2rem",
        "full": "9999px"
      },
      boxShadow: {
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07), inset 0 1px 1px rgba(255, 255, 255, 1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'glass-button-light': '0 4px 12px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
        'glass-button-dark': '0 4px 12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
