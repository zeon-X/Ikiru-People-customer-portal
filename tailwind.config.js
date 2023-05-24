/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "360px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#438E4D",

          secondary: "#F2F2F2",

          accent: "#d6d3d1",

          neutral: "#F5F5F5",

          "base-100": "#FFFFFF",

          info: "#84DEF1",

          success: "#65a30d",

          warning: "#FF8A00",

          error: "#FC3400",
        },
      },
      "light",
      "cupcake",
    ],
  },
};
