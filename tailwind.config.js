/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./src/**/*.{html,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      lightMode: {
        background: "#fafafa",
        secondaryBackground: "#f0f0f0",
        primaryText: "#18181b",
        secondaryText: "#71717a",
        accentBlue: "#3C41E9",
        accentGreen: "#12A779",
        accentOrange: "#FFA40A",
        accentPurple: "#913AF6",
        accentLightBlue: "#427DDC",
      },
      darkMode: {
        background: "#09090b",
        secondaryBackground: "#161617",
        primaryText: "#ffffff",
        secondaryText: "#a1a1aa",
        accentBlue: "#427ddc",
        accentGreen: "#0C7B5A",
        accentOrange: "#CC8308",
        accentPurple: "#732BBF",
        accentLightBlue: "#315BB0",
      },
      borders: {
        primary: "#e5e7eb",
        secondary: "#525252",
      },
    },
  },
};
export const plugins = [];
