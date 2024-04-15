// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")


module.exports = {
  content: ['./src/**/*.{js,jsx,jsx,ts,tsx,css}'],
  darkMode: 'media',
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        jump: {
          "0%, 100%": { transform: "translateY(0)" },
          "30%, 70%": { transform: "translateY(-1rem)" },
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        jump: "jump .5s ease forwards"
      },
      backgroundImage: {
      },
      fontFamily: {
        'h': ['Montserrat', 'sans-serif'],
        'sh': ['Penultimate', 'sans-serif'],
      },
      fontSize: {
        'h1': '2.25em',
        'h2': '1.875em',
        'h3': '1.5em',
        'h4': '1.25em',
        'h5': '1.125em',
        'h6': '1em', 
        'p': '1em',
      },
      colors: {
        "light-blue": "#017cff",
        "primary-blue": "#012cb8",
        "muted-blue": "#6fbaf7",
        "input-black": "#000000",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("native", "&::part(native)")
      addVariant("scroll", "&::part(scroll)")
      addVariant("image", "&::part(image)")
      addVariant("background", "&::part(background)")
      addVariant("content", "&::part(content)")
      addVariant("content", "&::part(detail-icon)")
      addVariant("container", "&::part(container)")
      addVariant("label", "&::part(label)")
    })
  ],
}