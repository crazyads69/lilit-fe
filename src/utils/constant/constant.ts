// utils/constant/constant.ts

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
export const protectedRoutes = ["/home", "/settings", "/check-email-verification"];

export const isAuthRoute = (path: string) => authRoutes.includes(path);
export const isPublicRoute = (path: string) => publicRoutes.includes(path);
export const isProtectedRoute = (path: string) => protectedRoutes.includes(path);
