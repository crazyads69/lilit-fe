"use client";

import { Fira_Code, Inter } from "next/font/google";
import React from "react";

import "./globals.css";

import MaterialThemeProvider from "@/theme/theme-provider";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const firaCode = Fira_Code({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-fira-code",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <MaterialThemeProvider>
                <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
                    {children}
                </body>
            </MaterialThemeProvider>
        </html>
    );
}
