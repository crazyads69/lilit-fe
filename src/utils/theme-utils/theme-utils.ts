export function getInitialTheme(): "light" | "dark" {
    if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            return savedTheme as "light" | "dark";
        }

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        return prefersDark ? "dark" : "light";
    }

    // Default to 'light' if running on server
    return "light";
}

export function saveTheme(theme: "light" | "dark") {
    if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
    }
}
