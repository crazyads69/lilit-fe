import { Metadata } from "next";
import Head from "next/head";
import React from "react";

import SchemaOrg from "@/components/global/schema-org/schema-org";

export const metadata: Metadata = {
    metadataBase: new URL("https://lilit.io.vn"),
    alternates: {
        canonical: "https://lilit.io.vn/check-email-verification",
        languages: {
            vi: "https://lilit.io.vn/check-email-verification",
        },
    },
    title: "Xác thực Email - LILIT | Nền tảng truyện online miễn phí",
    description:
        "Xác thực email của bạn trên LILIT để hoàn tất quá trình đăng ký và trải nghiệm đọc truyện miễn phí, không quảng cáo. Kiểm tra hòm thư của bạn và làm theo hướng dẫn để kích hoạt tài khoản.",
    keywords: [
        "LILIT",
        "xác thực email",
        "kích hoạt tài khoản",
        "đăng ký",
        "nền tảng truyện",
        "miễn phí",
        "không quảng cáo",
        "đọc truyện online",
        "trải nghiệm đọc truyện",
    ],
    authors: [{ name: "LILIT Team" }],
    openGraph: {
        title: "Xác thực Email - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Xác thực email của bạn trên LILIT để hoàn tất quá trình đăng ký và trải nghiệm đọc truyện miễn phí, không quảng cáo. Kiểm tra hòm thư của bạn và làm theo hướng dẫn để kích hoạt tài khoản.",
        url: "https://lilit.io.vn/check-email-verification",
        siteName: "LILIT",
        images: [
            {
                url: "/og-image.jpg",
                width: 1920,
                height: 1080,
                alt: "LILIT - Xác thực Email",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Xác thực Email - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Xác thực email của bạn trên LILIT để hoàn tất quá trình đăng ký và trải nghiệm đọc truyện miễn phí, không quảng cáo. Kiểm tra hòm thư của bạn và làm theo hướng dẫn để kích hoạt tài khoản.",
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

export default function CheckEmailVerificationLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link href="https://lilit.io.vn/check-email-verification" rel="canonical" />
            </Head>
            <SchemaOrg
                dateModified={new Date().toISOString()}
                datePublished="2025-02-07T08:00:00+07:00"
                description="Xác thực email của bạn trên LILIT để hoàn tất quá trình đăng ký và trải nghiệm đọc truyện miễn phí, không quảng cáo. Kiểm tra hòm thư của bạn và làm theo hướng dẫn để kích hoạt tài khoản."
                images={["/og-image.jpg"]}
                title="Xác thực Email - LILIT | Nền tảng truyện online miễn phí"
                url="https://lilit.io.vn/check-email-verification"
            />
            {children}
        </>
    );
}
