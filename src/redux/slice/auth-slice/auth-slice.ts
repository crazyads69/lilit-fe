import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { AuthData, RefreshToken } from "@/schemas/auth/auth-response/auth-response";

interface AuthState {
    user: AuthData | null;
    accessToken: string | null;
    refreshToken: string | null;
    deviceId: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    deviceId: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<AuthState>) {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.deviceId = action.payload.deviceId;
            try {
                // store the credentials in the local storage
                localStorage.setItem("AUTH_USER", JSON.stringify(action.payload.user));
                localStorage.setItem("ACCESS_TOKEN", action.payload.accessToken!);
                localStorage.setItem("REFRESH_TOKEN", action.payload.refreshToken!);
                localStorage.setItem("DEVICE_ID", action.payload.deviceId!);
            } catch (error) {
                console.log("Error storing credentials in the local storage", error);
            }
        },
        setDeviceId(state, action: PayloadAction<string>) {
            state.deviceId = action.payload;
            try {
                // store the device id in the local storage
                localStorage.setItem("DEVICE_ID", action.payload);
            } catch (error) {
                console.log("Error storing device id in the local storage", error);
            }
        },
        setNewToken(state, action: PayloadAction<RefreshToken>) {
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;

            try {
                // store the new token in the local storage
                localStorage.setItem("ACCESS_TOKEN", action.payload.access_token);
                localStorage.setItem("REFRESH_TOKEN", action.payload.refresh_token);
            } catch (error) {
                console.log("Error storing new token in the local storage", error);
            }
        },
        logOut(state) {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.deviceId = null;

            // Clear the local storage
            try {
                localStorage.removeItem("AUTH_USER");
                localStorage.removeItem("ACCESS_TOKEN");
                localStorage.removeItem("REFRESH_TOKEN");
                localStorage.removeItem("DEVICE_ID");
            } catch (error) {
                console.log("Failed to clear auth state from localStorage:", error);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            (action): action is AnyAction => action.type === HYDRATE,
            (state, action) => {
                return {
                    ...state,
                    ...action.payload.auth,
                };
            },
        );
    },
});

export const initializeAuthState = (): AuthState => {
    if (typeof window === "undefined") {
        return initialState;
    }

    try {
        return {
            user: JSON.parse(localStorage.getItem("AUTH_USER") || "null"),
            accessToken: localStorage.getItem("ACCESS_TOKEN"),
            refreshToken: localStorage.getItem("REFRESH_TOKEN"),
            deviceId: localStorage.getItem("DEVICE_ID"),
        };
    } catch (error) {
        console.log("Error initializing auth state from the local storage", error);

        return initialState;
    }
};

export const { setCredentials, setDeviceId, setNewToken, logOut } = authSlice.actions;
export default authSlice.reducer;
