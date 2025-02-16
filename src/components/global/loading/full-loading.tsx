"use client";
import { LoadingOutlined } from "@ant-design/icons";
import { Layout, Typography, Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@ant-design/v5-patch-for-react-19";

import ParticleBackground from "@/components/global/matrix-background/particle-background";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

export default function FullLoading() {
    return (
        <Layout className="relative flex min-h-screen w-full flex-col bg-opacity-80 backdrop-blur-sm">
            <ParticleBackground />
            <Header className="sticky flex h-20 items-center justify-between bg-transparent px-6">
                <Link href="/">
                    <Image
                        alt="LILIT"
                        className="cursor-pointer"
                        draggable={false}
                        height={56}
                        src="/lilit_logo.svg"
                        width={56}
                    />
                </Link>
            </Header>

            <Content className="flex flex-grow items-center justify-center">
                <Spin
                    fullscreen
                    indicator={<LoadingOutlined spin />}
                    size="large"
                    tip="Đang tải dữ liệu..."
                />
            </Content>

            <Footer className="bg-transparent text-center">
                <Text>© 2025 LILIT - Nền tảng truyện miễn phí, không quảng cáo</Text>
            </Footer>
        </Layout>
    );
}
