import React from "react";

import MaterialThemeProvider from "@/theme/theme-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <MaterialThemeProvider>{children}</MaterialThemeProvider>;
}
