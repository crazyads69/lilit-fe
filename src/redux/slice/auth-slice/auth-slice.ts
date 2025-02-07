import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "@/schemas/auth/auth-response/auth-response";

interface AuthState {
    user: User | null;
    token: string | null;
    refreshToken: string | null;
    deviceId: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
    refreshToken: null,
    deviceId: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<AuthState>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
        },
        setDeviceId(state, action: PayloadAction<string>) {
            state.deviceId = action.payload;
        },
        logOut(state) {
            state.user = null;
            state.token = null;
            state.refreshToken = null;
            state.deviceId = null;
        },
    },
});

export const { setCredentials, setDeviceId, logOut } = authSlice.actions;
export default authSlice.reducer;
