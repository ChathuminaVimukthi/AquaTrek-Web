/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1FA7B8",   // Primary CTA
          hover: "#2BC3D3",     // CTA hover / interactive glow
          bg: "#F5F5F5"
        },
        secondary: {
          DEFAULT: "#1C5D44",   // Secondary CTA
          hover: "#7FA27B",     // Soft green hover
        },
        brand: {
          deep: "#072D48",      // Standard text
          navy: "#0C3C63",      // headings / readable base
        },
        nature: {
          bg: "#7DBFA7",        // Nature information sections
          text: "#0C3C63",      // Text in nature sections
        },
        accent: {
          offer: "#FF7C19",     // Pricing / offer tags / urgency
          gold: "#FFB034",      // Secondary highlight from logo
        },
        highlight: {
          text: "#1FA7B8",      // Inline highlight text on Navy
        },
      },
    },
  },
  plugins: [],
}
