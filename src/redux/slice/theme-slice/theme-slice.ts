import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getInitialTheme, saveTheme } from "@/utils/theme-utils/theme-utils";

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
            saveTheme(action.payload);
        },
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            saveTheme(state.mode);
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
