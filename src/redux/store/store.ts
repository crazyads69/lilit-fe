import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import authReducer, { initializeAuthState } from "@/redux/slice/auth-slice/auth-slice";
import messageReducer from "@/redux/slice/message-slice/message-slice";
import userReducer from "@/redux/slice/user-slice/user-slice";
import { baseApi } from "@/services/base-api/base-api";

const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
        user: userReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    preloadedState: {
        auth: initializeAuthState(),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
