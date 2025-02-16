"use client";

import { MailOutlined, LogoutOutlined } from "@ant-design/icons";
import { Layout, Typography, Card, Button, Flex, Space } from "antd";

import "@ant-design/v5-patch-for-react-19";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { AlertDisplay } from "@/components/global/alert-display/alert-display";
import ParticleBackground from "@/components/global/matrix-background/particle-background";
import { useMessage } from "@/hooks/use-message/use-message";
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux/use-redux";
import { logOut } from "@/redux/slice/auth-slice/auth-slice";
import { setCurrentUser } from "@/redux/slice/user-slice/user-slice";
import {
    useLogoutMutation,
    useCheckEmailVerificationMutation,
    useResendEmailVerificationMutation,
} from "@/services/auth-api/auth-api";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const COOLDOWN_TIME = 60; // Firebase might have its own cooldown, this is just for UX

export default function CheckEmailVerificationPage() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [logout] = useLogoutMutation();

    const { currentUser } = useAppSelector((state) => state.user);

    const [checkEmailVerification] = useCheckEmailVerificationMutation();
    const [resendEmailVerification, { isLoading: isResendingEmailVerification }] =
        useResendEmailVerificationMutation();
    const { showMessage } = useMessage();
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        const verificationInterval = setInterval(async () => {
            try {
                await checkEmailVerification().unwrap();

                showMessage("success", "Xác thực thành công", "Email của bạn đã được xác thực");
                if (currentUser) {
                    dispatch(setCurrentUser({ ...currentUser, is_verified: true }));
                }
                router.replace("/home");
                clearInterval(verificationInterval);
            } catch (error) {
                console.log("Checking email verification:", error);
            }
        }, 10000);

        return () => clearInterval(verificationInterval);
    }, [checkEmailVerification, router, showMessage, currentUser, dispatch]);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [countdown]);

    const handleResendVerification = async () => {
        try {
            await resendEmailVerification().unwrap();
            setCountdown(COOLDOWN_TIME);
            showMessage("success", "Gửi lại thành công", "Email xác thực đã được gửi lại");
        } catch (error: any) {
            if (error?.data?.message_vi) {
                showMessage("error", "Gửi lại thất bại", error.data.message_vi);
            } else {
                showMessage(
                    "error",
                    "Gửi lại thất bại",
                    "Đã xảy ra lỗi khi gửi lại email xác thực",
                );
            }
        }
    };

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            dispatch(logOut());
            showMessage(
                "success",
                "Đăng xuất thành công",
                "Bạn đã đăng xuất khỏi tài khoản của mình",
            );
            router.push("/login");
        } catch (error: any) {
            if (error?.data?.message_vi) {
                showMessage("error", "Đăng xuất thất bại", error.data.message_vi);
            } else {
                showMessage("error", "Đăng xuất thất bại", "Đã xảy ra lỗi khi đăng xuất");
            }
            console.log("Logout failed:", error);
        }
    };

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
            <Content className="flex min-h-screen w-full flex-col items-center justify-center gap-12 px-8 py-12 md:min-h-full md:flex-row">
                <Flex className="w-full flex-col items-center justify-center md:w-1/2">
                    <Title className="mb-6 text-center text-4xl">Xác thực email của bạn</Title>
                    <Paragraph className="max-w-md text-center text-lg">
                        Chúng tôi đã gửi một email xác thực đến địa chỉ email của bạn. Vui lòng kiểm
                        tra hòm thư và làm theo hướng dẫn để hoàn tất quá trình xác thực.
                    </Paragraph>
                </Flex>
                <Flex className="flex w-full items-center justify-center md:w-1/2">
                    <Card hoverable className="w-full max-w-md rounded-2xl shadow-lg">
                        <Flex vertical align="center" gap="middle">
                            <Image
                                alt="Email Verification Illustration"
                                height={120}
                                src="/email_verify.svg"
                                width={120}
                            />
                            <Title className="mb-4 text-center" level={3}>
                                Kiểm tra email của bạn
                            </Title>
                            <Paragraph className="mb-6 text-center">
                                Nếu bạn không nhận được email xác thực, vui lòng kiểm tra thư mục
                                Spam hoặc thử gửi lại email xác thực.
                            </Paragraph>
                            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                                <Button
                                    className="w-full"
                                    disabled={countdown > 0}
                                    icon={<MailOutlined />}
                                    loading={isResendingEmailVerification}
                                    size="large"
                                    type="primary"
                                    onClick={handleResendVerification}
                                >
                                    {countdown > 0
                                        ? `Gửi lại sau ${countdown}s`
                                        : "Gửi lại email xác thực"}
                                </Button>
                                <Button
                                    className="w-full"
                                    icon={<LogoutOutlined />}
                                    size="large"
                                    onClick={handleLogout}
                                >
                                    Đăng xuất
                                </Button>
                            </Space>
                        </Flex>
                    </Card>
                </Flex>
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
