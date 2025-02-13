import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // add custom colors to tailwind themes
        card: {
          light: 'oklch(97.23% 0.004 106.47)',
          dark: 'oklch(90% 0.004 106.47)'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
