"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import viVN from "antd/lib/locale/vi_VN";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import getTheme from "../theme";

export default function AntdThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = (theme === "system" ? resolvedTheme : theme) as "light" | "dark";

    return (
        <ConfigProvider locale={viVN} theme={getTheme(currentTheme)}>
            <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
    );
}
