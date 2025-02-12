import { Metadata } from "next";
import Head from "next/head";
import React from "react";

import SchemaOrg from "@/components/global/schema-org/schema-org";

export const metadata: Metadata = {
    metadataBase: new URL("https://lilit.io.vn"),
    alternates: {
        canonical: "https://lilit.io.vn/register",
        languages: {
            vi: "https://lilit.io.vn/register",
        },
    },
    title: "Đăng ký - LILIT | Nền tảng truyện online miễn phí",
    description:
        "Đăng ký tài khoản LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo. Tham gia cộng đồng LILIT và khám phá thế giới truyện đa dạng với hàng ngàn tác phẩm từ nhiều thể loại.",
    keywords: [
        "LILIT",
        "đăng ký",
        "tạo tài khoản",
        "nền tảng truyện",
        "miễn phí",
        "không quảng cáo",
        "đọc truyện online",
        "truyện đa dạng",
        "cộng đồng đọc truyện",
        "trải nghiệm đọc truyện",
    ],
    authors: [{ name: "LILIT Team" }],
    openGraph: {
        title: "Đăng ký - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Đăng ký tài khoản LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo. Tham gia cộng đồng LILIT và khám phá thế giới truyện đa dạng với hàng ngàn tác phẩm từ nhiều thể loại.",
        url: "https://lilit.io.vn/register",
        siteName: "LILIT",
        images: [
            {
                url: "/og-image.jpg",
                width: 1920,
                height: 1080,
                alt: "LILIT - Đăng ký",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Đăng ký - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Đăng ký tài khoản LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo. Tham gia cộng đồng LILIT và khám phá thế giới truyện đa dạng với hàng ngàn tác phẩm từ nhiều thể loại.",
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

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link href="https://lilit.io.vn/register" rel="canonical" />
            </Head>
            <SchemaOrg
                dateModified={new Date().toISOString()}
                datePublished="2025-02-07T08:00:00+07:00"
                description="Đăng ký tài khoản LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo. Tham gia cộng đồng LILIT và khám phá thế giới truyện đa dạng với hàng ngàn tác phẩm từ nhiều thể loại."
                images={["/og-image.jpg"]}
                title="Đăng ký - LILIT | Nền tảng truyện online miễn phí"
                url="https://lilit.io.vn/register"
            />
            {children}
        </>
    );
}
