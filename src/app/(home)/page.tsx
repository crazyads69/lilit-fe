"use client";
import { GoogleOutlined } from "@ant-design/icons";
import { Button, Layout, Typography, Flex, Card, Form, Input } from "antd";
import "@ant-design/v5-patch-for-react-19";
import Image from "next/image";
import { useTheme } from "next-themes";

import MatrixBackground from "@/components/global/matrix-background/matrix-background";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Link } = Typography;
const { Item } = Form;
const { Password } = Input;

export default function HomePage() {
    const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme === "system" ? resolvedTheme : theme;

    return (
        <Layout className="flex h-screen w-full flex-col items-center justify-start bg-opacity-80 backdrop-blur-sm">
            <MatrixBackground />
            <Header className="flex h-20 w-full items-center justify-between bg-transparent px-6 shadow-md">
                <Link href="/">
                    <Image
                        alt="LILIT"
                        className="cursor-pointer"
                        draggable={false}
                        height={56}
                        src={
                            currentTheme === "dark"
                                ? "/lilit_logo_dark.svg"
                                : "/lilit_logo_light.svg"
                        }
                        width={56}
                    />
                </Link>
                <Button
                    className="flex items-center justify-center rounded-full text-lg font-bold transition-all hover:scale-105"
                    size="large"
                    type="primary"
                >
                    Tìm hiểu thêm
                </Button>
            </Header>
            <Content className="flex h-full w-full flex-col items-center justify-center gap-12 px-8 py-12 md:flex-row">
                <Flex className="w-full flex-col items-center justify-center md:w-1/2">
                    <Title className="mb-6 text-center text-4xl">Chào mừng bạn đến với LILIT</Title>
                    <Paragraph className="max-w-md text-center text-lg">
                        Khám phá thế giới truyện đa dạng tại LILIT - nền tảng truyện miễn phí, không
                        quảng cáo. Đọc truyện online mọi lúc, mọi nơi.
                    </Paragraph>
                </Flex>
                <Flex className="flex w-full items-center justify-center md:w-1/2">
                    <Card hoverable className="w-full max-w-md rounded-2xl shadow-lg">
                        <Title className="mb-6 text-center" level={3}>
                            Đăng nhập
                        </Title>
                        <Paragraph className="mb-8 text-center">
                            Đăng nhập để trải nghiệm tốt nhất
                        </Paragraph>
                        <Form autoComplete="off" className="space-y-4" layout="vertical">
                            <Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: "Vui lòng nhập email" }]}
                            >
                                <Input className="rounded-lg py-2" placeholder="Email" />
                            </Item>
                            <Item
                                label="Mật khẩu"
                                name="password"
                                rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
                            >
                                <Password className="rounded-lg py-2" placeholder="Mật khẩu" />
                            </Item>
                            <Button
                                className="h-10 w-full rounded-lg text-lg font-semibold transition-all hover:scale-105"
                                htmlType="submit"
                                type="primary"
                            >
                                Đăng nhập
                            </Button>
                        </Form>
                        <Paragraph className="my-4 text-center">HOẶC</Paragraph>
                        <Button
                            className="h-10 w-full rounded-lg text-lg font-semibold transition-all hover:scale-105"
                            icon={<GoogleOutlined />}
                            type="default"
                        >
                            Đăng nhập với Google
                        </Button>
                        <Flex className="mt-6 justify-between">
                            <Link href="/register">
                                <Paragraph className="md:text-md text-xs hover:underline">
                                    Đăng ký tài khoản mới
                                </Paragraph>
                            </Link>
                            <Link href="/forgot-password">
                                <Paragraph className="md:text-md text-center text-xs hover:underline">
                                    Quên mật khẩu?
                                </Paragraph>
                            </Link>
                        </Flex>
                    </Card>
                </Flex>
            </Content>

            <Footer className="flex h-12 w-full flex-row items-center justify-start bg-transparent text-left">
                <Link href="https://lilit.io.vn" target="_blank">
                    <Paragraph className="hover:underline">© 2025 LILIT</Paragraph>
                </Link>
            </Footer>
        </Layout>
    );
}
