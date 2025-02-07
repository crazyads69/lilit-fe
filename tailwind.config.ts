import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["class"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "var(--ant-primary-color)",
                    hover: "var(--ant-primary-color-hover)",
                    active: "var(--ant-primary-color-active)",
                    outline: "var(--ant-primary-color-outline)",
                },
                success: "var(--ant-success-color)",
                warning: "var(--ant-warning-color)",
                error: "var(--ant-error-color)",
                info: "var(--ant-info-color)",
                text: {
                    DEFAULT: "var(--ant-text-color)",
                    secondary: "var(--ant-text-color-secondary)",
                    disabled: "var(--ant-text-color-disabled)",
                },
                bg: {
                    DEFAULT: "var(--ant-body-background)",
                    container: "var(--ant-component-background)",
                    layout: "var(--ant-layout-body-background)",
                },
                border: "var(--ant-border-color-base)",
            },
            fontFamily: {
                sans: ["var(--ant-font-family)"],
            },
            fontSize: {
                xs: "var(--ant-font-size-sm)",
                sm: "var(--ant-font-size-base)",
                base: "var(--ant-font-size-base)",
                lg: "var(--ant-font-size-lg)",
                xl: "var(--ant-font-size-xl)",
            },
            borderRadius: {
                DEFAULT: "var(--ant-border-radius-base)",
                sm: "var(--ant-border-radius-sm)",
                lg: "var(--ant-border-radius-lg)",
            },
            boxShadow: {
                DEFAULT: "var(--ant-box-shadow-base)",
            },
            spacing: {
                xs: "var(--ant-margin-xs)",
                sm: "var(--ant-margin-sm)",
                md: "var(--ant-margin)",
                lg: "var(--ant-margin-lg)",
                xl: "var(--ant-margin-xl)",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
    ],
} satisfies Config;
