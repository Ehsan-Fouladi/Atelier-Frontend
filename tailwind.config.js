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
      backgroundColor: {
        "gray-20":"#f2f2f2"
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        halloween: {
          ...require("daisyui/src/theming/themes")["halloween"],
          primary: "#0091ea",
          "primary-content": "white",
          error: "#f70b26",
          "error-content": "white",
          warning: "#ff6f0f",
          "warning-content": "black",
          success: "#0fd85f",
          "success-content": "white",
          info: "#05c2d5",
          "info-content": "black",
          accent: "#ff7f0b",
          "accent-content": "black",
          neutral: "#121212",
          "neutral-content": "white",
          secondary: "#5576a2",
          "secondary-content":"white",
          "base-100":"#6c463c",
          "base-200":"#865b48",
          "base-300":"#9c7156",
          "base-content":"#ffff"
        },
      }
    ]
  }
}
