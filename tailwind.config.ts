
import type { Config } from "tailwindcss";

export default {
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
        zacro: {
          dark: "#0A071B",
          darker: "#060414",
          purple: "#7747FF",
          "light-purple": "#9E7BFF",
          "dark-purple": "#53389E",
          blue: "#3b82f6",
          "dark-blue": "#1d4ed8",
          "light-blue": "#60a5fa",
          cyan: "#22d3ee",
          black: "#080510",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(20px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        "fade-down": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(-20px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        "fade-left": {
          "0%": { 
            opacity: "0", 
            transform: "translateX(20px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateX(0)" 
          },
        },
        "fade-right": {
          "0%": { 
            opacity: "0", 
            transform: "translateX(-20px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateX(0)" 
          },
        },
        "pulse-soft": {
          "0%, 100%": { 
            opacity: "1" 
          },
          "50%": { 
            opacity: "0.8" 
          },
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0)" 
          },
          "50%": { 
            transform: "translateY(-10px)" 
          },
        },
        "scale-in": {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.95)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "scale(1)" 
          },
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(119, 71, 255, 0.3), 0 0 10px rgba(119, 71, 255, 0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(119, 71, 255, 0.5), 0 0 30px rgba(119, 71, 255, 0.3)" 
          },
        },
        "rotate-slow": {
          "0%": { 
            transform: "rotate(0deg)" 
          },
          "100%": { 
            transform: "rotate(360deg)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out",
        "fade-up": "fade-up 0.7s ease-out",
        "fade-down": "fade-down 0.7s ease-out",
        "fade-left": "fade-left 0.7s ease-out",
        "fade-right": "fade-right 0.7s ease-out",
        "pulse-soft": "pulse-soft 3s infinite ease-in-out",
        "float": "float 6s infinite ease-in-out",
        "scale-in": "scale-in 0.7s ease-out",
        "glow": "glow 2s infinite ease-in-out",
        "rotate-slow": "rotate-slow 12s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "url('/public/lovable-uploads/69d3e0ae-ed02-4a7b-92a6-3406429bcf54.png')",
        "purple-gradient": "linear-gradient(to right, #7747FF, #9E7BFF)",
        "blue-purple-gradient": "linear-gradient(to right, #3b82f6, #7747FF)",
        "dark-gradient": "linear-gradient(to bottom, #0A071B, #060414)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
