import { Metadata } from "next";
import Head from "next/head";
import React from "react";

import SchemaOrg from "@/components/global/schema-org/schema-org";

export const metadata: Metadata = {
    metadataBase: new URL("https://lilit.io.vn"),
    alternates: {
        canonical: "https://lilit.io.vn/about",
        languages: {
            vi: "https://lilit.io.vn/about",
        },
    },
    title: "Về Chúng Tôi - LILIT | Nền tảng truyện miễn phí, không quảng cáo",
    description:
        "Tìm hiểu về LILIT - Nền tảng truyện phi lợi nhuận, miễn phí và không quảng cáo. Khám phá tầm nhìn, sứ mệnh và cách chúng tôi hỗ trợ cộng đồng sáng tác.",
    keywords: [
        "LILIT",
        "về chúng tôi",
        "nền tảng truyện",
        "phi lợi nhuận",
        "miễn phí",
        "không quảng cáo",
        "cộng đồng sáng tác",
        "đọc truyện online",
        "hỗ trợ tác giả",
    ],
    authors: [{ name: "LILIT Team" }],
    openGraph: {
        title: "Về Chúng Tôi - LILIT | Nền tảng truyện miễn phí, không quảng cáo",
        description:
            "Tìm hiểu về LILIT - Nền tảng truyện phi lợi nhuận, miễn phí và không quảng cáo. Khám phá tầm nhìn, sứ mệnh và cách chúng tôi hỗ trợ cộng đồng sáng tác.",
        url: "https://lilit.io.vn/about",
        siteName: "LILIT",
        images: [
            {
                url: "/og-image-about.jpg",
                width: 1920,
                height: 1080,
                alt: "LILIT - Về Chúng Tôi",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Về Chúng Tôi - LILIT | Nền tảng truyện miễn phí, không quảng cáo",
        description:
            "Tìm hiểu về LILIT - Nền tảng truyện phi lợi nhuận, miễn phí và không quảng cáo. Khám phá tầm nhìn, sứ mệnh và cách chúng tôi hỗ trợ cộng đồng sáng tác.",
        images: ["/twitter-image-about.jpg"],
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

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link href="https://lilit.io.vn/about" rel="canonical" />
            </Head>
            <SchemaOrg
                dateModified={new Date().toISOString()}
                datePublished="2025-02-07T08:00:00+07:00"
                description="Tìm hiểu về LILIT - Nền tảng truyện phi lợi nhuận, miễn phí và không quảng cáo. Khám phá tầm nhìn, sứ mệnh và cách chúng tôi hỗ trợ cộng đồng sáng tác."
                images={["/og-image-about.jpg"]}
                title="Về Chúng Tôi - LILIT | Nền tảng truyện miễn phí, không quảng cáo"
                url="https://lilit.io.vn/about"
            />
            {children}
        </>
    );
}
