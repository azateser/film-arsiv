/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#DBFA3A",

        secondary: "#2B2E37",

        background: "#121318",

        text: "#121318"
      },
      fontFamily: {
        inter100: ["Inter_100Thin"],
        inter200: ["Inter_200ExtraLight"],
        inter300: ["Inter_300Light"],
        inter400: ["Inter_400Regular"],
        inter500: ["Inter_500Medium"],
        inter600: ["Inter_600SemiBold"],
        inter700: ["Inter_700Bold"],
        inter800: ["Inter_800ExtraBold"],
        inter900: ["Inter_900Black"],
      },
    },
  },
  plugins: [],
}

