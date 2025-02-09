import { Metadata } from "next";
import Head from "next/head";
import React from "react";

import SchemaOrg from "@/components/global/schema-org/schema-org";

export const metadata: Metadata = {
    title: "Đăng nhập - LILIT | Nền tảng truyện online miễn phí",
    description:
        "Đăng nhập vào LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo. Khám phá thế giới truyện đa dạng với hàng ngàn tác phẩm từ nhiều thể loại.",
    openGraph: {
        title: "Đăng nhập - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Đăng nhập vào LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo. Khám phá thế giới truyện đa dạng với hàng ngàn tác phẩm từ nhiều thể loại.",
        url: "https://lilit.io.vn/login",
        type: "website",
        images: [{ url: "/og-image.jpg", width: 1920, height: 1080, alt: "LILIT - Đăng nhập" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Đăng nhập - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Đăng nhập vào LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo. Khám phá thế giới truyện đa dạng với hàng ngàn tác phẩm từ nhiều thể loại.",
        images: ["/twitter-image.jpg"],
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
