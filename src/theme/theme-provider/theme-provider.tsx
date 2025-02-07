"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import viVN from "antd/lib/locale/vi_VN";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setTheme } from "@/redux/slice/theme-slice/theme-slice";
import { RootState } from "@/redux/store/store";
import { getInitialTheme } from "@/utils/theme-utils/theme-utils";

import getTheme from "../theme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const themeMode = useSelector((state: RootState) => state.theme.mode);
    const dispatch = useDispatch();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = getInitialTheme();

        dispatch(setTheme(savedTheme));
    }, [dispatch]);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.toggle("dark", themeMode === "dark");
        }
    }, [themeMode, mounted]);

    return (
        <ConfigProvider locale={viVN} theme={getTheme(themeMode)}>
            <div
                className={`${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
            >
                <AntdRegistry>{children}</AntdRegistry>
            </div>
        </ConfigProvider>
    );
}
