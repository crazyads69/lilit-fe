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
                src: "/favicon.ico",
                sizes: "48x48",
                type: "image/x-icon",
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
        ],
        categories: ["books", "entertainment"],
        lang: "vi-VN",
        dir: "ltr",
    };
}
