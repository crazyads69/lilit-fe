import { HomeOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Typography, Flex, Card, Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const { Title, Paragraph } = Typography;

interface ErrorDisplayProps {
    title?: string;
    message?: string;
    onRetry?: () => void;
}

export default function SmallErrorDisplay({
    title = "Oops! Đã xảy ra lỗi",
    message = "Xin lỗi, đã có lỗi xảy ra. Chúng tôi đang cố gắng khắc phục vấn đề này.",
    onRetry,
}: ErrorDisplayProps) {
    const router = useRouter();

    return (
        <Card hoverable className="w-full max-w-xl shadow-lg">
            <Flex vertical align="center" gap="middle">
                <Image alt="Error Illustration" height={200} src="/global_error.svg" width={200} />
                <Title className="mb-0 text-center" level={2}>
                    {title}
                </Title>
                <Paragraph className="mb-6 text-center text-lg">{message}</Paragraph>
                <Space size="middle">
                    <Button
                        icon={<HomeOutlined />}
                        size="large"
                        type="primary"
                        onClick={() => router.push("/")}
                    >
                        Trang chủ
                    </Button>
                    {onRetry && (
                        <Button icon={<ReloadOutlined />} size="large" onClick={onRetry}>
                            Thử lại
                        </Button>
                    )}
                </Space>
            </Flex>
        </Card>
    );
}
