/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/store/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {

      screens: {
        'screen-menu-min': '1045px',
        'screen-menu-max': '1045px',
      },

      fontFamily: {
        sans: "var(--font-roboto)",
        alt: "var(--font-bai-jamjuree)",
      },

      boxShadow: {
          'inset-top-about-me-sm': 'inset 0 120px #101010',
          'inset-top-about-me': 'inset 0 180px #101010',
          'gradient-green-blue': '0 0 5px 2px linear-gradient(to right, #97C3A9, #B6DFF6)',
          'md-left-right-bottom': '2px 0px 8px -1px rgba(151, 195, 169, 1), -2px 0px 9px -1px rgba(92, 182, 235, 1), 0 2px 6px -1px rgba(151, 195, 169, 1)',
        },

      animation : {
          'none': 'none',
          'waveHand': 'waveHand 2s infinite',
          'underline' : 'animateUnderline 0.6s ease-in',
          'topOriginMenu': 'translateMenu 0.14s ease-in-out',
          'spinCircle': 'spin 2s linear infinite',
          'fadeInScrollWithOpacity': 'fadeInScrollWithOpacity 2s ease-in-out forwards',
          'fadeInScroll': 'fadeInScroll 2s ease-in-out forwards',
          'underlineAnimationGradient': 'animateGradient 2s linear infinite',
          'buttonAnimationGradient': 'animateGradient 2s linear',
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
          },

          animateGradient: {
            '0%': { backgroundPositionX: '0%' },
            '100%': { backgroundPositionX: '100%' },
            'background': 'linear-gradient(to right, #34d399, #38bdf8, #6ee7b7, #93c5fd)',
          },
          
          translateMenu: {
            '0%': {
            transform: 'scaleY(0)', opacity: "0%"},
            '10%': { 
            transform: 'scaleY(10%)', opacity: "10%"},
            '20%': { 
            transform: 'scaleY(20%)', opacity: "10%"},
            '30%': { 
            transform: 'scaleY(30%)', opacity: "20%"},
            '40%': { 
            transform: 'scaleY(40%)', opacity: "20%"},
            '50%': { 
            transform: 'scaleY(50%)', opacity: "30%"},
            '60%': { 
            transform: 'scaleY(60%)', opacity: "45%"},
            '70%': { 
            transform: 'scaleY(70%)', opacity: "60%"},
            '80%': { 
            transform: 'scaleY(80%)', opacity: "70%"},
            '90%': { 
            transform: 'scaleY(90%)', opacity: "80%"},
            '100%': { 
            transform: 'scaleY(100%)', opacity: "90%"},
          },

          fadeInScrollWithOpacity: {
            '0%': {
              opacity: '0',
              transform: 'translateY(36px)',
              transition: 'all 2s',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
              visibility: 'visible',
              
            }
          },

          fadeInScroll: {
            '0%': {
              opacity: '1',
            },
            '100%': {
              opacity: '0',
            }
          },
          
          spin: {
            '100%': {
              transform: 'rotate(360deg)'
            }
          },
          waveHand: {
            '0%': { transform: 'rotate(0deg) translateY(0)' },
            '10%': { transform: 'rotate(14deg) translateY(-8%)' },
            '20%': { transform: 'rotate(-8deg) translateY(8%)' },
            '30%': { transform: 'rotate(14deg) translateY(-4%)' },
            '40%': { transform: 'rotate(-4deg) translateY(4%)' },
            '50%': { transform: 'rotate(10deg) translateY(-2%)' },
            '60%': { transform: 'rotate(0deg) translateY(2%)' },
            '100%': { transform: 'rotate(0deg) translateY(0)' },
          }
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
          700: "#79B392",
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
          'linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.3) 12.5%, transparent 12.5%, transparent)',
        },
      backgroundSize:{
        stripes:"100% 8px"
      },
      fontSize:{
        "md": "1rem",
        'lgPlus': '1.225rem',
        "5xl":"2.5rem"
      }
    }
  },
plugins:[],
};