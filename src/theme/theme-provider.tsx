"use client";
import { ThemeProvider } from "@material-tailwind/react";
import React from "react";

const theme = {
    typography: {
        defaultProps: {
            color: "neutral",
            textGradient: false,
            fontFamily: "Inter, Arial, sans-serif",
        },
        styles: {
            h1: {
                color: "neutral-900",
                ".dark &": { color: "primary-100" },
            },
            h2: {
                color: "neutral-900",
                ".dark &": { color: "primary-100" },
            },
            h3: {
                color: "neutral-900",
                ".dark &": { color: "primary-100" },
            },
            h4: {
                color: "neutral-900",
                ".dark &": { color: "primary-100" },
            },
            h5: {
                color: "neutral-900",
                ".dark &": { color: "primary-100" },
            },
            h6: {
                color: "neutral-900",
                ".dark &": { color: "primary-100" },
            },
            p: {
                color: "neutral-800",
                ".dark &": { color: "neutral-200" },
            },
            a: {
                color: "primary-600",
                "&:hover": {
                    color: "primary-700",
                },
                ".dark &": {
                    color: "primary-400",
                    "&:hover": { color: "primary-300" },
                },
            },
        },
    },
    button: {
        defaultProps: {
            color: "primary",
            variant: "filled",
        },
        styles: {
            variants: {
                filled: {
                    primary: {
                        background: "primary-500",
                        color: "neutral-100",
                        ".dark &": {
                            background: "primary-700",
                            color: "neutral-100",
                        },
                    },
                    secondary: {
                        border: "1px solid primary-500",
                        color: "primary-600",
                        ".dark &": {
                            border: "1px solid primary-400",
                            color: "primary-400",
                        },
                    },
                    accent: {
                        background: "accent-500",
                        color: "neutral-100",
                        ".dark &": {
                            background: "accent-600",
                            color: "neutral-100",
                        },
                    },
                },
            },
        },
    },
    navbar: {
        defaultProps: {
            color: "primary",
        },
        styles: {
            base: {
                background: "primary-600",
                color: "neutral-100",
                ".dark &": {
                    background: "primary-800",
                    color: "neutral-100",
                },
            },
        },
    },
    card: {
        defaultProps: {
            color: "white",
            shadow: true,
        },
        styles: {
            base: {
                background: "neutral-100",
                border: "1px solid neutral-300",
                ".dark &": {
                    background: "neutral-800",
                    border: "1px solid neutral-700",
                },
            },
        },
    },
    icon: {
        defaultProps: {
            color: "neutral",
        },
        styles: {
            base: {
                color: "neutral-600",
                ".dark &": { color: "neutral-400" },
            },
            interactive: {
                color: "primary-500",
                ".dark &": { color: "primary-400" },
            },
            accent: {
                color: "accent-500",
                ".dark &": { color: "accent-400" },
            },
        },
    },
};

export default function MaterialThemeProvider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider value={theme}>{children}</ThemeProvider>;
}
