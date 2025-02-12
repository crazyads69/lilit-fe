import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "LILIT - Nền tảng truyện miễn phí, không quảng cáo",
        short_name: "LILIT",
        description:
            "Khám phá thế giới truyện đa dạng tại LILIT - nền tảng truyện miễn phí, không quảng cáo. Đọc truyện online mọi lúc, mọi nơi.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
            {
                src: "/web-app-manifest-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "/web-app-manifest-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "/web-app-manifest-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/favicon.ico",
                sizes: "48x48",
                type: "image/x-icon",
            },

            {
                src: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
            {
                src: "/apple-icon.png",
                sizes: "152x152",
                type: "image/png",
            },
        ],
        related_applications: [],
        prefer_related_applications: false,
        shortcuts: [
            {
                name: "Trang chủ",
                short_name: "Home",
                description: "Đi đến trang chủ LILIT",
                url: "/",
                icons: [{ src: "/web-app-manifest-192x192.png", sizes: "192x192" }],
            },
            {
                name: "Đăng nhập",
                short_name: "Login",
                description: "Đi đến trang đăng nhập",
                url: "/login",
                icons: [{ src: "/web-app-manifest-192x192.png", sizes: "192x192" }],
            },
            {
                name: "Điều khoản sử dụng",
                short_name: "Terms",
                description: "Đi đến trang điều khoản sử dụng",
                url: "/terms",
                icons: [{ src: "/web-app-manifest-192x192.png", sizes: "192x192" }],
            },
            {
                name: "Về chúng tôi",
                short_name: "About",
                description: "Đi đến trang về chúng tôi",
                url: "/about",
                icons: [{ src: "/web-app-manifest-192x192.png", sizes: "192x192" }],
            },
            {
                name: "Chính sách bảo mật",
                short_name: "Privacy",
                description: "Đi đến trang chính sách bảo mật",
                url: "/privacy",
                icons: [{ src: "/web-app-manifest-192x192.png", sizes: "192x192" }],
            },
            {
                name: "Chính sách thanh toán",
                short_name: "Payment",
                description: "Đi đến trang chính sách thanh toán",
                url: "/payment",
                icons: [{ src: "/web-app-manifest-192x192.png", sizes: "192x192" }],
            },
        ],
        categories: ["books", "entertainment", "lifestyle", "social", "utilities", "productivity"],
        lang: "vi-VN",
        dir: "ltr",
    };
}
