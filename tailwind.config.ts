import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        "inverted-radius": "polygon(0 0, 100% 0, 100% 100%, 0 100%, 50% 50%)",
      },
      backgroundImage: {
        chair: "url('/images-section-2/background.jpeg')",
        chair2:"url('/images-section-2/background-mobile.jpg')"
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        orbitron: ["Orbitron"],
        playfairDisplay: ["Playfair Display"],
        rosca: ["Rosca", "sans-serif"],
        playfairdisplaySC: ["Playfair Display SC"],
        wosker: ["Wosker", "sans-serif"],
        glancyr:["Glancyr"]
      },
      colors: {
        "primary-foreground": "var(--primary-foreground)",
        "secondary-foreground": "var(--secondary-foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        third: "var(--third)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
