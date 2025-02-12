"use client";
import { Layout, Typography, Card, FloatButton, Anchor, Collapse, Flex, Space, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

import "@ant-design/v5-patch-for-react-19";
import { AlertDisplay } from "@/components/global/alert-display/alert-display";
import ParticleBackground from "@/components/global/matrix-background/particle-background";
import SchemaOrg from "@/components/global/schema-org/schema-org";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { BackTop } = FloatButton;

export default function PrivacyPolicyPage() {
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
                <Paragraph>
                    LILIT cam kết bảo vệ quyền riêng tư và thông tin cá nhân của người dùng. Chính
                    sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng, và bảo vệ thông tin cá
                    nhân của bạn khi sử dụng nền tảng LILIT. Bằng việc sử dụng dịch vụ của chúng
                    tôi, bạn đồng ý với các điều khoản trong Chính sách bảo mật này.
                </Paragraph>
            ),
        },
        {
            key: "2",
            title: "Thông tin chúng tôi thu thập",
            content: (
                <>
                    <Paragraph>
                        <Text strong>2.1. Thông tin cá nhân:</Text>
                        <ul>
                            <li>Họ tên</li>
                            <li>Địa chỉ email</li>
                            <li>Ngày sinh</li>
                            <li>Thông tin đăng nhập (tên đăng nhập, mật khẩu đã được mã hóa)</li>
                            <li>Thông tin thanh toán (chỉ khi bạn sử dụng tính năng donate)</li>
                            <li>Thông tin định danh (nếu bạn là tác giả đăng ký xuất bản)</li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>2.2. Thông tin sử dụng:</Text>
                        <ul>
                            <li>Lịch sử đọc truyện</li>
                            <li>Bình luận và đánh giá</li>
                            <li>Tương tác với các tính năng của nền tảng</li>
                            <li>Dữ liệu về thời gian và tần suất sử dụng</li>
                            <li>Thông tin về sở thích đọc và thể loại yêu thích</li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>2.3. Thông tin thiết bị:</Text>
                        <ul>
                            <li>Loại thiết bị</li>
                            <li>Hệ điều hành</li>
                            <li>Trình duyệt web</li>
                            <li>Địa chỉ IP</li>
                            <li>Dữ liệu vị trí (nếu bạn cho phép)</li>
                            <li>Thông tin về mạng di động và WiFi</li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "3",
            title: "Mục đích sử dụng thông tin",
            content: (
                <>
                    <Paragraph>
                        <Text strong>LILIT sử dụng thông tin thu thập để:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Cung cấp và cải thiện dịch vụ</li>
                        <li>Xác thực tài khoản và bảo mật</li>
                        <li>Cá nhân hóa trải nghiệm đọc và đề xuất nội dung phù hợp</li>
                        <li>Liên lạc với người dùng về cập nhật và thông báo quan trọng</li>
                        <li>Phân tích và cải thiện hiệu suất nền tảng</li>
                        <li>Hỗ trợ tính năng donate cho tác giả</li>
                        <li>Kết nối tác giả với nhà xuất bản (khi được sự đồng ý của tác giả)</li>
                        <li>Phát hiện và ngăn chặn các hoạt động gian lận hoặc lạm dụng</li>
                        <li>Nghiên cứu và phát triển tính năng mới</li>
                        <li>Tuân thủ các nghĩa vụ pháp lý</li>
                    </ul>
                </>
            ),
        },
        {
            key: "4",
            title: "Bảo vệ thông tin",
            content: (
                <>
                    <Paragraph>
                        <Text strong>
                            LILIT áp dụng các biện pháp bảo mật nghiêm ngặt để bảo vệ thông tin cá
                            nhân của người dùng, bao gồm:
                        </Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Mã hóa dữ liệu nhạy cảm theo tiêu chuẩn công nghiệp</li>
                        <li>Sử dụng công nghệ blockchain để bảo vệ bản quyền tác phẩm</li>
                        <li>
                            Áp dụng DRM (Digital Rights Management) để ngăn chặn sao chép trái phép
                        </li>
                        <li>Kiểm soát truy cập và giám sát hệ thống thường xuyên</li>
                        <li>Đào tạo nhân viên về bảo mật thông tin</li>
                        <li>Cập nhật và nâng cấp hệ thống bảo mật định kỳ</li>
                        <li>Backup dữ liệu thường xuyên và lưu trữ tại nhiều địa điểm an toàn</li>
                        <li>Thực hiện đánh giá bảo mật định kỳ và kiểm tra lỗ hổng</li>
                    </ul>
                    <Paragraph>
                        <Text strong>Quy trình xử lý sự cố bảo mật:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>
                            Phát hiện và đánh giá mức độ nghiêm trọng của sự cố trong vòng 24 giờ
                        </li>
                        <li>Thông báo cho người dùng bị ảnh hưởng trong vòng 72 giờ</li>
                        <li>Thực hiện các biện pháp khắc phục và ngăn chặn</li>
                        <li>Báo cáo cho cơ quan chức năng theo quy định pháp luật</li>
                    </ul>
                </>
            ),
        },
        {
            key: "5",
            title: "Chia sẻ thông tin",
            content: (
                <>
                    <Paragraph>
                        <Text strong>
                            LILIT không bán, cho thuê hoặc chia sẻ thông tin cá nhân của người dùng
                            với bên thứ ba, trừ khi:
                        </Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Được sự đồng ý rõ ràng của người dùng</li>
                        <li>Cần thiết để cung cấp dịch vụ (ví dụ: xử lý thanh toán donate)</li>
                        <li>Kết nối tác giả với nhà xuất bản (chỉ khi tác giả yêu cầu)</li>
                        <li>Tuân thủ yêu cầu pháp lý hoặc bảo vệ quyền lợi của LILIT</li>
                    </ul>
                    <Paragraph>
                        <Text strong>Đối tác được chia sẻ thông tin:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Đối tác thanh toán: Xử lý giao dịch donate</li>
                        <li>Đối tác lưu trữ: Cung cấp dịch vụ cloud storage</li>
                        <li>Đối tác phân tích: Phân tích dữ liệu người dùng</li>
                    </ul>
                    <Paragraph>
                        <Text strong>Chuyển dữ liệu xuyên biên giới:</Text>
                        Khi cần thiết, dữ liệu có thể được chuyển và xử lý tại các máy chủ nằm ngoài
                        Việt Nam. Trong trường hợp này, chúng tôi đảm bảo tuân thủ các quy định về
                        bảo vệ dữ liệu của cả Việt Nam và quốc gia đích.
                    </Paragraph>
                </>
            ),
        },
        {
            key: "6",
            title: "Quyền của người dùng",
            content: (
                <>
                    <Paragraph>
                        <Text strong>Người dùng có quyền:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Truy cập và chỉnh sửa thông tin cá nhân (xử lý trong vòng 7 ngày)</li>
                        <li>
                            Yêu cầu xóa tài khoản và dữ liệu liên quan (xử lý trong vòng 30 ngày)
                        </li>
                        <li>Từ chối nhận thông tin tiếp thị (xử lý ngay lập tức)</li>
                        <li>
                            Yêu cầu giải thích về việc sử dụng dữ liệu (phản hồi trong vòng 14 ngày)
                        </li>
                        <li>
                            Rút lại sự đồng ý cho việc xử lý dữ liệu cá nhân (xử lý trong vòng 7
                            ngày)
                        </li>
                        <li>Nhận bản sao dữ liệu của mình (cung cấp trong vòng 30 ngày)</li>
                    </ul>
                    <Paragraph>
                        <Text strong>Quy trình khiếu nại:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Gửi khiếu nại qua email: lilit.official@outlook.com</li>
                        <li>Thời gian phản hồi ban đầu: 48 giờ</li>
                        <li>Thời gian giải quyết tối đa: 30 ngày</li>
                        <li>Quyền khiếu nại lên cơ quan bảo vệ dữ liệu có thẩm quyền</li>
                    </ul>
                </>
            ),
        },
        {
            key: "7",
            title: "Cookie và công nghệ theo dõi",
            content: (
                <>
                    <Paragraph>
                        <Text strong>LILIT sử dụng các loại cookie sau:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Cookie thiết yếu: Đảm bảo hoạt động cơ bản của website</li>
                        <li>Cookie phân tích: Theo dõi lưu lượng và hành vi người dùng</li>
                        <li>Cookie chức năng: Ghi nhớ tùy chọn và cài đặt của người dùng</li>
                        <li>Cookie marketing (nếu được cho phép): Cá nhân hóa nội dung</li>
                    </ul>
                    <Paragraph>
                        <Text strong>Hướng dẫn quản lý cookie theo trình duyệt:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>
                            Chrome: Settings {">"} Privacy and Security {">"} Cookies
                        </li>
                        <li>
                            Firefox: Options {">"} Privacy & Security {">"} Cookies
                        </li>
                        <li>
                            Safari: Preferences {">"} Privacy {">"} Cookies
                        </li>
                        <li>
                            Edge: Settings {">"} Privacy & Security {">"} Cookies
                        </li>
                    </ul>
                    <Paragraph>
                        Người dùng có thể kiểm soát việc sử dụng cookie thông qua cài đặt trình
                        duyệt. Tuy nhiên, việc tắt cookie có thể ảnh hưởng đến một số tính năng của
                        nền tảng.
                    </Paragraph>
                </>
            ),
        },
        {
            key: "8",
            title: "Bảo vệ dữ liệu trẻ em",
            content: (
                <>
                    <Paragraph>
                        <Text strong>
                            LILIT không cố ý thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi. Nếu
                            bạn là phụ huynh hoặc người giám hộ và tin rằng con bạn đã cung cấp
                            thông tin cá nhân cho chúng tôi, vui lòng liên hệ ngay để chúng tôi có
                            thể:
                        </Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Xác minh và xóa thông tin trong vòng 24 giờ</li>
                        <li>Ngăn chặn việc thu thập thông tin trong tương lai</li>
                        <li>Cung cấp báo cáo về dữ liệu đã thu thập (nếu có)</li>
                    </ul>
                </>
            ),
        },
        {
            key: "9",
            title: "Thời gian lưu trữ dữ liệu",
            content: (
                <>
                    <Paragraph>
                        <Text strong>Thời gian lưu trữ theo loại dữ liệu:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Thông tin tài khoản cơ bản: 24 tháng kể từ lần tương tác cuối</li>
                        <li>Lịch sử đọc truyện: 12 tháng</li>
                        <li>Dữ liệu thanh toán: 36 tháng (theo quy định pháp luật)</li>
                        <li>Log hệ thống: 6 tháng</li>
                        <li>Bình luận và đánh giá: 24 tháng</li>
                        <li>Cookie và dữ liệu phiên: Tối đa 12 tháng</li>
                    </ul>
                    <Paragraph>
                        <Text strong>Quy trình xử lý dữ liệu hết hạn:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Thông báo trước 30 ngày khi dữ liệu sắp hết hạn</li>
                        <li>Tự động ẩn danh hóa sau thời hạn lưu trữ</li>
                        <li>Xóa hoàn toàn sau 6 tháng ẩn danh hóa</li>
                        <li>Cung cấp tùy chọn sao lưu dữ liệu cho người dùng</li>
                    </ul>
                    <Paragraph>
                        <Text strong>Xử lý tài khoản không hoạt động:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Cảnh báo sau 12 tháng không hoạt động</li>
                        <li>Tạm ngưng tài khoản sau 18 tháng</li>
                        <li>Xóa tài khoản sau 24 tháng (có thông báo trước)</li>
                    </ul>
                </>
            ),
        },
        {
            key: "10",
            title: "Thay đổi chính sách bảo mật",
            content: (
                <>
                    <Paragraph>
                        <Text strong>
                            LILIT có thể cập nhật Chính sách bảo mật này theo thời gian. Chúng tôi
                            sẽ:
                        </Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Thông báo trước 30 ngày về những thay đổi quan trọng</li>
                        <li>Gửi email thông báo chi tiết các thay đổi</li>
                        <li>Duy trì phiên bản lịch sử của chính sách để tham khảo</li>
                        <li>Cho phép người dùng từ chối các thay đổi và xóa tài khoản nếu muốn</li>
                    </ul>
                    <Paragraph>
                        Việc bạn tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa với việc
                        bạn chấp nhận Chính sách bảo mật mới.
                    </Paragraph>
                </>
            ),
        },
        {
            key: "11",
            title: "Quyền sở hữu và dữ liệu sau khi qua đời",
            content: (
                <>
                    <Paragraph>
                        <Text strong>Quyền sở hữu dữ liệu:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Người dùng sở hữu toàn bộ nội dung và dữ liệu họ tạo ra</li>
                        <li>LILIT được cấp quyền sử dụng để cung cấp dịch vụ</li>
                        <li>Tác giả giữ bản quyền tác phẩm của họ</li>
                    </ul>
                    <Paragraph>
                        <Text strong>Xử lý dữ liệu người dùng qua đời:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Người dùng có thể chỉ định người thừa kế tài khoản</li>
                        <li>Thủ tục xác minh người thừa kế hợp pháp</li>
                        <li>Tùy chọn tài khoản tưởng niệm</li>
                        <li>Quy trình xóa dữ liệu theo yêu cầu gia đình</li>
                    </ul>
                </>
            ),
        },
        {
            key: "12",
            title: "Liên hệ",
            content: (
                <Paragraph>
                    <Text strong>
                        Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật này, vui lòng liên hệ:
                    </Text>
                    <ul className="list-disc pl-8">
                        <li>
                            Email:{" "}
                            <Link href="mailto:lilit.official@outlook.com">
                                lilit.official@outlook.com
                            </Link>
                        </li>
                        <li>Địa chỉ: Thủ Đức, TP.HCM, Việt Nam</li>
                        <li>Giờ làm việc: 9:00 - 18:00 (Thứ 2 - Thứ 6)</li>
                    </ul>
                    <Paragraph className="mt-4">
                        <Text strong>Thời gian phản hồi cam kết:</Text>
                    </Paragraph>
                    <ul className="list-disc pl-8">
                        <li>Xác nhận nhận được yêu cầu: 24 giờ</li>
                        <li>Phản hồi sơ bộ: 48 giờ</li>
                        <li>Giải quyết vấn đề: 3-7 ngày làm việc</li>
                    </ul>
                </Paragraph>
            ),
        },
    ];

    return (
        <>
            <SchemaOrg
                dateModified={new Date().toISOString()}
                datePublished="2025-02-07T08:00:00+07:00"
                description="Chính sách bảo mật của LILIT - Nền tảng truyện phi lợi nhuận, miễn phí và không quảng cáo. Tìm hiểu cách chúng tôi bảo vệ thông tin cá nhân của bạn."
                images={["/og-image.jpg"]}
                title="Chính sách bảo mật - LILIT: Nền Tảng Truyện Miễn Phí, Không Quảng Cáo"
                url="https://lilit.io.vn/privacy"
            />
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

                <Content className="px-4 py-8 md:px-8">
                    <Card className="mx-auto max-w-4xl">
                        <Title className="mb-8 text-center" level={1}>
                            Chính sách bảo mật LILIT
                        </Title>

                        <Paragraph className="mb-6">
                            Chào mừng bạn đến với LILIT! Chúng tôi cam kết bảo vệ quyền riêng tư và
                            thông tin cá nhân của bạn. Vui lòng đọc kỹ Chính sách bảo mật này để
                            hiểu cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn. Bằng
                            việc sử dụng dịch vụ của LILIT, bạn đồng ý với các điều khoản trong
                            Chính sách bảo mật này.
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
                                label: section.title,
                                children: section.content,
                            }))}
                            onChange={(keys) => setActiveKey(keys)}
                        />
                        <Paragraph className="mt-8 text-center">
                            <Text strong>
                                Bằng việc sử dụng dịch vụ của LILIT, bạn xác nhận rằng bạn đã đọc,
                                hiểu và đồng ý với tất cả các điều khoản và điều kiện được nêu trong
                                Chính sách bảo mật này.
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
        </>
    );
}
