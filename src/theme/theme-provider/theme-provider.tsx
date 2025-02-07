"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import viVN from "antd/lib/locale/vi_VN";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/redux/store/store";

import getTheme from "../theme";

// export default function ThemeProvider({ children }: { children: React.ReactNode }) {
//     const themeMode = useSelector((state: RootState) => state.theme.mode);
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     // if (!mounted) {
//     //     return (
//     //         <ConfigProvider locale={viVN} theme={getTheme(themeMode)}>
//     //             <div>
//     //                 <AntdRegistry>{children}</AntdRegistry>
//     //             </div>
//     //         </ConfigProvider>
//     //     );
//     // }

//     if (!mounted) {
//         return null; // or return a loader component
//     }

//     return (
//         <ConfigProvider locale={viVN} theme={getTheme(themeMode)}>
//             <div className={themeMode === "dark" ? "dark" : ""}>
//                 <AntdRegistry>{children}</AntdRegistry>
//             </div>
//         </ConfigProvider>
//     );
// }

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const themeMode = useSelector((state: RootState) => state.theme.mode);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        document.documentElement.classList.toggle("dark", themeMode === "dark");
    }, [themeMode]);

    if (!mounted) {
        return null;
    }

    return (
        <ConfigProvider locale={viVN} theme={getTheme(themeMode)}>
            <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
    );
}
