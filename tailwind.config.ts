import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

console.log(colors);

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // new
        //
        //
        //
        //

        // prmitive
        blackk: "var(--blackk)",
        grey1: "var(--grey1)",
        grey2: "var(--grey2)",
        redNew: "var(--redNew)",
        blueNew: "var(--blueNew)",
        // semantic
        bg: "var(--p-grey)",
        fg: "var(--p-black)",
        form: {
          DEFAULT: "var(--blackk)",
          bg: "var(--p-grey2)",
          fg: "var(--p-black)",
          fgDisabled: "rgba(33, 33, 33, 0.45)",
        },
        interactive: {
          // DEFAULT: colors.blue[500], // need brighter
          foreground: colors.white,
          DEFAULT: "var(--p-blue)",
          fg: "var(--p-white)",
        },
        error: {
          // DEFAULT: "var(--p-red)",
          fg: "var(--p-red)",
          fgDisabled: "rgba(209, 0, 0, 0.45)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
