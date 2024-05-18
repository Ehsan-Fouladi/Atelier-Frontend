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
      backgroundColor:{
        'indigo-dark':'#6f4ef2',
        'indigo-dark-hover':'#572dff',
        'pink-red':'#f73164',
        'pink-red-dark':'#ff1751',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["synthwave"]
  }
}

