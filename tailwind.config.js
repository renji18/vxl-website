/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPurple: '#7129D6'
      },
      boxShadow: {
        darkShadow:
          "0 2px 4px 0 rgba(136, 144, 195, 0.2), 0 5px 15px 0 rgba(37, 44, 97, 0.15)",
        lighShadow: "0px 1px 20px rgba(0, 0, 0, 0.07)",
        boldShadow: "0 12px 44px 0 rgba(0, 0, 0, 0.1)",
      },
      screens: {
        md: "501px",
        lg: "901px",
        xl: "1201px",
      },
    },
  },
  plugins: [],
}
