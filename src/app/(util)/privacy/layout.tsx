import { Metadata } from "next";
import Head from "next/head";
import React from "react";

import SchemaOrg from "@/components/global/schema-org/schema-org";

export const metadata: Metadata = {
    metadataBase: new URL("https://lilit.io.vn"),
    alternates: {
        canonical: "https://lilit.io.vn/privacy",
        languages: {
            vi: "https://lilit.io.vn/privacy",
        },
    },
    title: "Chính sách bảo mật - LILIT | Nền tảng truyện online miễn phí",
    description:
        "Chính sách bảo mật của LILIT - Nền tảng truyện miễn phí, không quảng cáo. Tìm hiểu cách chúng tôi bảo vệ thông tin cá nhân của bạn và quyền riêng tư của người dùng.",
    keywords: [
        "LILIT",
        "chính sách bảo mật",
        "nền tảng truyện",
        "miễn phí",
        "không quảng cáo",
        "bảo vệ thông tin cá nhân",
        "quyền riêng tư",
        "an toàn dữ liệu",
    ],
    authors: [{ name: "LILIT Team" }],
    openGraph: {
        title: "Chính sách bảo mật - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Chính sách bảo mật của LILIT - Nền tảng truyện miễn phí, không quảng cáo. Tìm hiểu cách chúng tôi bảo vệ thông tin cá nhân và quyền riêng tư của người dùng.",
        url: "https://lilit.io.vn/privacy",
        siteName: "LILIT",
        images: [
            {
                url: "/og-image.jpg",
                width: 1920,
                height: 1080,
                alt: "LILIT - Chính sách bảo mật",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chính sách bảo mật - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Chính sách bảo mật của LILIT - Nền tảng truyện miễn phí, không quảng cáo. Tìm hiểu cách chúng tôi bảo vệ thông tin cá nhân và quyền riêng tư của người dùng.",
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

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link href="https://lilit.io.vn/privacy" rel="canonical" />
            </Head>
            <SchemaOrg
                dateModified={new Date().toISOString()}
                datePublished="2025-02-07T08:00:00+07:00"
                description="Chính sách bảo mật của LILIT - Nền tảng truyện miễn phí, không quảng cáo. Tìm hiểu cách chúng tôi bảo vệ thông tin cá nhân của bạn và quyền riêng tư của người dùng."
                images={["/og-image.jpg"]}
                title="Chính sách bảo mật - LILIT | Nền tảng truyện online miễn phí"
                url="https://lilit.io.vn/privacy"
            />
            {children}
        </>
    );
}
