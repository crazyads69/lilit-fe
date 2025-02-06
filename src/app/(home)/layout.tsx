import React from "react";

import ReduxProvider from "@/redux/provider/provider";
import MaterialThemeProvider from "@/theme/theme-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            <MaterialThemeProvider>{children}</MaterialThemeProvider>
        </ReduxProvider>
    );
}
