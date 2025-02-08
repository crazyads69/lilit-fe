"use client";
import { GoogleOutlined, LoadingOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Layout, Typography, Flex, Card, Form, Input } from "antd";
import "@ant-design/v5-patch-for-react-19";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Controller, useForm } from "react-hook-form";

import { AlertDisplay } from "@/components/global/alert-display/alert-display";
import MatrixBackground from "@/components/global/matrix-background/matrix-background";
import { useMessage } from "@/hooks/use-message/use-message";
import { useAppDispatch } from "@/hooks/use-redux/use-redux";
import { setCredentials } from "@/redux/slice/auth-slice/auth-slice";
import { LoginFormData, loginSchema } from "@/schemas/auth/auth-input/auth-input";
import { useLoginMutation } from "@/services/api/api";
import { generateDeviceId } from "@/utils/device-id/device-id";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Link } = Typography;
const { Item } = Form;
const { Password } = Input;

export default function HomePage() {
    const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const { showMessage } = useMessage();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit(credentials: LoginFormData) {
        try {
            const deviceId = await generateDeviceId();

            console.log("Device ID:", deviceId);
            console.log("Credentials:", credentials);
            const result = await login({ ...credentials, device_id: deviceId }).unwrap();

            dispatch(
                setCredentials({
                    accessToken: result.data.access_token,
                    refreshToken: result.data.refresh_token,
                    deviceId: deviceId,
                    user: result.data.user,
                }),
            );

            showMessage(
                "success",
                "Đăng nhập thành công",
                "Bạn đã đăng nhập thành công vào tài khoản của mình",
            );
        } catch (error) {
            console.log("Failed to login:", error);
            showMessage("error", "Đăng nhập thất bại", "Đã xảy ra lỗi khi đăng nhập");
        }
    }

    return (
        <Layout className="flex min-h-screen w-full flex-col items-center justify-start bg-opacity-80 backdrop-blur-sm md:h-full">
            <MatrixBackground />
            <Header className="flex h-20 w-full items-center justify-between bg-transparent px-6">
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
            <Content className="flex min-h-screen w-full flex-col items-center justify-center gap-12 px-8 py-12 md:min-h-full md:flex-row">
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
                        <Form
                            className="space-y-4"
                            layout="vertical"
                            onFinish={handleSubmit(onSubmit)}
                        >
                            <Controller
                                control={control}
                                name="email"
                                render={({ field }) => (
                                    <Item
                                        help={errors.email?.message}
                                        label="Email"
                                        validateStatus={errors.email ? "error" : ""}
                                    >
                                        <Input
                                            {...field}
                                            className="rounded-lg py-2"
                                            placeholder="Email"
                                        />
                                    </Item>
                                )}
                            />

                            <Controller
                                control={control}
                                name="password"
                                render={({ field }) => (
                                    <Item
                                        help={errors.password?.message}
                                        label="Mật khẩu"
                                        validateStatus={errors.password ? "error" : ""}
                                    >
                                        <Password
                                            {...field}
                                            className="rounded-lg py-2"
                                            placeholder="Mật khẩu"
                                        />
                                    </Item>
                                )}
                            />
                            <Button
                                className="h-10 w-full rounded-lg text-lg font-semibold transition-all hover:scale-105"
                                disabled={isLoading}
                                htmlType="submit"
                                type="primary"
                            >
                                {isLoading ? <LoadingOutlined spin={true} /> : "Đăng nhập"}
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
            <AlertDisplay />
        </Layout>
    );
}
