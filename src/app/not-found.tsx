"use client";
import { HomeOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Layout, Typography, Flex, Card, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import "@ant-design/v5-patch-for-react-19";

import { AlertDisplay } from "@/components/global/alert-display/alert-display";
import ParticleBackground from "@/components/global/matrix-background/particle-background";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function NotFound() {
    const router = useRouter();

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

            <Content className="flex flex-1 flex-col items-center justify-center px-4 py-8 md:px-8">
                <Card hoverable className="w-full max-w-xl shadow-lg">
                    <Flex vertical align="center" gap="middle">
                        <Image
                            alt="404 Illustration"
                            height={200}
                            src="/404_error.svg"
                            width={200}
                        />
                        <Title className="mb-0 text-center" level={2}>
                            Oops! Không tìm thấy trang
                        </Title>
                        <Paragraph className="mb-6 text-center text-lg">
                            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị gỡ bỏ.
                        </Paragraph>
                        <Space size="middle">
                            <Button
                                icon={<HomeOutlined />}
                                size="large"
                                type="primary"
                                onClick={() => router.push("/home")}
                            >
                                Trang chủ
                            </Button>
                            <Button
                                icon={<ArrowLeftOutlined />}
                                size="large"
                                onClick={() => router.back()}
                            >
                                Quay lại
                            </Button>
                        </Space>
                    </Flex>
                </Card>
            </Content>

            <Footer className="bg-transparent text-center">
                <Paragraph>© 2025 LILIT - Nền tảng truyện miễn phí, không quảng cáo</Paragraph>
                <Flex align="center" gap={16} justify="center">
                    <Link href="/about">
                        <Text className="text-sm hover:text-blue-600 hover:underline">
                            Về LILIT
                        </Text>
                    </Link>
                    <Link href="/terms">
                        <Text className="text-sm hover:text-blue-600 hover:underline">
                            Điều khoản sử dụng
                        </Text>
                    </Link>
                    <Link href="/privacy">
                        <Text className="text-sm hover:text-blue-600 hover:underline">
                            Chính sách bảo mật
                        </Text>
                    </Link>
                    <Link href="/payment">
                        <Text className="text-sm hover:text-blue-600 hover:underline">
                            Chính sách thanh toán
                        </Text>
                    </Link>
                </Flex>
            </Footer>
            <AlertDisplay />
        </Layout>
    );
}
