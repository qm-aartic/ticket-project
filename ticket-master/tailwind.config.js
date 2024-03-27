/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0D3273",

          "secondary": "#092657",

          "accent": "#CEA600",

          "neutral": "#ff00ff",

          "base-100": "#ffffff",

          "info": "#0000ff",

          "success": "#00ff00",

          "warning": "#00ff00",

          "error": "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

