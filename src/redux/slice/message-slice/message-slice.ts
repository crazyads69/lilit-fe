import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
    id: string;
    type: "success" | "error" | "info" | "warning";
    message: string;
    description?: string;
}

interface MessageState {
    messages: Message[];
}

const initialState: MessageState = {
    messages: [],
};

const MAX_MESSAGES = 5;

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Omit<Message, "id">>) => {
            const id = Date.now().toString();
            const newMessage = { ...action.payload, id };

            if (state.messages.length >= MAX_MESSAGES) {
                // Remove the oldest message
                state.messages.shift();
            }
            state.messages.push(newMessage);
        },
        removeMessage: (state, action: PayloadAction<string>) => {
            state.messages = state.messages.filter((msg) => msg.id !== action.payload);
        },
        clearAllMessages: (state) => {
            state.messages = [];
        },
    },
});

export const { addMessage, removeMessage, clearAllMessages } = messageSlice.actions;
export default messageSlice.reducer;
