/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#0a0f1c',
        'cyber-dark': '#1a2332',
        'cyber-blue': '#00d4ff',
        'cyber-blue-light': '#33e0ff',
        'cyber-purple': '#6366f1',
        'cyber-purple-light': '#8b5cf6',
        'cyber-glow': '#ffffff',
        // Legacy support
        'teal': '#00d4ff',
        'teal-light': '#33e0ff',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
    },
  },
  plugins: [],
}