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
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        halloween: {
          ...require("daisyui/src/theming/themes")["halloween"],
          primary: "blue",
          "primary-content": "white",
          error: "red",
          "error-content": "white",
          warning: "yellow",
          "warning-content": "black",
          success: "green",
          "success-content": "white",
          info: "cyan",
          "info-content": "black",
          accent: "orange",
          "accent-content": "black",
          neutral: "black",
          "neutral-content": "white",
        },
      }
    ]
  }
}
