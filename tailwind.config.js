/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        "holy": {
          ...require("daisyui/src/theming/themes")["holy"],
          "base-100": "#121212",
          "base-200": "#252525",
          "base-300": "#343434",
          "base-content": "#EEEEEE",
          "primary": "#F0A500",
          "primary-content": "#FEFEFE",
          "secondary": "#A0153E",
          "secondary-content": "#FEFEFE",
          "neutral": "#005B41",
          "neutral-content": "#FEFEFE",
          "info": "#15F5BA",
          "info-content": "#111111",
          "accent": "#F72798",
          "accent-content": "FEEEFE",
          "warning": "#EBF400",
          "warning-content": "#492232",
          "error": "#f70b26",
          "error-content": "#FEFEFE",
          "success": "#0fd85f",
          "success-content": "#FEFEFE",
        },
      }
    ]
  }
}
