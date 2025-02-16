/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
    Button,
    Card,
    Form,
    Input,
    Layout,
    Typography,
    DatePicker,
    Row,
    Col,
    Flex,
    Checkbox,
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import { AlertDisplay } from "@/components/global/alert-display/alert-display";
import ParticleBackground from "@/components/global/matrix-background/particle-background";
import { useMessage } from "@/hooks/use-message/use-message";
import { useAppDispatch } from "@/hooks/use-redux/use-redux";
import { setCredentials } from "@/redux/slice/auth-slice/auth-slice";
import { RegisterFormData, registerSchema } from "@/schemas/auth/auth-input/auth-input";
import { useRegisterMutation } from "@/services/auth-api/auth-api";
import { generateDeviceId } from "@/utils/device-id/device-id";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Item } = Form;
const { Password } = Input;

export default function RegisterPage() {
    const router = useRouter();
    const [register, { isLoading }] = useRegisterMutation();
    const dispatch = useAppDispatch();
    const { showMessage } = useMessage();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    async function onSubmit(credentials: RegisterFormData) {
        try {
            const { re_password, is_agree, ...data } = credentials;
            const deviceId = await generateDeviceId();
            const result = await register({ ...data, device_id: deviceId }).unwrap();

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
                "Đăng ký thành công",
                "Bạn đã đăng ký thành công tài khoản của mình",
            );
            router.push("/check-email-verification");
        } catch (error) {
            console.log("Failed to register:", error);
            showMessage("error", "Đăng ký thất bại", "Đã xảy ra lỗi khi đăng ký");
        }
    }

    return (
        <Layout className="relative min-h-screen w-full flex-col bg-opacity-80 backdrop-blur-sm">
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
            <Content className="flex items-center justify-center px-4 py-4 md:px-8">
                <Card hoverable className="w-full max-w-2xl rounded-2xl shadow-lg">
                    <Row gutter={[24, 0]}>
                        <Col span={24}>
                            <Title className="mb-4 text-center" level={2}>
                                Đăng ký tài khoản LILIT
                            </Title>
                            <Paragraph className="mb-6 text-center">
                                Tham gia cộng đồng LILIT để khám phá thế giới truyện đa dạng
                            </Paragraph>
                        </Col>
                    </Row>
                    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                        <Row gutter={[24, 16]}>
                            <Col sm={12} xs={24}>
                                <Controller
                                    control={control}
                                    name="username"
                                    render={({ field }) => (
                                        <Item
                                            help={errors.username?.message}
                                            label="Tên người dùng"
                                            validateStatus={errors.username ? "error" : ""}
                                        >
                                            <Input
                                                {...field}
                                                className="rounded-lg py-2"
                                                placeholder="Nhập tên người dùng"
                                            />
                                        </Item>
                                    )}
                                />
                            </Col>
                            <Col sm={12} xs={24}>
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
                                                placeholder="Nhập địa chỉ email"
                                            />
                                        </Item>
                                    )}
                                />
                            </Col>
                            <Col sm={12} xs={24}>
                                <Controller
                                    control={control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <Item
                                            help={errors.first_name?.message}
                                            label="Tên"
                                            validateStatus={errors.first_name ? "error" : ""}
                                        >
                                            <Input
                                                {...field}
                                                className="rounded-lg py-2"
                                                placeholder="Nhập tên"
                                            />
                                        </Item>
                                    )}
                                />
                            </Col>
                            <Col sm={12} xs={24}>
                                <Controller
                                    control={control}
                                    name="last_name"
                                    render={({ field }) => (
                                        <Item
                                            help={errors.last_name?.message}
                                            label="Họ"
                                            validateStatus={errors.last_name ? "error" : ""}
                                        >
                                            <Input
                                                {...field}
                                                className="rounded-lg py-2"
                                                placeholder="Nhập họ"
                                            />
                                        </Item>
                                    )}
                                />
                            </Col>
                            <Col sm={12} xs={24}>
                                <Controller
                                    control={control}
                                    name="password"
                                    render={({ field }) => (
                                        <Item
                                            help={errors.password?.message}
                                            label="Mật khẩu"
                                            validateStatus={errors.password ? "error" : ""}
                                        >
                                            <Input.Password
                                                {...field}
                                                className="rounded-lg py-2"
                                                placeholder="Nhập mật khẩu"
                                            />
                                        </Item>
                                    )}
                                />
                            </Col>
                            <Col sm={12} xs={24}>
                                <Controller
                                    control={control}
                                    name="re_password"
                                    render={({ field }) => (
                                        <Item
                                            help={errors.re_password?.message}
                                            label="Xác nhận mật khẩu"
                                            validateStatus={errors.re_password ? "error" : ""}
                                        >
                                            <Password
                                                {...field}
                                                className="rounded-lg py-2"
                                                placeholder="Nhập lại mật khẩu"
                                            />
                                        </Item>
                                    )}
                                />
                            </Col>
                            <Col sm={{ span: 12, offset: 6 }} xs={{ span: 24, offset: 0 }}>
                                <Controller
                                    control={control}
                                    name="date_of_birth"
                                    render={({ field }) => (
                                        <Item
                                            help={errors.date_of_birth?.message}
                                            label="Ngày sinh"
                                            validateStatus={errors.date_of_birth ? "error" : ""}
                                        >
                                            <DatePicker
                                                {...field}
                                                className="w-full rounded-lg py-2"
                                                format="DD/MM/YYYY"
                                                placeholder="Chọn ngày sinh"
                                                value={field.value ? dayjs(field.value) : null}
                                                onChange={(date) => {
                                                    field.onChange(
                                                        date ? date.format("YYYY-MM-DD") : null,
                                                    );
                                                }}
                                            />
                                        </Item>
                                    )}
                                />
                            </Col>
                            <Col span={24}>
                                <Controller
                                    control={control}
                                    name="is_agree"
                                    render={({ field }) => (
                                        <Item
                                            className="text-center"
                                            help={errors.is_agree?.message}
                                            validateStatus={errors.is_agree ? "error" : ""}
                                        >
                                            <Checkbox
                                                {...field}
                                                checked={field.value}
                                                onChange={(e) => field.onChange(e.target.checked)}
                                            >
                                                <Text className="text-center">
                                                    Bạn đã đọc và đồng ý với{" "}
                                                    <Link href="/terms">Điều khoản dịch vụ</Link> và{" "}
                                                    <Link href="/privacy">Chính sách bảo mật</Link>{" "}
                                                    của LILIT
                                                </Text>
                                            </Checkbox>
                                        </Item>
                                    )}
                                />
                            </Col>
                            <Col span={24}>
                                <Item>
                                    <Button
                                        className="w-full rounded-lg"
                                        htmlType="submit"
                                        loading={isLoading}
                                        type="primary"
                                    >
                                        Đăng ký
                                    </Button>
                                </Item>
                            </Col>
                        </Row>
                    </Form>
                    <Paragraph className="mt-4 text-center text-gray-600">
                        Đã có tài khoản?{" "}
                        <Link className="text-blue-600 hover:underline" href="/login">
                            Đăng nhập ngay
                        </Link>
                    </Paragraph>
                </Card>
            </Content>
            <Footer className="flex w-full flex-col items-center justify-start bg-transparent text-left md:flex-row md:gap-4">
                <Link href="/">
                    <Text className="text-sm hover:text-blue-600 hover:underline">
                        © 2025 LILIT
                    </Text>
                </Link>
                <Flex align="center" className="mt-4 md:mt-0" gap={16}>
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
