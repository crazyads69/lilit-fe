import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        // Add reducers here
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
