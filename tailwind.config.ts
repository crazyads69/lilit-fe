import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    100: "var(--primary-100)",
                    200: "var(--primary-200)",
                    300: "var(--primary-300)",
                    400: "var(--primary-400)",
                    500: "var(--primary-500)",
                    600: "var(--primary-600)",
                    700: "var(--primary-700)",
                    800: "var(--primary-800)",
                    900: "var(--primary-900)",
                },
                accent: {
                    100: "var(--accent-100)",
                    200: "var(--accent-200)",
                    300: "var(--accent-300)",
                    400: "var(--accent-400)",
                    500: "var(--accent-500)",
                    600: "var(--accent-600)",
                    700: "var(--accent-700)",
                    800: "var(--accent-800)",
                    900: "var(--accent-900)",
                },
                neutral: {
                    100: "var(--neutral-100)",
                    200: "var(--neutral-200)",
                    300: "var(--neutral-300)",
                    400: "var(--neutral-400)",
                    500: "var(--neutral-500)",
                    600: "var(--neutral-600)",
                    700: "var(--neutral-700)",
                    800: "var(--neutral-800)",
                    900: "var(--neutral-900)",
                },
                error: "var(--error)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
                mono: [
                    "var(--font-fira-code)",
                    "Fira Code",
                    "Consolas",
                    "Monaco",
                    "Courier New",
                    "monospace",
                ],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
    ],
} satisfies Config;
