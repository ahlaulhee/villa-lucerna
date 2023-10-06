/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F8",
        foreground: "#000000",
        accent: "#5C6B28",
        "darker-accent": "#141C11",

        "forest-green": "#228B22",
        "ocean-blue": "#0077be",
        "sky-blue": "#87ceeb",
        "sun-yellow": "#ffcc33",
        "earth-brown": "#8b4513",
      },
    },
  },
  plugins: [],
};
