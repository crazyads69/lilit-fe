import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function SmallLoading() {
    <Spin indicator={<LoadingOutlined spin />} size="large" tip="Đang tải dữ liệu...">
        <div />
    </Spin>;
}
