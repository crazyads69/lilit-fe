import { getInitialTheme } from "@/utils/theme-utils/theme-utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    mode: "light" | "dark";
}

const initialState: ThemeState = {
    mode: getInitialTheme(),
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<"light" | "dark">) => {
            state.mode = action.payload;
            if (typeof window !== "undefined") {
                localStorage.setItem("theme", action.payload);
            }
        },
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            if (typeof window !== "undefined") {
                localStorage.setItem("theme", state.mode);
            }
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
