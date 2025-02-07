import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "../slice/theme-slice/theme-slice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
