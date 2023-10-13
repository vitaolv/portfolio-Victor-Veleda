/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-roboto)",
        alt: "var(--font-bai-jamjuree)",
      },
      
      boxShadow: {
          'gradient-green-blue': '0 0 5px 2px linear-gradient(to right, #97C3A9, #B6DFF6)',
          'md-left-right-bottom': '2px 0px 8px -1px rgba(151, 195, 169, 1), -2px 0px 9px -1px rgba(92, 182, 235, 1), 0 2px 6px -1px rgba(151, 195, 169, 1)'
        },

        keyframes: {
          animateUnderline: {
            '0%': {
              transform: 'scaleX(0)'},
            '10%': {
              transform: 'scaleX(10%)'},
            '20%': {
              transform: 'scaleX(20%)'},
            '30%': {
              transform: 'scaleX(30%)'},
            '50%': {
              transform: 'scaleX(50%)'},
            '60%': {
              transform: 'scaleX(60%)'},
            '80%': {
              transform: 'scaleX(80%)'},
            '100%': {
              transform: 'scaleX(100%)'},
          }

        },

        animation : {
          'none': 'none',
          'underline' : 'animateUnderline 0.6s ease-in',
        },

      colors: {
        gray: {
          50:  "#D6D6D7",
          100: "#bebebf",
          200: "#9e9ea0",
          300: "#727275",
          400: "#56565a",
          500: "#2c2c31",
          600: "#28282d",
          700: "#1f1f23",
          800: "#18181b",
          900: "#101010",
        },
        purble: {
          50:  "#f3eefc",
          100: "#d8cbf7",
          200: "#c6b2f3",
          300: "#ab8eee",
          400: "#9b79ea",
          500: "#8257e5",
          600: "#764fd0",
          700: "#5c3ea3",
          800: "#313267",
          850: "#313267",
          900: "#170843",
        },
        orange: {
          50:  "#ffefeb",
          100: "#ffccc2",
          200: "#ffb4a4",
          300: "#ff927b",
          400: "#ff7d61",
          500: "#ff5c3a",
          600: "#e85435",
          700: "#b54129",
          800: "#8c3320",
          900: "#6b2718",
        },
        yellow: {
          50:  "#fff9ec",
          100: "#ffebc4",
          200: "#ffe2a7",
          300: "#ffd47f",
          400: "#ffcc66",
          500: "#ffbf40",
          600: "#e8ae3a",
          700: "#b5882d",
          800: "#8c6923",
          900: "#6b501b",
        },
        green: {
          50:  "#e6fbef",
          100: "#b1f1ce",
          200: "#8cebb6",
          300: "#57e295",
          400: "#36dc81",
          500: "#04d361",
          600: "#04c058",
          700: "#97C3A9",
          800: "#6FB091",
          900: "#025929",
        },
        turquoise: {
          50:  "#BADADE",
          100: "#83BDC3",
          200: "#58A6AF",
          300: "#499097",
          400: "#42848A",
          500: "#3C767C",
        },
        blue: {
          50:  "#B6DFF6",
          100: "#A4D7F4",
          200: "#5CB6EB",
          300: "#259EE4",
          400: "#167BB6",
          500: "#10567F",
          600: "#313267"
        }
      },
      blur: {
        full: "195px",
      },
      backgroundImage: {
        stripes:
          "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.1)12.5%, transparent12.5%, transparent)",
      },
      backgroundSize:{
        stripes:"100%8px"
      },
      fontSize:{
        "5xl":"2.3rem"
      }
    }
  },
plugins:[],
};
