import { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import React from "react";

import "@ant-design/v5-patch-for-react-19";

import ReduxProvider from "@/redux/provider/provider";

import "./globals.css";
import { ThemeProvider } from "next-themes";

import AntdThemeProvider from "@/theme/antd-theme-provider/antd-theme-provider";
import SchemaOrg from "@/components/global/schema-org/schema-org";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const firaCode = Fira_Code({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-fira-code",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://lilit.io.vn"),
    alternates: {
        canonical: "https://lilit.io.vn",
        languages: {
            "vi-VN": "https://lilit.io.vn",
        },
    },
    applicationName: "LILIT",
    appleWebApp: {
        title: "LILIT",
    },
    title: "LILIT - Nền tảng truyện miễn phí, không quảng cáo",
    description:
        "Khám phá thế giới truyện đa dạng tại LILIT - nền tảng truyện miễn phí, không quảng cáo. Đọc truyện online mọi lúc, mọi nơi.",
    keywords: ["truyện online", "đọc truyện miễn phí", "nền tảng truyện", "không quảng cáo"],
    authors: [{ name: "LILIT Team" }],
    openGraph: {
        title: "LILIT - Nền tảng truyện miễn phí",
        description: "Đọc truyện online miễn phí, không quảng cáo tại LILIT",
        url: "https://lilit.io.vn",
        siteName: "LILIT",
        images: [
            {
                url: "/og-image.jpg",
                width: 1920,
                height: 1080,
                alt: "LILIT - Nền tảng truyện miễn phí",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "LILIT - Đọc truyện online miễn phí",
        description:
            "Khám phá thế giới truyện đa dạng tại LILIT - không quảng cáo, hoàn toàn miễn phí",
        images: ["/twitter-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "eorL2gXY6dNP9yA19deBYBMbAGhdRx5M2yVsFO",
        yandex: "2f2fc2d1658d751f",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning lang="vi">
            <head>
                <SchemaOrg
                    dateModified="2025-02-07T08:00:00+07:00"
                    datePublished="2025-02-07T08:00:00+07:00"
                    description="Khám phá thế giới truyện đa dạng tại LILIT - nền tảng truyện miễn phí, không quảng cáo. Đọc truyện online mọi lúc, mọi nơi."
                    images={["/og-image.jpg"]}
                    title="LILIT - Nền tảng truyện miễn phí, không quảng cáo"
                    url="https://lilit.io.vn"
                />
            </head>
            <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
                <ReduxProvider>
                    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
                        <AntdThemeProvider>{children}</AntdThemeProvider>
                    </ThemeProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
