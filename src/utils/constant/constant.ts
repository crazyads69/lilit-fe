export const authRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];
export const publicRoutes = [
    "/terms",
    "/privacy",
    "/about",
    "/payment",
    "/profile",
    "/stories",
    "/reading-lists",
    "/", // Public landing page
];

export const isAuthRoute = (path: string) => {
    return authRoutes.some((route) => path === route || path.startsWith(`${route}/`));
};

export const isPublicRoute = (path: string) => {
    return publicRoutes.some((route) => path === route || path.startsWith(`${route}/`));
};
