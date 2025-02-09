import { Metadata } from "next";
import React from "react";

import SchemaOrg from "@/components/global/schema-org/schema-org";

export const metadata: Metadata = {
    title: "Đăng nhập - LILIT",
    description: "Đăng nhập vào LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo.",
    openGraph: {
        title: "Đăng nhập - LILIT",
        description: "Đăng nhập vào LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo.",
    },
    twitter: {
        title: "Đăng nhập - LILIT",
        description: "Đăng nhập vào LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo.",
    },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SchemaOrg
                dateModified={new Date().toISOString()}
                datePublished="2025-02-07T08:00:00+07:00"
                description="Đăng nhập vào LILIT để trải nghiệm đọc truyện miễn phí, không quảng cáo."
                images={["/og-image.jpg"]}
                title="Đăng nhập - LILIT"
                url="https://lilit.io.vn/login"
            />

            {children}
        </>
    );
}
