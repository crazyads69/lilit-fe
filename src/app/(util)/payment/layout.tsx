import { Metadata } from "next";
import Head from "next/head";
import React from "react";

import SchemaOrg from "@/components/global/schema-org/schema-org";

export const metadata: Metadata = {
    metadataBase: new URL("https://lilit.io.vn"),
    alternates: {
        canonical: "https://lilit.io.vn/payment",
        languages: {
            vi: "https://lilit.io.vn/payment",
        },
    },
    title: "Chính Sách Thanh Toán - LILIT | Nền tảng truyện miễn phí, không quảng cáo",
    description:
        "Tìm hiểu về chính sách thanh toán của LILIT - Nền tảng truyện phi lợi nhuận, miễn phí và không quảng cáo. Khám phá cách chúng tôi hỗ trợ tác giả thông qua hệ thống donate và bảo vệ quyền lợi của người dùng.",
    keywords: [
        "LILIT",
        "chính sách thanh toán",
        "donate",
        "hỗ trợ tác giả",
        "nền tảng truyện",
        "phi lợi nhuận",
        "miễn phí",
        "không quảng cáo",
        "bảo vệ quyền lợi",
    ],
    authors: [{ name: "LILIT Team" }],
    openGraph: {
        title: "Chính Sách Thanh Toán - LILIT | Nền tảng truyện miễn phí, không quảng cáo",
        description:
            "Tìm hiểu về chính sách thanh toán của LILIT - Nền tảng truyện phi lợi nhuận, miễn phí và không quảng cáo. Khám phá cách chúng tôi hỗ trợ tác giả thông qua hệ thống donate và bảo vệ quyền lợi của người dùng.",
        url: "https://lilit.io.vn/payment",
        siteName: "LILIT",
        images: [
            {
                url: "/og-image-payment.jpg",
                width: 1920,
                height: 1080,
                alt: "LILIT - Chính Sách Thanh Toán",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chính Sách Thanh Toán - LILIT | Nền tảng truyện miễn phí, không quảng cáo",
        description:
            "Tìm hiểu về chính sách thanh toán của LILIT - Nền tảng truyện phi lợi nhuận, miễn phí và không quảng cáo. Khám phá cách chúng tôi hỗ trợ tác giả thông qua hệ thống donate và bảo vệ quyền lợi của người dùng.",
        images: ["/twitter-image-payment.jpg"],
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

export default function PaymentPolicyLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link href="https://lilit.io.vn/payment" rel="canonical" />
            </Head>
            <SchemaOrg
                dateModified={new Date().toISOString()}
                datePublished="2025-02-07T08:00:00+07:00"
                description="Tìm hiểu về chính sách thanh toán của LILIT - Nền tảng truyện phi lợi nhuận, miễn phí và không quảng cáo. Khám phá cách chúng tôi hỗ trợ tác giả thông qua hệ thống donate và bảo vệ quyền lợi của người dùng."
                images={["/og-image-payment.jpg"]}
                title="Chính Sách Thanh Toán - LILIT | Nền tảng truyện miễn phí, không quảng cáo"
                url="https://lilit.io.vn/payment"
            />
            {children}
        </>
    );
}
