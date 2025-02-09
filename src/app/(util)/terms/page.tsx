"use client";
import { Layout, Typography, Card, FloatButton, Anchor, Collapse, Flex } from "antd";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";

import "@ant-design/v5-patch-for-react-19";
import { AlertDisplay } from "@/components/global/alert-display/alert-display";
import ParticleBackground from "@/components/global/matrix-background/particle-background";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
const { BackTop } = FloatButton;

export default function TermsOfServicePage() {
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
            title: "Định nghĩa",
            content: (
                <>
                    <Paragraph>
                        - <Text strong>&quot;LILIT&quot;</Text> (hay &quot;chúng tôi&quot;): Là nền
                        tảng truyện phi lợi nhuận, miễn phí và không có quảng cáo, được phát triển
                        và vận hành bởi LILIT Team.
                    </Paragraph>
                    <Paragraph>
                        - <Text strong>&quot;Dịch vụ&quot;</Text>: Bao gồm tất cả các tính năng, nội
                        dung và dịch vụ được cung cấp trên nền tảng LILIT.
                    </Paragraph>
                    <Paragraph>
                        - <Text strong>&quot;Người dùng&quot;</Text> (hay &quot;bạn&quot;): Là cá
                        nhân sử dụng nền tảng LILIT.
                    </Paragraph>
                    <Paragraph>
                        - <Text strong>&quot;Nội dung&quot;</Text>: Bao gồm tất cả các sản phẩm dưới
                        dạng văn bản, hình ảnh, âm thanh hoặc video do LILIT hoặc người dùng đăng
                        tải.
                    </Paragraph>
                </>
            ),
        },
        {
            key: "2",
            title: "Điều kiện sử dụng",
            content: (
                <>
                    <Paragraph>
                        <Text strong>2.1. Độ tuổi:</Text> Bạn phải từ 13 tuổi trở lên để sử dụng
                        LILIT. Nếu chúng tôi phát hiện người dùng dưới 13 tuổi, chúng tôi sẽ chấm
                        dứt tài khoản đó ngay lập tức.
                    </Paragraph>
                    <Paragraph>
                        <Text strong>2.2. Tài khoản:</Text>
                        <ul>
                            <li>
                                Bạn cần tạo một tài khoản để truy cập đầy đủ các tính năng của
                                LILIT.
                            </li>
                            <li>Bạn chịu trách nhiệm bảo mật thông tin tài khoản của mình.</li>
                            <li>
                                Bạn không được chia sẻ thông tin đăng nhập của mình với người khác.
                            </li>
                            <li>
                                LILIT không chịu trách nhiệm cho bất kỳ tổn thất nào phát sinh do
                                việc bạn không bảo mật thông tin tài khoản.
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>2.3. Xóa tài khoản:</Text> Bạn có thể yêu cầu xóa tài khoản
                        bằng cách gửi email đến{" "}
                        <Link href="mailto:lilit.official@outlook.com">
                            lilit.official@outlook.com
                        </Link>
                        . Sau khi xóa, mọi dữ liệu liên quan đến tài khoản của bạn sẽ được xử lý
                        theo chính sách bảo vệ dữ liệu cá nhân của chúng tôi.
                    </Paragraph>
                </>
            ),
        },
        {
            key: "3",
            title: "Quyền sở hữu nội dung",
            content: (
                <>
                    <Paragraph>
                        <Text strong>3.1. Nội dung của người dùng:</Text>
                        <ul>
                            <li>Bạn giữ quyền sở hữu đối với nội dung bạn đăng tải trên LILIT.</li>
                            <li>
                                Bằng việc đăng tải nội dung, bạn cấp cho LILIT quyền phi độc quyền,
                                miễn phí, có thể chuyển nhượng, có thể cấp phép lại, không giới hạn
                                để sử dụng, sao chép, sửa đổi, phân phối, xuất bản, dịch thuật, tạo
                                các tác phẩm phái sinh, hiển thị và thực hiện nội dung đó trong phạm
                                vi cung cấp dịch vụ của LILIT.
                            </li>
                            <li>
                                Bạn xác nhận và đảm bảo rằng bạn có tất cả các quyền cần thiết để
                                cấp các quyền nói trên.
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>3.2. Trách nhiệm về nội dung:</Text>
                        <ul>
                            <li>Bạn chịu trách nhiệm hoàn toàn về nội dung bạn đăng tải.</li>
                            <li>
                                Bạn đảm bảo rằng nội dung của bạn không vi phạm quyền sở hữu trí tuệ
                                của bất kỳ bên thứ ba nào.
                            </li>
                            <li>
                                LILIT không chịu trách nhiệm pháp lý đối với bất kỳ nội dung nào do
                                người dùng đăng tải.
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "4",
            title: "Quyền của LILIT",
            content: (
                <>
                    <Paragraph>
                        <Text strong>4.1. Quản lý nội dung:</Text>
                        <ul>
                            <li>
                                LILIT có quyền, nhưng không có nghĩa vụ, kiểm duyệt, chỉnh sửa hoặc
                                xóa bất kỳ nội dung nào vi phạm điều khoản sử dụng hoặc pháp luật
                                hiện hành.
                            </li>
                            <li>
                                Chúng tôi có thể chấm dứt hoặc đình chỉ quyền truy cập của bạn vào
                                tất cả hoặc một phần của LILIT mà không cần thông báo trước nếu bạn
                                vi phạm các điều khoản này.
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>4.2. Thay đổi dịch vụ:</Text>
                        <ul>
                            <li>
                                LILIT có quyền sửa đổi, tạm ngừng hoặc chấm dứt dịch vụ (hoặc bất kỳ
                                phần nào của dịch vụ) vào bất kỳ lúc nào mà không cần thông báo
                                trước.
                            </li>
                            <li>
                                Chúng tôi không chịu trách nhiệm đối với bạn hoặc bất kỳ bên thứ ba
                                nào về việc sửa đổi, tạm ngừng hoặc chấm dứt dịch vụ.
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "5",
            title: "Bảo vệ bản quyền",
            content: (
                <>
                    <Paragraph>
                        <Text strong>5.1. Công nghệ bảo vệ:</Text>
                        <ul>
                            <li>
                                LILIT sử dụng công nghệ blockchain và DRM để bảo vệ tác phẩm khỏi
                                sao chép trái phép.
                            </li>
                            <li>
                                Tuy nhiên, chúng tôi không đảm bảo rằng các biện pháp này sẽ ngăn
                                chặn hoàn toàn việc sao chép trái phép.
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>5.2. Báo cáo vi phạm:</Text>
                        <p>
                            Nếu bạn tin rằng nội dung trên LILIT vi phạm bản quyền của bạn, vui lòng
                            gửi thông báo đến{" "}
                            <Link href="mailto:lilit.official@outlook.com">
                                lilit.official@outlook.com
                            </Link>{" "}
                            với các thông tin sau:
                        </p>
                        <ul>
                            <li>Mô tả về tác phẩm được bảo vệ bản quyền.</li>
                            <li>URL của nội dung bị cáo buộc vi phạm.</li>
                            <li>Thông tin liên hệ của bạn.</li>
                            <li>Tuyên bố rằng bạn tin tưởng việc sử dụng không được phép.</li>
                            <li>Chữ ký điện tử hoặc vật lý của chủ sở hữu bản quyền.</li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "6",
            title: "Quy tắc ứng xử",
            content: (
                <Paragraph>
                    Khi sử dụng LILIT, bạn đồng ý không:
                    <ul>
                        <li>
                            Đăng tải nội dung bất hợp pháp, khiêu dâm, đe dọa, phỉ báng, quấy rối
                            hoặc xúc phạm.
                        </li>
                        <li>Giả mạo danh tính của người khác.</li>
                        <li>Tải lên virus hoặc mã độc hại.</li>
                        <li>Cố gắng truy cập trái phép vào hệ thống hoặc dữ liệu của LILIT.</li>
                        <li>
                            Sử dụng LILIT cho mục đích thương mại mà không có sự đồng ý bằng văn bản
                            của chúng tôi.
                        </li>
                        <li>Thu thập thông tin người dùng mà không được phép.</li>
                    </ul>
                </Paragraph>
            ),
        },
        {
            key: "7",
            title: "Chính sách donate và hỗ trợ cộng đồng",
            content: (
                <>
                    <Paragraph>
                        <Text strong>7.1. Donate cho tác giả:</Text>
                        <ul>
                            <li>
                                LILIT cho phép độc giả donate trực tiếp cho tác giả thông qua nền
                                tảng.
                            </li>
                            <li>
                                100% số tiền donate sẽ được chuyển cho tác giả sau khi trừ các khoản
                                phí giao dịch (nếu có).
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>7.2. Donate cho LILIT:</Text>
                        <ul>
                            <li>
                                Người dùng có thể donate cho LILIT để hỗ trợ duy trì và phát triển
                                nền tảng.
                            </li>
                            <li>
                                Chúng tôi cam kết sử dụng 100% số tiền donate vào việc duy trì và
                                phát triển nền tảng, cũng như hỗ trợ cộng đồng tác giả.
                            </li>
                            <li>
                                LILIT sẽ công khai báo cáo tài chính hàng năm về việc sử dụng các
                                khoản donate.
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "8",
            title: "Kết nối với nhà xuất bản",
            content: (
                <>
                    <Paragraph>
                        <Text strong>8.1. Vai trò của LILIT:</Text>
                        <ul>
                            <li>
                                LILIT đóng vai trò trung gian kết nối tác giả với các nhà xuất bản
                                uy tín.
                            </li>
                            <li>
                                Chúng tôi không can thiệp vào quá trình đàm phán và ký kết hợp đồng
                                giữa tác giả và nhà xuất bản.
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>8.2. Trách nhiệm của các bên:</Text>
                        <ul>
                            <li>
                                Tác giả chịu trách nhiệm về chất lượng và tính nguyên bản của tác
                                phẩm.
                            </li>
                            <li>
                                Nhà xuất bản chịu trách nhiệm về các điều khoản hợp đồng và quá
                                trình xuất bản.
                            </li>
                            <li>
                                LILIT không chịu trách nhiệm pháp lý về bất kỳ tranh chấp nào phát
                                sinh giữa tác giả và nhà xuất bản.
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "9",
            title: "Giới hạn trách nhiệm",
            content: (
                <>
                    <Paragraph>
                        <Text strong>9.1. Miễn trừ bảo đảm:</Text>
                        <ul>
                            <li>
                                LILIT cung cấp dịch vụ &quot;nguyên trạng&quot; và &quot;như có
                                sẵn&quot; mà không có bất kỳ bảo đảm nào, dù rõ ràng hay ngầm định.
                            </li>
                            <li>
                                Chúng tôi không đảm bảo rằng dịch vụ sẽ không bị gián đoạn, không có
                                lỗi hoặc an toàn 100%.
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>9.2. Giới hạn trách nhiệm:</Text>
                        <ul>
                            <li>
                                Trong mọi trường hợp, LILIT và các cộng sự của chúng tôi sẽ không
                                chịu trách nhiệm đối với bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu
                                nhiên, đặc biệt, hậu quả hoặc trừng phạt nào phát sinh từ việc sử
                                dụng hoặc không thể sử dụng dịch vụ.
                            </li>
                            <li>
                                Trách nhiệm tối đa của chúng tôi đối với bất kỳ khiếu nại nào liên
                                quan đến dịch vụ sẽ không vượt quá 1.000.000 VND.
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "10",
            title: "Bồi thường",
            content: (
                <Paragraph>
                    Bạn đồng ý bồi thường, bảo vệ và giữ cho LILIT và các cộng sự của chúng tôi
                    không bị tổn hại từ bất kỳ khiếu nại, tổn thất, trách nhiệm, chi phí và phí tổn
                    nào (bao gồm cả phí luật sư) phát sinh từ:
                    <ul>
                        <li>Việc bạn sử dụng dịch vụ của chúng tôi.</li>
                        <li>Việc bạn vi phạm các Điều khoản này.</li>
                        <li>Nội dung bạn đăng tải trên LILIT.</li>
                        <li>Việc bạn vi phạm quyền của bất kỳ bên thứ ba nào.</li>
                    </ul>
                </Paragraph>
            ),
        },
        {
            key: "11",
            title: "Thay đổi điều khoản",
            content: (
                <>
                    <Paragraph>
                        <Text strong>11.1. Quyền thay đổi:</Text>
                        <ul>
                            <li>
                                LILIT có quyền thay đổi Điều khoản sử dụng này vào bất kỳ lúc nào.
                            </li>
                            <li>
                                Chúng tôi sẽ thông báo về những thay đổi quan trọng bằng cách đăng
                                thông báo trên trang web hoặc gửi email cho bạn.
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>11.2. Hiệu lực của thay đổi:</Text>
                        <ul>
                            <li>
                                Việc bạn tiếp tục sử dụng dịch vụ sau khi thay đổi có hiệu lực đồng
                                nghĩa với việc bạn chấp nhận các điều khoản mới.
                            </li>
                            <li>
                                Nếu bạn không đồng ý với các điều khoản mới, bạn phải ngừng sử dụng
                                dịch vụ của chúng tôi.
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "12",
            title: "Giải quyết tranh chấp",
            content: (
                <>
                    <Paragraph>
                        <Text strong>12.1. Luật áp dụng:</Text>
                        <p>
                            Các Điều khoản này sẽ được điều chỉnh và giải thích theo luật pháp Việt
                            Nam, không áp dụng các quy tắc về xung đột pháp luật.
                        </p>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>12.2. Giải quyết tranh chấp:</Text>
                        <ul>
                            <li>
                                Bất kỳ tranh chấp nào phát sinh từ hoặc liên quan đến các Điều khoản
                                này sẽ được giải quyết thông qua thương lượng thiện chí giữa các
                                bên.
                            </li>
                            <li>
                                Nếu không thể giải quyết thông qua thương lượng, tranh chấp sẽ được
                                đưa ra Tòa án có thẩm quyền tại Việt Nam để giải quyết.
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "13",
            title: "Bảo vệ dữ liệu cá nhân",
            content: (
                <>
                    <Paragraph>
                        <Text strong>13.1. Thu thập dữ liệu:</Text>
                        <ul>
                            <li>
                                LILIT thu thập các thông tin cá nhân sau:
                                <ul>
                                    <li>Thông tin cơ bản: họ tên, email, ngày sinh</li>
                                    <li>
                                        Thông tin đăng nhập: tên đăng nhập, mật khẩu đã được mã hóa
                                    </li>
                                    <li>
                                        Lịch sử tương tác trên nền tảng: các truyện đã đọc, bình
                                        luận, đánh giá
                                    </li>
                                    <li>
                                        Thông tin thiết bị truy cập: loại thiết bị, hệ điều hành,
                                        trình duyệt
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Mọi hoạt động thu thập dữ liệu đều phải được sự đồng ý rõ ràng của
                                người dùng.
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>13.2. Xử lý và bảo vệ dữ liệu:</Text>
                        <ul>
                            <li>Tuân thủ Nghị định 53/2022/NĐ-CP về bảo vệ dữ liệu cá nhân</li>
                            <li>
                                Áp dụng các biện pháp kỹ thuật và quản lý phù hợp để bảo vệ dữ liệu
                            </li>
                            <li>Không chia sẻ dữ liệu với bên thứ ba khi chưa được sự đồng ý</li>
                            <li>
                                Thời gian lưu trữ dữ liệu: tối đa 24 tháng kể từ lần tương tác cuối
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "14",
            title: "Quy định về độ tuổi và năng lực hành vi",
            content: (
                <Paragraph>
                    <Text strong>14.1. Độ tuổi và năng lực:</Text>
                    <ul>
                        <li>Người dùng phải từ 13 tuổi trở lên theo quy định của Bộ luật Dân sự</li>
                        <li>
                            Người dưới 13 tuổi phải có sự đồng ý và giám sát của người giám hộ hợp
                            pháp
                        </li>
                        <li>
                            Người dùng phải có đầy đủ năng lực hành vi dân sự theo quy định pháp
                            luật
                        </li>
                    </ul>
                </Paragraph>
            ),
        },
        {
            key: "15",
            title: "Quy định về thanh toán và thuế",
            content: (
                <>
                    <Paragraph>
                        <Text strong>15.1. Phương thức thanh toán:</Text>
                        <ul>
                            <li>
                                Các phương thức được chấp nhận: chuyển khoản ngân hàng, ví điện tử
                                được cấp phép tại Việt Nam
                            </li>
                            <li>
                                Mọi giao dịch phải tuân thủ quy định về thanh toán không dùng tiền
                                mặt
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>15.2. Nghĩa vụ thuế:</Text>
                        <ul>
                            <li>
                                Tác giả có trách nhiệm kê khai và nộp thuế thu nhập cá nhân từ các
                                khoản donate theo quy định
                            </li>
                            <li>
                                LILIT sẽ cung cấp báo cáo thu nhập hàng năm cho tác giả để phục vụ
                                việc kê khai thuế
                            </li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "16",
            title: "Nội dung bị cấm",
            content: (
                <Paragraph>
                    Nghiêm cấm các nội dung sau theo quy định pháp luật Việt Nam:
                    <ul>
                        <li>Nội dung chống phá Nhà nước, chia rẽ khối đại đoàn kết dân tộc</li>
                        <li>Nội dung kích động bạo lực, phân biệt đối xử</li>
                        <li>Nội dung vi phạm thuần phong mỹ tục</li>
                        <li>Nội dung xâm phạm quyền và lợi ích hợp pháp của tổ chức, cá nhân</li>
                        <li>Nội dung vi phạm sở hữu trí tuệ</li>
                    </ul>
                </Paragraph>
            ),
        },
        {
            key: "17",
            title: "Trường hợp bất khả kháng",
            content: (
                <>
                    <Paragraph>
                        <Text strong>17.1. Định nghĩa bất khả kháng:</Text>
                        <ul>
                            <li>Thiên tai, dịch bệnh</li>
                            <li>Chiến tranh, khủng bố</li>
                            <li>Quyết định của cơ quan nhà nước có thẩm quyền</li>
                            <li>Sự cố kỹ thuật ngoài tầm kiểm soát</li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <Text strong>17.2. Xử lý bất khả kháng:</Text>
                        <ul>
                            <li>Thông báo cho đối tác trong vòng 48 giờ</li>
                            <li>Có nghĩa vụ chứng minh sự kiện bất khả kháng</li>
                            <li>Tiếp tục thực hiện nghĩa vụ sau khi sự kiện kết thúc</li>
                        </ul>
                    </Paragraph>
                </>
            ),
        },
        {
            key: "18",
            title: "Liên hệ",
            content: (
                <Paragraph>
                    Nếu bạn có bất kỳ câu hỏi nào về Điều khoản sử dụng này, vui lòng liên hệ chúng
                    tôi qua:
                    <ul>
                        <li>
                            Email:{" "}
                            <Link href="mailto:lilit.official@outlook.com">
                                lilit.official@outlook.com
                            </Link>
                        </li>
                        <li>Địa chỉ: Thủ Đức, TP.HCM, Việt Nam</li>
                    </ul>
                </Paragraph>
            ),
        },
    ];

    return (
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
            </Header>

            <Content className="px-4 py-8 md:px-8">
                <Card className="mx-auto max-w-4xl">
                    <Title className="mb-8 text-center" level={1}>
                        Điều khoản sử dụng LILIT
                    </Title>

                    <Paragraph className="mb-6">
                        Chào mừng bạn đến với LILIT! Trước khi bắt đầu sử dụng dịch vụ của chúng
                        tôi, vui lòng đọc kỹ và đồng ý với các điều khoản sau đây. Bằng việc truy
                        cập và sử dụng nền tảng LILIT, bạn đồng ý tuân thủ và bị ràng buộc bởi những
                        điều khoản này.
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
                            Bằng việc sử dụng dịch vụ của LILIT, bạn xác nhận rằng bạn đã đọc, hiểu
                            và đồng ý với tất cả các điều khoản và điều kiện được nêu trong Điều
                            khoản sử dụng này.
                        </Text>
                    </Paragraph>
                </Card>
            </Content>

            <Footer className="bg-transparent text-center">
                <Paragraph>© 2025 LILIT - Nền tảng truyện miễn phí, không quảng cáo</Paragraph>
                <Flex align="center" gap={16} justify="center">
                    <Link href="/about">
                        <Paragraph className="md:text-md text-center text-xs hover:underline">
                            Về chúng tôi
                        </Paragraph>
                    </Link>
                    <Link href="/terms">
                        <Paragraph className="md:text-md text-center text-xs hover:underline">
                            Điều khoản sử dụng
                        </Paragraph>
                    </Link>
                    <Link href="/privacy">
                        <Paragraph className="md:text-md text-center text-xs hover:underline">
                            Chính sách bảo mật
                        </Paragraph>
                    </Link>
                    <Link href="/contact">
                        <Paragraph className="md:text-md text-center text-xs hover:underline">
                            Liên hệ
                        </Paragraph>
                    </Link>
                </Flex>
            </Footer>
            <BackTop visibilityHeight={0} />
            <AlertDisplay />
        </Layout>
    );
}
