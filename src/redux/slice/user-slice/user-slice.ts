import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { User } from "@/schemas/user/user-response/user-response";

interface UserState {
    currentUser: User | null;
    isLoading: boolean;
}

const initialState: UserState = {
    currentUser: null,
    isLoading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser(state, action: PayloadAction<User>) {
            state.currentUser = action.payload;
            state.isLoading = false;

            try {
                // store the user in the local storage
                localStorage.setItem("USER", JSON.stringify(action.payload));
            } catch (error) {
                console.log("Error storing user in the local storage", error);
            }
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        clearUser(state) {
            state.currentUser = null;
            state.isLoading = false;

            try {
                localStorage.removeItem("USER");
            } catch (error) {
                console.log("Error removing user from the local storage", error);
            }
        },
        updateUserField<K extends keyof User>(
            state: UserState,
            action: PayloadAction<{ field: K; value: User[K] }>,
        ) {
            if (state.currentUser) {
                state.currentUser[action.payload.field] = action.payload.value;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            (action): action is AnyAction => action.type === HYDRATE,
            (state, action) => {
                return {
                    ...state,
                    ...action.payload.user,
                };
            },
        );
    },
});

// export const initializeUserState = (): UserState => {
//     try {
//         const user = localStorage.getItem("USER");

//         if (user) {
//             return {
//                 currentUser: JSON.parse(user),
//                 isLoading: false,
//             };
//         }
//     } catch (error) {
//         console.log("Error initializing user state from local storage", error);
//     }

//     return initialState;
// };

export const { setCurrentUser, setLoading, clearUser, updateUserField } = userSlice.actions;
export default userSlice.reducer;
