import { Metadata } from "next";
import Head from "next/head";
import React from "react";

import SchemaOrg from "@/components/global/schema-org/schema-org";

export const metadata: Metadata = {
    metadataBase: new URL("https://lilit.io.vn"),
    alternates: {
        canonical: "https://lilit.io.vn/login",
        languages: {
            vi: "https://lilit.io.vn/login",
        },
    },
    title: "Đăng nhập - LILIT | Nền tảng truyện online miễn phí",
    description:
        "Đăng nhập vào LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo. Khám phá thế giới truyện đa dạng với hàng ngàn tác phẩm từ nhiều thể loại.",
    keywords: [
        "LILIT",
        "đăng nhập",
        "nền tảng truyện",
        "miễn phí",
        "không quảng cáo",
        "đọc truyện online",
        "truyện đa dạng",
        "tài khoản người dùng",
        "trải nghiệm đọc truyện",
    ],
    authors: [{ name: "LILIT Team" }],
    openGraph: {
        title: "Đăng nhập - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Đăng nhập vào LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo. Khám phá thế giới truyện đa dạng với hàng ngàn tác phẩm từ nhiều thể loại.",
        url: "https://lilit.io.vn/login",
        siteName: "LILIT",
        images: [
            {
                url: "/og-image.jpg",
                width: 1920,
                height: 1080,
                alt: "LILIT - Đăng nhập",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Đăng nhập - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Đăng nhập vào LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo. Khám phá thế giới truyện đa dạng với hàng ngàn tác phẩm từ nhiều thể loại.",
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
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link href="https://lilit.io.vn/login" rel="canonical" />
            </Head>
            <SchemaOrg
                dateModified={new Date().toISOString()}
                datePublished="2025-02-07T08:00:00+07:00"
                description="Đăng nhập vào LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo. Khám phá thế giới truyện đa dạng với hàng ngàn tác phẩm từ nhiều thể loại."
                images={["/og-image.jpg"]}
                title="Đăng nhập - LILIT | Nền tảng truyện online miễn phí"
                url="https://lilit.io.vn/login"
            />
            {children}
        </>
    );
}
