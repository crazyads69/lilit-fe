import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import authReducer, { initializeAuthState } from "@/redux/slice/auth-slice/auth-slice";
import messageReducer from "@/redux/slice/message-slice/message-slice";
import { api } from "@/services/api/api";

const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
        [api.reducerPath]: api.reducer,
    },
    preloadedState: {
        auth: initializeAuthState(),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
