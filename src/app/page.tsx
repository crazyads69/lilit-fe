"use client";
import {
    BookOutlined,
    SafetyCertificateOutlined,
    GiftOutlined,
    UsergroupAddOutlined,
    BankOutlined,
    ReadOutlined,
    EditOutlined,
    TeamOutlined,
    TrophyOutlined,
} from "@ant-design/icons";
import { Layout, Typography, Button, Flex, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AlertDisplay } from "@/components/global/alert-display/alert-display";
import MatrixBackground from "@/components/global/matrix-background/matrix-background";
import SchemaOrg from "@/components/global/schema-org/schema-org";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function LandingPage() {
    const features = [
        {
            icon: <SafetyCertificateOutlined className="text-4xl text-blue-600" />,
            title: "Bảo Vệ Tác Phẩm",
            description: "Công nghệ hiện đại giúp bảo vệ tác phẩm của bạn an toàn",
        },
        {
            icon: <GiftOutlined className="text-4xl text-blue-600" />,
            title: "Ủng Hộ Tác Giả",
            description: "Độc giả có thể trực tiếp ủng hộ tác giả yêu thích",
        },
        {
            icon: <BookOutlined className="text-4xl text-blue-600" />,
            title: "Cơ Hội Xuất Bản",
            description: "Kết nối với các nhà xuất bản hàng đầu",
        },
        {
            icon: <UsergroupAddOutlined className="text-4xl text-blue-600" />,
            title: "Cộng Đồng Sáng Tạo",
            description: "Giao lưu với những người yêu truyện khác",
        },
    ];

    return (
        <>
            <SchemaOrg
                dateModified={new Date().toISOString()}
                datePublished="2025-02-07T08:00:00+07:00"
                description="LILIT - Nơi chia sẻ và khám phá những câu chuyện tuyệt vời. Miễn phí, không quảng cáo, và bảo vệ quyền tác giả."
                images={["/og-image.jpg"]}
                title="LILIT - Ngôi Nhà Của Những Câu Chuyện"
                url="https://lilit.io.vn"
            />
            <Layout className="flex min-h-screen w-full flex-col bg-opacity-80 backdrop-blur-sm">
                <MatrixBackground />
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
                    <Flex gap={4}>
                        <Link href="/login">
                            <Button type="text">Đăng nhập</Button>
                        </Link>
                        <Link href="/register">
                            <Button type="primary">Đăng ký</Button>
                        </Link>
                    </Flex>
                </Header>

                <Content className="px-4 py-8 md:px-8">
                    {/* Hero Section */}
                    <Flex vertical align="center" className="mb-16 text-center">
                        <Title className="mb-6 text-4xl md:text-5xl">
                            Nơi Những Câu Chuyện Tỏa Sáng
                        </Title>
                        <Paragraph className="mb-8 max-w-2xl text-lg">
                            LILIT là ngôi nhà chung cho những người yêu truyện. Tại đây, bạn có thể
                            chia sẻ, đọc và khám phá những câu chuyện tuyệt vời - hoàn toàn miễn phí
                            và không có quảng cáo.
                        </Paragraph>
                        <Flex gap={4}>
                            <Button icon={<EditOutlined />} size="large" type="primary">
                                Bắt đầu viết
                            </Button>
                            <Button icon={<ReadOutlined />} size="large">
                                Khám phá truyện
                            </Button>
                        </Flex>
                    </Flex>

                    {/* Features Section */}
                    <Flex vertical align="center" className="mb-16">
                        <Title className="mb-8 text-center" level={2}>
                            Tại Sao Nên Chọn LILIT?
                        </Title>
                        <Flex className="flex-wrap justify-center" gap={8}>
                            {features.map((feature, index) => (
                                <Card key={index} className="w-full text-center md:w-64">
                                    {feature.icon}
                                    <Title className="mt-4" level={4}>
                                        {feature.title}
                                    </Title>
                                    <Paragraph>{feature.description}</Paragraph>
                                </Card>
                            ))}
                        </Flex>
                    </Flex>

                    {/* Community Section */}
                    <Flex vertical align="center" className="mb-16 text-center">
                        <Title className="mb-6 text-center" level={2}>
                            Cộng Đồng Yêu Truyện
                        </Title>
                        <Paragraph className="mb-8 max-w-2xl text-lg">
                            LILIT là nơi tụ họp của những người yêu truyện. Chúng tôi tin rằng mỗi
                            câu chuyện đều có giá trị và xứng đáng được chia sẻ với thế giới.
                        </Paragraph>
                        <Flex className="flex-wrap justify-center" gap={8}>
                            <Card className="w-full md:w-96">
                                <TeamOutlined className="mb-4 text-4xl text-blue-600" />
                                <Title level={4}>Chất Lượng Đảm Bảo</Title>
                                <Paragraph>
                                    Đội ngũ biên tập viên tận tâm giúp nâng cao chất lượng nội dung
                                </Paragraph>
                            </Card>
                            <Card className="w-full md:w-96">
                                <BankOutlined className="mb-4 text-4xl text-blue-600" />
                                <Title level={4}>Cơ Hội Phát Triển</Title>
                                <Paragraph>
                                    Kết nối với các nhà xuất bản, mở ra cơ hội cho tác giả
                                </Paragraph>
                            </Card>
                        </Flex>
                    </Flex>

                    {/* How It Works Section */}
                    <Flex vertical align="center" className="mb-16">
                        <Title className="mb-8 text-center" level={2}>
                            LILIT Hoạt Động Thế Nào?
                        </Title>
                        <Flex className="flex-wrap justify-center" gap={8}>
                            <Card className="w-full text-center md:w-64">
                                <EditOutlined className="mb-4 text-4xl text-blue-600" />
                                <Title level={4}>1. Viết & Chia Sẻ</Title>
                                <Paragraph>Tự do sáng tác và đăng tải truyện của bạn</Paragraph>
                            </Card>
                            <Card className="w-full text-center md:w-64">
                                <TeamOutlined className="mb-4 text-4xl text-blue-600" />
                                <Title level={4}>2. Kết Nối</Title>
                                <Paragraph>
                                    Giao lưu với độc giả và cộng đồng yêu văn chương
                                </Paragraph>
                            </Card>
                            <Card className="w-full text-center md:w-64">
                                <TrophyOutlined className="mb-4 text-4xl text-blue-600" />
                                <Title level={4}>3. Phát Triển</Title>
                                <Paragraph>Cơ hội xuất bản và phát triển sự nghiệp</Paragraph>
                            </Card>
                        </Flex>
                    </Flex>

                    {/* Call to Action */}
                    <Flex vertical align="center" className="mb-16 text-center">
                        <Title className="mb-6 text-center" level={2}>
                            Hãy Tham Gia LILIT Ngay Hôm Nay!
                        </Title>
                        <Paragraph className="mb-8 max-w-2xl text-lg">
                            Dù bạn là tác giả đầy tham vọng hay độc giả đam mê, LILIT luôn chào đón
                            bạn. Hãy cùng chúng tôi xây dựng một cộng đồng phong phú và sôi động!
                        </Paragraph>
                        <Button size="large" type="primary">
                            Tham Gia Miễn Phí
                        </Button>
                    </Flex>
                </Content>

                <Footer className="bg-transparent text-center">
                    <Paragraph>© 2025 LILIT</Paragraph>
                    <Flex gap={16} justify="center">
                        <Link href="/about">Về chúng tôi</Link>
                        <Link href="/terms">Điều khoản sử dụng</Link>
                        <Link href="/privacy">Chính sách bảo mật</Link>
                        <Link href="/contact">Liên hệ</Link>
                    </Flex>
                </Footer>
                <AlertDisplay />
            </Layout>
        </>
    );
}
