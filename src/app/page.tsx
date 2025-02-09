"use client";
import {
    BookOutlined,
    SafetyCertificateOutlined,
    GiftOutlined,
    UsergroupAddOutlined,
    ReadOutlined,
    EditOutlined,
    TeamOutlined,
    TrophyOutlined,
} from "@ant-design/icons";
import { Layout, Typography, Button, Flex, Card, Collapse } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@ant-design/v5-patch-for-react-19";

import { AlertDisplay } from "@/components/global/alert-display/alert-display";
import ParticleBackground from "@/components/global/matrix-background/particle-background";
import SchemaOrg from "@/components/global/schema-org/schema-org";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function LandingPage() {
    const features = [
        {
            icon: <SafetyCertificateOutlined className="text-4xl text-blue-600" />,
            title: "Bảo Vệ Tác Phẩm",
            description: "Hệ thống bảo vệ bản quyền cho tác phẩm của bạn",
        },
        {
            icon: <GiftOutlined className="text-4xl text-blue-600" />,
            title: "Ủng Hộ Tác Giả",
            description: "Độc giả có thể trực tiếp ủng hộ tác giả yêu thích",
        },
        {
            icon: <BookOutlined className="text-4xl text-blue-600" />,
            title: "Cơ Hội Xuất Bản",
            description: "Kết nối với các nhà xuất bản uy tín",
        },
        {
            icon: <UsergroupAddOutlined className="text-4xl text-blue-600" />,
            title: "Cộng Đồng Sáng Tạo",
            description: "Giao lưu với những người yêu thích đọc và viết truyện",
        },
    ];

    const faqItems = [
        {
            key: "1",
            label: "LILIT có thực sự miễn phí không?",
            children: (
                <Paragraph>
                    Đúng vậy, LILIT hoàn toàn miễn phí cho cả người đọc và người viết. Chúng tôi
                    không thu phí sử dụng và không hiển thị quảng cáo.
                </Paragraph>
            ),
        },
        {
            key: "2",
            label: "Làm thế nào để bắt đầu đăng truyện trên LILIT?",
            children: (
                <Paragraph>
                    Bạn chỉ cần đăng ký tài khoản, sau đó chọn &ldquo;Đăng truyện mới&rdquo; từ
                    trang cá nhân của bạn. Hệ thống sẽ hướng dẫn bạn qua các bước cần thiết.
                </Paragraph>
            ),
        },
        {
            key: "3",
            label: "LILIT bảo vệ bản quyền tác phẩm như thế nào?",
            children: (
                <Paragraph>
                    Chúng tôi sử dụng công nghệ blockchain và DRM để bảo vệ tác phẩm của bạn khỏi
                    việc sao chép trái phép.
                </Paragraph>
            ),
        },
        {
            key: "4",
            label: "Tôi có thể kiếm tiền từ truyện của mình trên LILIT không?",
            children: (
                <p>
                    Có, bạn có thể nhận donate trực tiếp từ độc giả. Ngoài ra, chúng tôi cũng kết
                    nối tác giả với các cơ hội xuất bản, mở ra khả năng kiếm tiền từ tác phẩm của
                    bạn.
                </p>
            ),
        },
    ];

    return (
        <>
            <SchemaOrg
                dateModified={new Date().toISOString()}
                datePublished="2025-02-07T08:00:00+07:00"
                description="Khám phá thế giới truyện đa dạng tại LILIT - nền tảng truyện miễn phí, không quảng cáo. Đọc truyện online mọi lúc, mọi nơi."
                images={["/og-image.jpg"]}
                title="LILIT - Nền tảng truyện miễn phí, không quảng cáo"
                url="https://lilit.io.vn"
            />
            <Layout className="relative flex min-h-screen w-full flex-col bg-opacity-80 backdrop-blur-sm">
                <div className="absolute inset-0 z-[-1]">
                    <ParticleBackground />
                </div>
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
                    <Flex gap={8}>
                        <Link href="/login">
                            <Button type="default">Đăng nhập</Button>
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
                            LILIT - Nền tảng truyện miễn phí, không quảng cáo
                        </Title>
                        <Paragraph className="mb-8 max-w-2xl text-lg">
                            Khám phá thế giới truyện đa dạng tại LILIT. Đọc truyện online mọi lúc,
                            mọi nơi - hoàn toàn miễn phí và không có quảng cáo. Từ truyện ngắn đến
                            tiểu thuyết dài kỳ, LILIT đều có tất cả!
                        </Paragraph>
                        <Flex gap={8}>
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
                                <Card
                                    key={index}
                                    bordered
                                    hoverable
                                    className="w-full text-center shadow-lg md:w-64"
                                >
                                    {feature.icon}
                                    <Title className="mt-4" level={4}>
                                        {feature.title}
                                    </Title>
                                    <Paragraph>{feature.description}</Paragraph>
                                </Card>
                            ))}
                        </Flex>
                    </Flex>

                    {/* Genres Section */}
                    <Flex vertical align="center" className="mb-16 text-center">
                        <Title className="mb-6 text-center" level={2}>
                            Đa Dạng Thể Loại
                        </Title>
                        <Paragraph className="mb-8 max-w-2xl text-lg">
                            LILIT có đa dạng thể loại truyện để bạn khám phá: ngôn tình, kiếm hiệp,
                            trinh thám, kinh dị, huyền huyễn, lịch sử, và nhiều hơn nữa. Có cả
                            truyện chữ và truyện tranh để bạn tha hồ lựa chọn.
                        </Paragraph>
                    </Flex>

                    {/* How It Works Section */}
                    <Flex vertical align="center" className="mb-16">
                        <Title className="mb-8 text-center" level={2}>
                            LILIT Hoạt Động Thế Nào?
                        </Title>
                        <Flex className="flex-wrap justify-center" gap={8}>
                            <Card
                                bordered
                                hoverable
                                className="w-full text-center shadow-lg md:w-64"
                            >
                                <EditOutlined className="mb-4 text-4xl text-blue-600" />
                                <Title level={4}>1. Sáng Tác & Chia Sẻ</Title>
                                <Paragraph>Tự do sáng tác và đăng tải truyện của bạn</Paragraph>
                            </Card>
                            <Card
                                bordered
                                hoverable
                                className="w-full text-center shadow-lg md:w-64"
                            >
                                <TeamOutlined className="mb-4 text-4xl text-blue-600" />
                                <Title level={4}>2. Kết Nối</Title>
                                <Paragraph>Giao lưu với độc giả và cộng đồng yêu truyện</Paragraph>
                            </Card>
                            <Card
                                bordered
                                hoverable
                                className="w-full text-center shadow-lg md:w-64"
                            >
                                <TrophyOutlined className="mb-4 text-4xl text-blue-600" />
                                <Title level={4}>3. Phát Triển</Title>
                                <Paragraph>Cơ hội xuất bản và phát triển sự nghiệp</Paragraph>
                            </Card>
                        </Flex>
                    </Flex>

                    {/* FAQs Section */}
                    <Flex vertical align="center" className="mb-16">
                        <Title className="mb-8 text-center" level={2}>
                            Câu Hỏi Thường Gặp
                        </Title>
                        <Collapse accordion className="w-full max-w-2xl" items={faqItems} />
                    </Flex>

                    {/* Call to Action */}
                    <Flex vertical align="center" className="mb-16 text-center">
                        <Title className="mb-6 text-center" level={2}>
                            Tham Gia LILIT Ngay Hôm Nay!
                        </Title>
                        <Paragraph className="mb-8 max-w-2xl text-lg">
                            Dù bạn là tác giả đầy tham vọng hay độc giả đam mê truyện, LILIT luôn
                            chào đón bạn. Hãy cùng chúng tôi xây dựng một cộng đồng truyện phong phú
                            và sôi động!
                        </Paragraph>
                        <Button size="large" type="primary">
                            Đăng Ký Miễn Phí
                        </Button>
                    </Flex>
                </Content>

                <Footer className="bg-transparent text-center">
                    <Paragraph>© 2025 LILIT - Nền tảng truyện miễn phí, không quảng cáo</Paragraph>
                    <Flex align="center" gap={16} justify="center">
                        <Link className="text-black no-underline hover:underline" href="/about">
                            Về chúng tôi
                        </Link>
                        <Link className="text-black no-underline hover:underline" href="/terms">
                            Điều khoản sử dụng
                        </Link>
                        <Link className="text-black no-underline hover:underline" href="/privacy">
                            Chính sách bảo mật
                        </Link>
                        <Link className="text-black no-underline hover:underline" href="/contact">
                            Liên hệ
                        </Link>
                    </Flex>
                </Footer>
                <AlertDisplay />
            </Layout>
        </>
    );
}
