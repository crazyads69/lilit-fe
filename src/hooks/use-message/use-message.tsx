import { useCallback } from "react";

import { useAppDispatch } from "@/hooks/use-redux/use-redux";
import { addMessage, removeMessage, Message } from "@/redux/slice/message-slice/message-slice";

export const useMessage = () => {
    const dispatch = useAppDispatch();

    const showMessage = useCallback(
        (type: Message["type"], message: string, description?: string, duration = 5000) => {
            const id = Date.now().toString();

            dispatch(addMessage({ type, message, description }));
            setTimeout(() => {
                dispatch(removeMessage(id));
            }, duration);
        },
        [dispatch],
    );

    return { showMessage };
};
