/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl'
  ],
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Core brand
        "deep-sea": "#003F5C",
        "gulf-blue": "#006994",
        "sky-water": "#48B4E0",
        // Accents
        "sunshine": "#FFD166",
        "sunset-coral": "#FF6B6B",
        "seafoam": "#A8E6CF",
        // Neutrals
        "white-sand": "#F5DEB3",
        "shell": "#FFF9F0",
        "driftwood": "#8B7355",
        "charcoal": "#1A2E3B",
        "fog": "#EDF4F8",
      },
      fontFamily: {
        // Display
        display: ["Pacifico"],
        // UI (Nunito) — per weight
        ui: ["Nunito"],
        "ui-semibold": ["Nunito_600SemiBold"],
        "ui-bold": ["Nunito_700Bold"],
        "ui-extrabold": ["Nunito_800ExtraBold"],
        // Body (DM Sans) — per weight
        body: ["DMSans"],
        "body-medium": ["DMSans_500Medium"],
        "body-semibold": ["DMSans_600SemiBold"],
      },
      borderRadius: {
        sm: "8",
        md: "14",
        lg: "22",
        xl: "32",
        pill: "999",
      },
      spacing: {
        "xs": "4",
        "sm": "8",
        "md": "16",
        "lg": "24",
        "xl": "40",
        "2xl": "64",
        "3xl": "88",
        "4xl": "100",
      },
    },
  },
  plugins: [],
};