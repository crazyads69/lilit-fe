"use client";
import {
    BookOutlined,
    SafetyCertificateOutlined,
    GiftOutlined,
    UsergroupAddOutlined,
    ReadOutlined,
    EditOutlined,
    TeamOutlined,
    RocketOutlined,
    HeartOutlined,
} from "@ant-design/icons";
import { Layout, Typography, Button, Flex, Card, List, Timeline, Divider, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import "@ant-design/v5-patch-for-react-19";

import { AlertDisplay } from "@/components/global/alert-display/alert-display";
import ParticleBackground from "@/components/global/matrix-background/particle-background";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function AboutUsPage() {
    const router = useRouter();
    const features = [
        {
            icon: <SafetyCertificateOutlined className="text-4xl text-blue-600" />,
            title: "Bảo Vệ Tác Phẩm",
            description: "Sử dụng công nghệ blockchain và DRM để bảo vệ bản quyền tác phẩm",
        },
        {
            icon: <GiftOutlined className="text-4xl text-blue-600" />,
            title: "Ủng Hộ Trực Tiếp",
            description: "Độc giả có thể donate trực tiếp cho tác giả yêu thích",
        },
        {
            icon: <BookOutlined className="text-4xl text-blue-600" />,
            title: "Cơ Hội Xuất Bản",
            description: "Kết nối tác giả với các nhà xuất bản uy tín",
        },
        {
            icon: <UsergroupAddOutlined className="text-4xl text-blue-600" />,
            title: "Cộng Đồng Sáng Tạo",
            description: "Xây dựng mạng lưới kết nối giữa độc giả và tác giả",
        },
    ];

    const timeline = [
        {
            color: "green",
            children: (
                <>
                    <Title level={5}>2024: Khởi động dự án</Title>
                    <Paragraph>
                        LILIT được hình thành từ ý tưởng của một nhóm lập trình viên đam mê truyện
                    </Paragraph>
                </>
            ),
        },
        {
            color: "green",
            children: (
                <>
                    <Title level={5}>2025: Ra mắt phiên bản beta</Title>
                    <Paragraph>
                        Triển khai nền tảng với các tính năng cơ bản và bắt đầu xây dựng cộng đồng
                    </Paragraph>
                </>
            ),
        },
        {
            color: "blue",
            children: (
                <>
                    <Title level={5}>2026: Phát triển và mở rộng</Title>
                    <Paragraph>
                        Tích hợp công nghệ blockchain, triển khai hệ thống donate, và hợp tác với
                        các nhà xuất bản
                    </Paragraph>
                </>
            ),
        },
        {
            color: "blue",
            children: (
                <>
                    <Title level={5}>Tương lai</Title>
                    <Paragraph>
                        Trở thành nền tảng truyện hàng đầu Việt Nam, hỗ trợ tác giả phát triển sự
                        nghiệp
                    </Paragraph>
                </>
            ),
        },
    ];

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
                <Space>
                    <Button
                        type="default"
                        onClick={() => {
                            router.push("/login");
                        }}
                    >
                        Đăng nhập
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => {
                            router.push("/register");
                        }}
                    >
                        Đăng ký
                    </Button>
                </Space>
            </Header>

            <Content className="px-4 py-12 md:px-8 lg:px-16">
                {/* Hero Section */}
                <Flex vertical align="center" className="mb-24 text-center">
                    <Title className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                        Về Chúng Tôi - LILIT
                    </Title>
                    <Paragraph className="mb-8 max-w-3xl text-lg">
                        LILIT là nền tảng truyện phi lợi nhuận, miễn phí và không quảng cáo, được
                        tạo ra bởi những lập trình viên đam mê truyện. Chúng tôi cam kết xây dựng
                        một không gian sáng tạo tự do cho cộng đồng yêu truyện.
                    </Paragraph>
                </Flex>

                {/* Tầm nhìn và Sứ mệnh */}
                <Flex vertical align="center" className="mb-24">
                    <Title className="mb-12 text-center text-3xl font-bold" level={2}>
                        Tầm Nhìn và Sứ Mệnh
                    </Title>
                    <Flex className="flex-wrap justify-center" gap={24}>
                        <Card
                            hoverable
                            className="w-full p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl md:w-[calc(50%-12px)]"
                            title={
                                <Title level={3}>
                                    <RocketOutlined className="mr-2 text-blue-600" />
                                    Tầm Nhìn
                                </Title>
                            }
                        >
                            <Paragraph className="text-lg">
                                Trở thành nền tảng truyện online hàng đầu Việt Nam, nơi mà viết lách
                                được coi là một nghề nghiệp nghiêm túc, có thể tạo ra thu nhập ổn
                                định và được xã hội tôn trọng.
                            </Paragraph>
                        </Card>
                        <Card
                            hoverable
                            className="w-full p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl md:w-[calc(50%-12px)]"
                            title={
                                <Title level={3}>
                                    <HeartOutlined className="mr-2 text-blue-600" />
                                    Sứ Mệnh
                                </Title>
                            }
                        >
                            <Paragraph className="text-lg">
                                Tạo ra một hệ sinh thái truyện số, kết nối độc giả, tác giả và nhà
                                xuất bản, đồng thời bảo vệ quyền lợi của các bên tham gia thông qua
                                công nghệ tiên tiến.
                            </Paragraph>
                        </Card>
                    </Flex>
                </Flex>

                {/* Đặc điểm nổi bật */}
                <Flex vertical align="center" className="mb-24">
                    <Title className="mb-12 text-center text-3xl font-bold" level={2}>
                        Điều Gì Làm LILIT Khác Biệt?
                    </Title>
                    <Flex className="flex-wrap justify-center" gap={24}>
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                hoverable
                                className="w-full text-center shadow-lg transition-shadow duration-300 hover:shadow-xl md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                            >
                                <div className="mb-4 text-6xl text-blue-600">{feature.icon}</div>
                                <Title className="mb-4" level={4}>
                                    {feature.title}
                                </Title>
                                <Paragraph>{feature.description}</Paragraph>
                            </Card>
                        ))}
                    </Flex>
                </Flex>

                {/* Câu chuyện của LILIT */}
                <Flex vertical align="center" className="mb-24">
                    <Title className="mb-12 text-center text-3xl font-bold" level={2}>
                        Câu Chuyện Của LILIT
                    </Title>
                    <Card hoverable className="w-full max-w-4xl shadow-lg">
                        <Paragraph className="mb-6 text-lg">
                            LILIT ra đời từ niềm đam mê truyện và công nghệ của một nhóm lập trình
                            viên. Chúng tôi nhận thấy những hạn chế của các nền tảng truyện hiện có
                            như quảng cáo gây phiền nhiễu, phí premium cao, cơ chế nạp phí rắc rối
                            và sự bảo vệ bản quyền chưa đầy đủ.
                        </Paragraph>
                        <Paragraph className="mb-8 text-lg">
                            Với mong muốn tạo ra một không gian sáng tạo tự do và an toàn cho cộng
                            đồng yêu truyện, chúng tôi đã phát triển LILIT - một nền tảng phi lợi
                            nhuận, hoàn toàn miễn phí và không có quảng cáo.
                        </Paragraph>
                        <Divider />
                        <Title className="mb-6 text-center" level={3}>
                            Hành Trình Phát Triển
                        </Title>
                        <Timeline items={timeline} mode="alternate" />
                    </Card>
                </Flex>

                {/* Mô hình hoạt động */}
                <Flex vertical align="center" className="mb-24">
                    <Title className="mb-12 text-center text-3xl font-bold" level={2}>
                        Mô Hình Hoạt Động Phi Lợi Nhuận
                    </Title>
                    <Card hoverable className="w-full max-w-4xl shadow-lg">
                        <Paragraph className="mb-6 text-lg">
                            LILIT hoạt động dựa trên nguyên tắc phi lợi nhuận, với mục tiêu duy nhất
                            là phục vụ cộng đồng yêu truyện. Chúng tôi duy trì hoạt động thông qua:
                        </Paragraph>
                        <List
                            dataSource={[
                                {
                                    icon: <HeartOutlined className="text-blue-600" />,
                                    text: "Đóng góp tự nguyện từ cộng đồng người dùng",
                                },
                                {
                                    icon: <BookOutlined className="text-blue-600" />,
                                    text: "Tài trợ từ các tổ chức ủng hộ văn hóa đọc",
                                },
                                {
                                    icon: <TeamOutlined className="text-blue-600" />,
                                    text: "Hợp tác với các nhà xuất bản (chia sẻ doanh thu từ việc xuất bản tác phẩm)",
                                },
                                {
                                    icon: <RocketOutlined className="text-blue-600" />,
                                    text: "Công sức tình nguyện của đội ngũ phát triển và quản lý",
                                },
                            ]}
                            renderItem={(item) => (
                                <List.Item>
                                    <Text>
                                        {item.icon}
                                        <span className="ml-2">{item.text}</span>
                                    </Text>
                                </List.Item>
                            )}
                        />
                        <Paragraph className="mt-6 text-lg">
                            Mọi khoản thu nhập đều được sử dụng để duy trì và phát triển nền tảng,
                            cũng như hỗ trợ cộng đồng tác giả.
                        </Paragraph>
                    </Card>
                </Flex>

                {/* Tương lai của LILIT */}
                <Flex vertical align="center" className="mb-24">
                    <Title className="mb-12 text-center text-3xl font-bold" level={2}>
                        Tương Lai Của LILIT
                    </Title>
                    <Card hoverable className="w-full max-w-4xl shadow-lg">
                        <Paragraph className="mb-6 text-lg">
                            Chúng tôi không ngừng nỗ lực để phát triển LILIT trở thành:
                        </Paragraph>
                        <List
                            dataSource={[
                                "Nền tảng truyện online hàng đầu Việt Nam về chất lượng nội dung và trải nghiệm người dùng",
                                "Cầu nối vững chắc giữa tác giả, độc giả và các nhà xuất bản",
                                "Môi trường nuôi dưỡng tài năng trẻ",
                                "Tiên phong trong việc áp dụng công nghệ để bảo vệ quyền lợi của tác giả",
                            ]}
                            renderItem={(item) => (
                                <List.Item>
                                    <Text>
                                        <RocketOutlined className="mr-2 text-blue-600" />
                                        {item}
                                    </Text>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Flex>

                {/* Call to Action */}
                <Flex vertical align="center" className="mb-24 text-center">
                    <Title className="mb-6 text-3xl font-bold" level={2}>
                        Tham Gia Cùng LILIT
                    </Title>
                    <Paragraph className="mb-8 max-w-2xl text-lg">
                        Dù bạn là độc giả đam mê, tác giả đầy hoài bão, hay nhà phát triển muốn đóng
                        góp, LILIT luôn chào đón bạn. Hãy cùng chúng tôi xây dựng một cộng đồng
                        truyện số sôi động và phong phú!
                    </Paragraph>
                    <Space className="w-full flex-col justify-center md:flex-row" size="large">
                        <Button icon={<ReadOutlined />} size="large" type="primary">
                            Khám Phá Truyện
                        </Button>
                        <Button icon={<EditOutlined />} size="large">
                            Bắt Đầu Viết
                        </Button>
                        <Button icon={<HeartOutlined />} size="large">
                            Ủng Hộ LILIT
                        </Button>
                    </Space>
                </Flex>

                {/* Đội ngũ phát triển */}
                <Flex vertical align="center" className="mb-24">
                    <Title className="mb-12 text-center text-3xl font-bold" level={2}>
                        Đội Ngũ Phát Triển
                    </Title>
                    <Card hoverable className="w-full max-w-4xl shadow-lg">
                        <Paragraph className="mb-6 text-lg">
                            LILIT được phát triển và vận hành bởi một nhóm các lập trình viên và
                            những người yêu truyện, với sự hỗ trợ của cộng đồng tình nguyện viên.
                            Chúng tôi là:
                        </Paragraph>
                        <List
                            dataSource={[
                                "Những lập trình viên đam mê công nghệ và truyện",
                                // "Các chuyên gia về bảo mật và blockchain",
                                "Nhà thiết kế UX/UI tập trung vào trải nghiệm đọc",
                                "Biên tập viên và quản lý nội dung có kinh nghiệm",
                                "Tình nguyện viên từ cộng đồng yêu truyện",
                            ]}
                            renderItem={(item) => (
                                <List.Item>
                                    <Text>
                                        <TeamOutlined className="mr-2 text-blue-600" />
                                        {item}
                                    </Text>
                                </List.Item>
                            )}
                        />
                        <Paragraph className="mt-6 text-lg">
                            Chúng tôi luôn tìm kiếm những cá nhân tài năng và đam mê để gia nhập đội
                            ngũ LILIT. Nếu bạn quan tâm, hãy liên hệ với chúng tôi qua email:{" "}
                            <Link
                                className="text-blue-600 hover:underline"
                                href="mailto:lilit.official@outlook.com"
                            >
                                lilit.official@outlook.com
                            </Link>
                        </Paragraph>
                    </Card>
                </Flex>

                {/* Đối tác và Hợp tác */}
                <Flex vertical align="center" className="mb-24">
                    <Title className="mb-12 text-center text-3xl font-bold" level={2}>
                        Đối Tác và Hợp Tác
                    </Title>
                    <Card hoverable className="w-full max-w-4xl shadow-lg">
                        <Paragraph className="mb-6 text-lg">
                            LILIT tự hào hợp tác với nhiều đối tác trong ngành xuất bản và công nghệ
                            để mang lại trải nghiệm tốt nhất cho người dùng:
                        </Paragraph>
                        <List
                            dataSource={[
                                "Các nhà xuất bản uy tín tại Việt Nam",
                                "Công ty công nghệ blockchain hàng đầu",
                                "Tổ chức bảo vệ quyền tác giả",
                                "Các trường đại học và viện nghiên cứu văn học",
                            ]}
                            renderItem={(item) => (
                                <List.Item>
                                    <Text>
                                        <BookOutlined className="mr-2 text-blue-600" />
                                        {item}
                                    </Text>
                                </List.Item>
                            )}
                        />
                        <Paragraph className="mt-6 text-lg">
                            Chúng tôi luôn mở rộng cơ hội hợp tác để phát triển nền tảng và hỗ trợ
                            cộng đồng truyện. Nếu bạn quan tâm đến việc hợp tác, vui lòng liên hệ:{" "}
                            <Link
                                className="text-blue-600 hover:underline"
                                href="mailto:lilit.official@outlook.com"
                            >
                                lilit.official@outlook.com
                            </Link>
                        </Paragraph>
                    </Card>
                </Flex>

                {/* Liên hệ */}
                <Flex vertical align="center" className="mb-24">
                    <Title className="mb-12 text-center text-3xl font-bold" level={2}>
                        Liên Hệ Với Chúng Tôi
                    </Title>
                    <Card hoverable className="w-full max-w-4xl shadow-lg">
                        <Paragraph className="mb-6 text-lg">
                            Chúng tôi luôn sẵn sàng lắng nghe ý kiến đóng góp và giải đáp thắc mắc
                            của bạn. Hãy liên hệ với LILIT qua:
                        </Paragraph>
                        <List
                            dataSource={[
                                {
                                    title: "Email:",
                                    content: (
                                        <Link
                                            className="text-blue-600 hover:underline"
                                            href="mailto:lilit.official@outlook.com"
                                        >
                                            lilit.official@outlook.com
                                        </Link>
                                    ),
                                },
                                {
                                    title: "Địa chỉ:",
                                    content: "Thủ Đức, TP.HCM, Việt Nam",
                                },
                            ]}
                            renderItem={(item) => (
                                <List.Item>
                                    <Text strong>{item.title}</Text> {item.content}
                                </List.Item>
                            )}
                        />
                        {/* <Paragraph className="mt-6 text-lg">
                                Theo dõi chúng tôi trên mạng xã hội để cập nhật những thông tin mới
                                nhất:
                            </Paragraph>
                            <Space className="mt-4" size="large">
                                <Link
                                    href="https://facebook.com/lilitofficial"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FacebookOutlined className="text-3xl text-blue-600 hover:text-blue-700" />
                                </Link>
                                <Link
                                    href="https://twitter.com/lilitofficial"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <TwitterOutlined className="text-3xl text-blue-400 hover:text-blue-500" />
                                </Link>
                                <Link
                                    href="https://instagram.com/lilitofficial"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <InstagramOutlined className="text-3xl text-pink-600 hover:text-pink-700" />
                                </Link>
                            </Space> */}
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
