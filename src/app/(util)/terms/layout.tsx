import { Metadata } from "next";
import Head from "next/head";
import React from "react";

import SchemaOrg from "@/components/global/schema-org/schema-org";

export const metadata: Metadata = {
    metadataBase: new URL("https://lilit.io.vn"),
    alternates: {
        canonical: "https://lilit.io.vn/terms",
        languages: {
            vi: "https://lilit.io.vn/terms",
        },
    },
    title: "Điều khoản sử dụng - LILIT | Nền tảng truyện online miễn phí",
    description:
        "Điều khoản sử dụng của LILIT - Nền tảng truyện miễn phí, không quảng cáo. Tìm hiểu về quyền và trách nhiệm của người dùng, chính sách bảo vệ bản quyền, và các quy định khác khi sử dụng dịch vụ của chúng tôi.",
    keywords: [
        "LILIT",
        "điều khoản sử dụng",
        "nền tảng truyện",
        "miễn phí",
        "không quảng cáo",
        "quyền người dùng",
        "trách nhiệm người dùng",
        "bảo vệ bản quyền",
        "quy định sử dụng",
    ],
    authors: [{ name: "LILIT Team" }],
    openGraph: {
        title: "Điều khoản sử dụng - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Điều khoản sử dụng của LILIT - Nền tảng truyện miễn phí, không quảng cáo. Tìm hiểu về quyền và trách nhiệm của người dùng, chính sách bảo vệ bản quyền, và các quy định khác.",
        url: "https://lilit.io.vn/terms",
        siteName: "LILIT",
        images: [
            {
                url: "/og-image.jpg",
                width: 1920,
                height: 1080,
                alt: "LILIT - Điều khoản sử dụng",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Điều khoản sử dụng - LILIT | Nền tảng truyện online miễn phí",
        description:
            "Điều khoản sử dụng của LILIT - Nền tảng truyện miễn phí, không quảng cáo. Tìm hiểu về quyền và trách nhiệm của người dùng, chính sách bảo vệ bản quyền, và các quy định khác.",
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

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link href="https://lilit.io.vn/terms" rel="canonical" />
            </Head>
            <SchemaOrg
                dateModified={new Date().toISOString()}
                datePublished="2025-02-07T08:00:00+07:00"
                description="Điều khoản sử dụng của LILIT - Nền tảng truyện miễn phí, không quảng cáo. Tìm hiểu về quyền và trách nhiệm của người dùng, chính sách bảo vệ bản quyền, và các quy định khác khi sử dụng dịch vụ của chúng tôi."
                images={["/og-image.jpg"]}
                title="Điều khoản sử dụng - LILIT | Nền tảng truyện online miễn phí"
                url="https://lilit.io.vn/terms"
            />
            {children}
        </>
    );
}
