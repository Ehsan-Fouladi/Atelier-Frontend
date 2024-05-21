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
        light: {
          ...require("daisyui/src/theming/themes")["halloween"],
          ".btn-order": {
            "background-color": "#6f4ef2",
            "border-radius": "0.75rem",
            "padding-left":"1rem",
            "padding-right":"1rem",
            "padding-top": "0.75rem",
            "padding-bottom": "0.75rem",
            "color": "white",
            "border-color": "#6f4ef2",
          },
          ".btn-order:hover": {
            "background-color": "#572dff",
            "border-color": "#572dff",
          },
          ".btn-delete": {
            "background-color": "#f73164",
            "border-radius": "0.75rem",
            "padding-left":"1rem",
            "padding-right":"1rem",
            "padding-top": "0.75rem",
            "padding-bottom": "0.75rem",
            "color": "white",
            "border-color": "#f73164",
          },
          ".btn-delete:hover": {
            "background-color": "#ff1751",
            "border-color": "#ff1751",
          },
        },
      }
    ]
  }
}
