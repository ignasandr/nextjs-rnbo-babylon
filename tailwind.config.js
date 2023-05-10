/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
              "primary": "#ed8b9d",
              "secondary": "#f71143",
              "accent": "#22b8c9",
              "neutral": "#2A3037",
              "base-100": "#FFFFFF",
              "info": "#4197C8",
              "success": "#18683C",
              "warning": "#B28F10",
              "error": "#FC715F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
