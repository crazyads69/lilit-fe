import type { ThemeConfig } from "antd";

const lightTheme: ThemeConfig = {
    token: {
        // Font
        fontFamily:
            "var(--font-inter), Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        fontFamilyCode:
            "var(--font-fira-code), 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",

        // Colors
        colorPrimary: "#60a6f8",
        colorPrimaryBg: "#e6f0fe",
        colorPrimaryBgHover: "#cde1fd",
        colorPrimaryBorder: "#b4d2fc",
        colorPrimaryBorderHover: "#98c4fa",
        colorPrimaryHover: "#4497f7",
        colorPrimaryActive: "#2888f6",
        colorPrimaryTextHover: "#0c79f5",
        colorPrimaryText: "#0958d9",
        colorPrimaryTextActive: "#074fb3",

        colorSuccess: "#52c41a",
        colorWarning: "#faad14",
        colorError: "#e74c3c",
        colorInfo: "#1890ff",

        colorTextBase: "#171717",
        colorTextSecondary: "#666666",
        colorTextTertiary: "#999999",
        colorTextQuaternary: "#cccccc",

        colorBgBase: "#ffffff",
        colorBgContainer: "#f5f6f7",
        colorBgElevated: "#ffffff",
        colorBgLayout: "#f0f2f5",
        colorBgSpotlight: "rgba(0, 0, 0, 0.85)",
        colorBgMask: "rgba(0, 0, 0, 0.45)",

        colorLink: "#1677ff",
        colorLinkHover: "#69b1ff",
        colorLinkActive: "#0958d9",

        // Disabled states
        colorBgContainerDisabled: "#f5f5f5",
        colorTextDisabled: "rgba(0, 0, 0, 0.25)",

        // Border
        borderRadius: 8,
        borderRadiusLG: 16,
        borderRadiusSM: 4,
        colorBorder: "#d9d9d9",
        colorSplit: "#f0f0f0",

        // Font sizes
        fontSize: 14,
        fontSizeSM: 12,
        fontSizeLG: 16,
        fontSizeXL: 20,

        // Line heights
        lineHeight: 1.5715,
        lineHeightLG: 1.5,
        lineHeightSM: 1.66,

        // Spacing
        marginXS: 8,
        marginSM: 12,
        margin: 16,
        marginMD: 20,
        marginLG: 24,
        marginXL: 32,

        paddingXS: 8,
        paddingSM: 12,
        padding: 16,
        paddingMD: 20,
        paddingLG: 24,
        paddingXL: 32,

        // Control heights
        controlHeight: 32,
        controlHeightSM: 24,
        controlHeightLG: 40,

        // Z-index
        zIndexBase: 0,
        zIndexPopupBase: 1000,

        // Animation
        motionDurationSlow: "0.3s",
        motionDurationMid: "0.2s",
        motionDurationFast: "0.1s",

        // Opacity
        opacityImage: 1,

        // Size
        sizeUnit: 4,
        sizeStep: 4,
        sizePopupArrow: 16,

        // Screen breakpoints
        screenXS: 480,
        screenSM: 576,
        screenMD: 768,
        screenLG: 992,
        screenXL: 1200,
        screenXXL: 1600,

        // Box shadow
        boxShadow:
            "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
        boxShadowSecondary:
            "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
    },
    components: {
        Button: {
            algorithm: true,
            controlHeight: 36,
            controlHeightSM: 28,
            controlHeightLG: 44,
            paddingContentHorizontal: 16,
            paddingContentHorizontalSM: 12,
            paddingContentHorizontalLG: 20,
            onlyIconSize: 16,
            onlyIconSizeSM: 14,
            onlyIconSizeLG: 18,
            groupBorderColor: "#d9d9d9",
            borderRadius: 20,
        },
        Input: {
            controlHeight: 36,
            controlHeightSM: 28,
            controlHeightLG: 44,
            paddingInline: 12,
            paddingBlock: 4,
            paddingInlineSM: 8,
            paddingBlockSM: 1,
            paddingInlineLG: 16,
            paddingBlockLG: 6,
            activeBorderColor: "#4497f7",
            hoverBorderColor: "#60a6f8",
            addonBg: "#fafafa",
            borderRadius: 8,
        },
        Select: {
            controlHeight: 36,
            controlHeightSM: 28,
            controlHeightLG: 44,
            multipleItemHeight: 24,
            multipleItemHeightLG: 32,
            optionSelectedBg: "#e6f0fe",
            optionActiveBg: "#f5f5f5",
        },
        Checkbox: {
            borderRadius: 2,
            controlInteractiveSize: 16,
        },
        Radio: {
            borderRadius: 16,
            controlInteractiveSize: 16,
        },
        Card: {
            borderRadius: 8,
            paddingContentHorizontalLG: 24,
            paddingContentVerticalLG: 24,
            actionsBg: "#fafafa",
        },
        Modal: {
            borderRadius: 8,
            paddingContentHorizontalLG: 24,
            paddingContentVerticalLG: 24,
            headerBg: "#fff",
            titleColor: "#171717",
            titleFontSize: 16,
            contentBg: "#fff",
        },
        Table: {
            borderRadius: 8,
            headerBg: "#fafafa",
            headerColor: "#171717",
            headerSortActiveBg: "#e6f4ff",
            headerSortHoverBg: "#f0f0f0",
            colorBgContainer: "#fff",
            rowHoverBg: "#fafafa",
            rowSelectedBg: "#e6f0fe",
        },
        Tabs: {
            cardGutter: 2,
            cardPadding: "6px 16px",
            titleFontSize: 14,
            titleFontSizeLG: 16,
            titleFontSizeSM: 12,
            inkBarColor: "#7cb5f9",
            horizontalItemGutter: 32,
            horizontalItemPadding: "12px 0",
        },
        Tag: {
            defaultBg: "#fafafa",
            defaultColor: "#666666",
        },
        Message: {
            contentPadding: "10px 16px",
        },
        Tooltip: {
            colorBgContainer: "rgba(0, 0, 0, 0.75)",
            colorTextLightSolid: "#fff",
        },
        Notification: {
            paddingContentHorizontal: 24,
            paddingContentVertical: 16,
        },
        Menu: {
            itemBorderRadius: 4,
            subMenuItemBorderRadius: 4,
            itemSelectedBg: "#e6f0fe",
            itemSelectedColor: "#0c79f5",
            itemActiveBg: "#f5f5f5",
        },
        Dropdown: {
            controlPaddingHorizontal: 12,
            paddingBlock: 6,
        },
        Pagination: {
            itemSize: 32,
            itemSizeSM: 24,
            itemActiveBg: "#e6f0fe",
        },
        Steps: {
            customIconSize: 32,
            customIconTop: 0,
            iconSize: 32,
            iconTop: -0.5,
            titleLineHeight: 32,
            descriptionMaxWidth: 140,
        },
        Breadcrumb: {
            itemColor: "#666666",
            lastItemColor: "#171717",
            separatorColor: "#cccccc",
            separatorMargin: 8,
        },
        Slider: {
            railSize: 4,
            handleSize: 14,
            dotSize: 8,
        },
        TreeSelect: {
            nodeSelectedBg: "#e6f0fe",
        },
        Typography: {
            titleMarginTop: "1.2em",
            titleMarginBottom: "0.5em",
        },
        Layout: {
            headerBg: "#fff",
            headerHeight: 64,
            headerPadding: "0 50px",
            headerColor: "#171717",
            footerPadding: "24px 50px",
            footerBg: "#f0f2f5",
            siderBg: "#fff",
        },
    },
};

const darkTheme: ThemeConfig = {
    token: {
        // Font (same as light theme)
        fontFamily: lightTheme.token!.fontFamily,
        fontFamilyCode: lightTheme.token!.fontFamilyCode,

        // Dark theme colors
        colorPrimary: "#60a6f8",
        colorPrimaryBg: "#1a2733",
        colorPrimaryBgHover: "#263545",
        colorPrimaryBorder: "#344658",
        colorPrimaryBorderHover: "#435a70",
        colorPrimaryHover: "#7ab3f9",
        colorPrimaryActive: "#94c3fa",
        colorPrimaryTextHover: "#add2fb",
        colorPrimaryText: "#60a6f8",
        colorPrimaryTextActive: "#c7e0fc",

        // Status colors
        colorSuccess: "#49aa19",
        colorWarning: "#d89614",
        colorError: "#dc4446",
        colorInfo: "#4096ff",

        // Text colors
        colorTextBase: "#ffffff",
        colorTextSecondary: "rgba(255, 255, 255, 0.85)",
        colorTextTertiary: "rgba(255, 255, 255, 0.65)",
        colorTextQuaternary: "rgba(255, 255, 255, 0.45)",

        // Background colors
        colorBgBase: "#0a0a0a",
        colorBgContainer: "#141414",
        colorBgElevated: "#1f1f1f",
        colorBgLayout: "#000000",
        colorBgSpotlight: "rgba(255, 255, 255, 0.85)",
        colorBgMask: "rgba(0, 0, 0, 0.75)",

        // Disabled states
        colorBgContainerDisabled: "#262626",
        colorTextDisabled: "rgba(255, 255, 255, 0.30)",

        // Link colors
        colorLink: "#4497f7",
        colorLinkHover: "#7ab3f9",
        colorLinkActive: "#94c3fa",

        // Border
        borderRadius: 8,
        borderRadiusLG: 16,
        borderRadiusSM: 4,
        colorBorder: "#424242",
        colorSplit: "#303030",

        // Keep other tokens the same as light theme
        fontSize: lightTheme.token!.fontSize,
        fontSizeSM: lightTheme.token!.fontSizeSM,
        fontSizeLG: lightTheme.token!.fontSizeLG,
        fontSizeXL: lightTheme.token!.fontSizeXL,
        lineHeight: lightTheme.token!.lineHeight,
        lineHeightLG: lightTheme.token!.lineHeightLG,
        lineHeightSM: lightTheme.token!.lineHeightSM,

        // Spacing (same as light theme)
        marginXS: lightTheme.token!.marginXS,
        marginSM: lightTheme.token!.marginSM,
        margin: lightTheme.token!.margin,
        marginMD: lightTheme.token!.marginMD,
        marginLG: lightTheme.token!.marginLG,
        marginXL: lightTheme.token!.marginXL,

        // Box shadow
        boxShadow:
            "0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.2)",
        boxShadowSecondary:
            "0 6px 16px 0 rgba(0, 0, 0, 0.3), 0 3px 6px -4px rgba(0, 0, 0, 0.3), 0 9px 28px 8px rgba(0, 0, 0, 0.2)",
    },
    components: {
        Button: {
            ...lightTheme.components?.Button,
            colorBgContainer: "#141414",
            colorBgContainerDisabled: "#262626",
            colorBorder: "#424242",
            colorText: "rgba(255, 255, 255, 0.85)",
            algorithm: true,
            primaryShadow: "none",
        },
        Input: {
            ...lightTheme.components?.Input,
            colorBgContainer: "#141414",
            colorBorder: "#424242",
            addonBg: "#1f1f1f",
            colorTextDisabled: "rgba(255, 255, 255, 0.30)",
            algorithm: true,
        },
        Select: {
            ...lightTheme.components?.Select,
            colorBgContainer: "#141414",
            colorBorder: "#424242",
            optionSelectedBg: "#1a2733",
            optionActiveBg: "#263545",
            algorithm: true,
        },
        Card: {
            ...lightTheme.components?.Card,
            colorBgContainer: "#141414",
            colorBorderSecondary: "#424242",
            algorithm: true,
        },
        Modal: {
            ...lightTheme.components?.Modal,
            colorBgElevated: "#1f1f1f",
            colorText: "rgba(255, 255, 255, 0.85)",
            algorithm: true,
        },
        Table: {
            ...lightTheme.components?.Table,
            colorBgContainer: "#141414",
            headerBg: "#1f1f1f",
            headerColor: "rgba(255, 255, 255, 0.85)",
            rowHoverBg: "#1a2733",
            colorBorder: "#424242",
            algorithm: true,
        },
        Tabs: {
            ...lightTheme.components?.Tabs,
            cardBg: "#141414",
            cardGutter: 2,
            titleFontSize: 14,
            inkBarColor: "#60a6f8",
            algorithm: true,
        },
        Tag: {
            ...lightTheme.components?.Tag,
            defaultBg: "#262626",
            defaultColor: "rgba(255, 255, 255, 0.85)",
            algorithm: true,
        },
        Message: {
            ...lightTheme.components?.Message,
            contentBg: "#1f1f1f",
            algorithm: true,
        },
        Tooltip: {
            ...lightTheme.components?.Tooltip,
            colorBgSpotlight: "rgba(255, 255, 255, 0.75)",
            colorTextLightSolid: "#000",
            algorithm: true,
        },
        Notification: {
            ...lightTheme.components?.Notification,
            colorBgElevated: "#1f1f1f",
            colorText: "rgba(255, 255, 255, 0.85)",
            algorithm: true,
        },
        Menu: {
            ...lightTheme.components?.Menu,
            itemBg: "#141414",
            itemSelectedBg: "#1a2733",
            itemSelectedColor: "#60a6f8",
            itemActiveBg: "#263545",
            algorithm: true,
        },
        Dropdown: {
            ...lightTheme.components?.Dropdown,
            controlItemBgHover: "#263545",
            controlItemBgActive: "#1a2733",
            algorithm: true,
        },
        Pagination: {
            ...lightTheme.components?.Pagination,
            itemBg: "#141414",
            itemActiveBg: "#1a2733",
            itemLinkBg: "#141414",
            algorithm: true,
        },
        Steps: {
            ...lightTheme.components?.Steps,
            colorText: "rgba(255, 255, 255, 0.85)",
            colorTextDescription: "rgba(255, 255, 255, 0.45)",
            algorithm: true,
        },
        Breadcrumb: {
            ...lightTheme.components?.Breadcrumb,
            itemColor: "rgba(255, 255, 255, 0.45)",
            lastItemColor: "rgba(255, 255, 255, 0.85)",
            separatorColor: "rgba(255, 255, 255, 0.45)",
            algorithm: true,
        },
        Slider: {
            ...lightTheme.components?.Slider,
            railBg: "#262626",
            trackBg: "#60a6f8",
            handleColor: "#60a6f8",
            algorithm: true,
        },
        TreeSelect: {
            ...lightTheme.components?.TreeSelect,
            nodeSelectedBg: "#1a2733",
            algorithm: true,
        },
        Typography: {
            ...lightTheme.components?.Typography,
            colorText: "rgba(255, 255, 255, 0.85)",
            colorTextSecondary: "rgba(255, 255, 255, 0.45)",
            algorithm: true,
        },
        Layout: {
            ...lightTheme.components?.Layout,
            headerBg: "#141414",
            headerColor: "rgba(255, 255, 255, 0.85)",
            footerBg: "#141414",
            siderBg: "#141414",
            algorithm: true,
        },
        Checkbox: {
            ...lightTheme.components?.Checkbox,
            colorBgContainer: "#141414",
            colorBorder: "#424242",
            algorithm: true,
        },
        Radio: {
            ...lightTheme.components?.Radio,
            colorBgContainer: "#141414",
            colorBorder: "#424242",
            algorithm: true,
        },
    },
};

// Export a function to get theme based on mode
export const getTheme = (mode: "light" | "dark"): ThemeConfig => {
    return mode === "light" ? lightTheme : darkTheme;
};

export default getTheme;
