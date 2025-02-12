"use client";
import { Layout, Typography, Card, FloatButton, Anchor, Collapse, Flex, Space, Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

import "@ant-design/v5-patch-for-react-19";
import { AlertDisplay } from "@/components/global/alert-display/alert-display";
import ParticleBackground from "@/components/global/matrix-background/particle-background";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
const { BackTop } = FloatButton;

export default function PaymentPolicyPage() {
    const router = useRouter();
    const [activeKey, setActiveKey] = useState(["1"]);
    const handleAnchorClick = (
        e: React.MouseEvent<HTMLElement>,
        link: { title: ReactNode; href: string },
    ) => {
        const sectionKey = link.href.replace("#section", "");

        setActiveKey([sectionKey]);
    };

    useEffect(() => {
        const hash = window.location.hash;

        if (hash) {
            const sectionKey = hash.replace("#section", "");

            setActiveKey([sectionKey]);
        }
    }, []);

    const sections = [
        {
            key: "1",
            title: "Giới thiệu",
            content: (
                <>
                    <Paragraph>
                        LILIT là nền tảng truyện phi lợi nhuận, hoàn toàn miễn phí và không có quảng
                        cáo. Chính sách thanh toán này mô tả cách thức hoạt động của hệ thống donate
                        và các quy định liên quan đến giao dịch tài chính trên nền tảng của chúng
                        tôi.
                    </Paragraph>
                    <Paragraph>
                        <Text strong>Mục tiêu của chúng tôi là:</Text>
                        <ul>
                            <li>Độc giả có thể tự do ủng hộ các tác giả mà họ yêu thích</li>
                            <li>Tác giả nhận được sự hỗ trợ trực tiếp từ cộng đồng</li>
                            <li>Nền tảng duy trì hoạt động thông qua sự đóng góp tự nguyện</li>
                            <li>Tạo ra một hệ sinh thái văn học số minh bạch và công bằng</li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>Mô hình hoạt động:</Text>
                        <ul>
                            <li>
                                Hoạt động phi lợi nhuận, không có hệ thống premium hay subscription
                            </li>
                            <li>Không thu phí từ người dùng và tác giả</li>
                            <li>Duy trì hoạt động thông qua đóng góp tự nguyện từ cộng đồng</li>
                            <li>Hợp tác với các nhà xuất bản để tạo cơ hội xuất bản cho tác giả</li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "2",
            title: "Donate cho nền tảng",
            content: (
                <>
                    <Paragraph>
                        <Text strong>Quy định về donate cho nền tảng:</Text>
                        <ul>
                            <li>Mức donate tối thiểu: 10,000 VND</li>
                            <li>100% số tiền được sử dụng để duy trì và phát triển nền tảng</li>
                            <li>
                                Công khai báo cáo tài chính định kỳ hàng quý về việc sử dụng donate
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>Mục đích sử dụng tiền donate:</Text>
                        <ul>
                            <li>Chi phí duy trì máy chủ và hạ tầng kỹ thuật</li>
                            <li>Phát triển tính năng mới và cải thiện trải nghiệm người dùng</li>
                            <li>Đầu tư vào các công nghệ bảo mật và bảo vệ nội dung</li>
                            <li>Tổ chức các hoạt động cộng đồng và hỗ trợ tác giả</li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "3",
            title: "Hình thức thanh toán",
            content: (
                <>
                    <Paragraph>
                        <Text strong>
                            LILIT hỗ trợ các hình thức thanh toán sau cho việc donate:
                        </Text>
                        <ul>
                            <li>
                                Chuyển khoản ngân hàng: Hỗ trợ chuyển khoản từ hầu hết các ngân hàng
                                tại Việt Nam
                            </li>
                            <li>
                                Ví điện tử: Bao gồm Momo, ZaloPay, VNPay và các ví điện tử phổ biến
                                khác
                            </li>
                            <li>Thẻ tín dụng/ghi nợ quốc tế: Hỗ trợ Visa, Mastercard, JCB</li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "4",
            title: "Quy trình donate",
            content: (
                <>
                    <Paragraph>
                        <Text strong>Quy trình donate cho tác giả:</Text>
                        <ul>
                            <li>Mức donate tối thiểu: 5,000 VND</li>
                            <li>Thời gian xử lý và chuyển tiền: trong vòng 24 giờ làm việc</li>
                            <li>Tác giả cần xác minh danh tính trước khi nhận tiền donate</li>
                            <li>LILIT không thu bất kỳ phí giao dịch nào từ số tiền donate</li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>Các bước thực hiện donate:</Text>
                        <ul>
                            <li>
                                <Text strong>Bước 1:</Text> Chọn tác giả hoặc tác phẩm bạn muốn ủng
                                hộ
                            </li>
                            <li>
                                <Text strong>Bước 2:</Text> Chọn số tiền donate (có thể chọn từ các
                                mức được đề xuất hoặc nhập số tiền tùy chọn)
                            </li>
                            <li>
                                <Text strong>Bước 3:</Text> Chọn phương thức thanh toán
                            </li>
                            <li>
                                <Text strong>Bước 4:</Text> Xác nhận thông tin donate
                            </li>
                            <li>
                                <Text strong>Bước 5:</Text> Hoàn tất thanh toán theo hướng dẫn của
                                phương thức đã chọn
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "5",
            title: "Phí giao dịch",
            content: (
                <>
                    <Paragraph>
                        <Text strong>
                            LILIT cam kết minh bạch về mọi khoản phí liên quan đến giao dịch:
                        </Text>
                        <ul>
                            <li>LILIT không thu bất kỳ khoản phí nào từ người dùng hoặc tác giả</li>
                            <li>
                                Phí giao dịch (nếu có) sẽ do đơn vị cung cấp dịch vụ thanh toán thu
                            </li>
                            <li>
                                Mọi khoản phí sẽ được hiển thị rõ ràng trước khi xác nhận giao dịch
                            </li>
                            <li>
                                Trong hầu hết trường hợp, LILIT sẽ hỗ trợ chi trả phí giao dịch để
                                đảm bảo 100% số tiền donate đến được với tác giả
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "6",
            title: "Chính sách hoàn tiền",
            content: (
                <>
                    <Paragraph>
                        <Text strong>
                            Do tính chất đặc thù của việc donate, LILIT có chính sách hoàn tiền như
                            sau:
                        </Text>
                        <ul>
                            <li>
                                Về nguyên tắc, các khoản donate đã thực hiện sẽ không được hoàn lại
                            </li>
                            <li>
                                Trong trường hợp xảy ra lỗi kỹ thuật dẫn đến việc donate không thành
                                công nhưng đã bị trừ tiền, LILIT sẽ hỗ trợ hoàn tiền trong vòng 7
                                ngày làm việc
                            </li>
                            <li>
                                Nếu phát hiện giao dịch gian lận hoặc vi phạm điều khoản sử dụng,
                                LILIT có quyền hủy bỏ giao dịch và hoàn tiền cho người dùng
                            </li>
                            <li>
                                Mọi yêu cầu hoàn tiền cần được gửi đến bộ phận hỗ trợ của LILIT
                                trong vòng 30 ngày kể từ ngày phát sinh giao dịch
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "7",
            title: "Bảo mật thông tin",
            content: (
                <>
                    <Paragraph>
                        <Text strong>
                            LILIT cam kết bảo vệ thông tin cá nhân và tài chính của người dùng bằng
                            các biện pháp sau:
                        </Text>
                        <ul>
                            <li>
                                Mã hóa dữ liệu: Tất cả thông tin giao dịch được mã hóa theo tiêu
                                chuẩn SSL/TLS
                            </li>
                            <li>
                                Tuân thủ PCI DSS: Áp dụng các tiêu chuẩn bảo mật của ngành công
                                nghiệp thẻ thanh toán
                            </li>
                            <li>Xác thực hai yếu tố: Áp dụng cho các giao dịch có giá trị lớn</li>
                            <li>
                                Giám sát giao dịch: Hệ thống tự động phát hiện các giao dịch bất
                                thường
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "8",
            title: "Bảo vệ nội dung và quyền sở hữu",
            content: (
                <>
                    <Paragraph>
                        <Text strong>Các biện pháp bảo vệ nội dung:</Text>
                        <ul>
                            <li>Tích hợp công nghệ blockchain để xác thực quyền sở hữu tác phẩm</li>
                            <li>Hỗ trợ mint NFT cho các tác phẩm gốc</li>
                            <li>Áp dụng DRM để ngăn chặn sao chép trái phép</li>
                            <li>Hệ thống theo dõi và phát hiện vi phạm bản quyền tự động</li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "9",
            title: "Quy định về thuế",
            content: (
                <>
                    <Paragraph>
                        <Text strong>
                            Để đảm bảo tuân thủ quy định pháp luật, LILIT có các quy định về thuế
                            như sau:
                        </Text>
                        <ul>
                            <li>
                                Tác giả có trách nhiệm kê khai và nộp thuế thu nhập cá nhân đối với
                                các khoản thu nhập từ donate theo quy định của pháp luật Việt Nam
                            </li>
                            <li>
                                LILIT sẽ cung cấp báo cáo thu nhập hàng năm cho tác giả để hỗ trợ
                                việc kê khai thuế
                            </li>
                            <li>
                                Đối với các tác giả có thu nhập từ donate vượt quá mức quy định,
                                LILIT có thể thực hiện khấu trừ thuế tại nguồn theo yêu cầu của cơ
                                quan thuế
                            </li>
                            <li>
                                LILIT khuyến nghị tác giả tham khảo ý kiến của chuyên gia tư vấn
                                thuế để đảm bảo tuân thủ đầy đủ nghĩa vụ thuế
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "10",
            title: "Điều khoản pháp lý",
            content: (
                <>
                    <Paragraph>
                        <Text strong>Tuân thủ pháp luật:</Text>
                        <ul>
                            <li>Áp dụng các biện pháp chống rửa tiền theo quy định pháp luật</li>
                            <li>Tuân thủ quy định về giao dịch tài chính quốc tế</li>
                            <li>Quyền từ chối hoặc đình chỉ các giao dịch đáng ngờ</li>
                            <li>Quy trình giải quyết tranh chấp về giao dịch</li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>Điều khoản bổ sung:</Text>
                        <ul>
                            <li>
                                LILIT có quyền thay đổi chính sách sau khi thông báo trước 30 ngày
                            </li>
                            <li>
                                Quyền chấm dứt dịch vụ đối với các trường hợp vi phạm nghiêm trọng
                            </li>
                            <li>Cam kết bảo mật thông tin theo quy định của pháp luật</li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "11",
            title: "Tính minh bạch",
            content: (
                <>
                    <Paragraph>
                        <Text strong>Cơ chế giám sát và báo cáo:</Text>
                        <ul>
                            <li>Công khai báo cáo tài chính định kỳ về việc sử dụng tiền donate</li>
                            <li>Hệ thống theo dõi trực tuyến các khoản donate</li>
                            <li>Kiểm toán độc lập hàng năm về tài chính của nền tảng</li>
                            <li>Công khai các chỉ số hoạt động và phát triển của nền tảng</li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "12",
            title: "Liên hệ hỗ trợ",
            content: (
                <>
                    <Paragraph>
                        <Text strong>
                            Nếu bạn có bất kỳ thắc mắc nào về giao dịch hoặc cần hỗ trợ, vui lòng
                            liên hệ với chúng tôi qua các kênh sau:
                        </Text>
                        <ul>
                            <li>
                                Email:{" "}
                                <Link href="mailto:lilit.official@outlook.com">
                                    lilit.official@outlook.com
                                </Link>
                            </li>
                            <li>
                                Hỗ trợ trực tuyến: Truy cập mục &apos;Trợ giúp&apos; trên website
                                hoặc ứng dụng LILIT
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        Chúng tôi cam kết phản hồi mọi yêu cầu hỗ trợ trong vòng 24 giờ làm việc (từ
                        thứ 2 đến thứ 6).
                    </Paragraph>
                </>
            ),
        },
    ];

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

            <Content className="px-4 py-8 md:px-8">
                <Card className="mx-auto max-w-4xl">
                    <Title className="mb-8 text-center" level={1}>
                        Chính sách thanh toán LILIT
                    </Title>

                    <Paragraph className="mb-6">
                        Chào mừng bạn đến với LILIT! Dưới đây là chính sách thanh toán của chúng
                        tôi. Vui lòng đọc kỹ để hiểu rõ về cách thức hoạt động của hệ thống donate
                        và các quy định liên quan.
                    </Paragraph>

                    <Anchor
                        affix={false}
                        className="mb-8"
                        items={sections.map((section) => ({
                            key: section.key,
                            href: `#section${section.key}`,
                            title: section.title,
                        }))}
                        offsetTop={80}
                        showInkInFixed={true}
                        targetOffset={80}
                        onClick={handleAnchorClick}
                    />

                    <Collapse
                        accordion
                        activeKey={activeKey}
                        defaultActiveKey={["1"]}
                        items={sections.map((section) => ({
                            key: section.key,
                            label: <Title level={4}>{section.title}</Title>,
                            children: section.content,
                            id: `section${section.key}`,
                        }))}
                        onChange={(keys) => setActiveKey(keys)}
                    />

                    <Paragraph className="mt-8 text-center">
                        <Text strong>
                            Bằng việc sử dụng dịch vụ của LILIT, bạn đồng ý với các điều khoản trong
                            Chính sách thanh toán này.
                        </Text>
                    </Paragraph>
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
            <BackTop visibilityHeight={0} />
            <AlertDisplay />
        </Layout>
    );
}
