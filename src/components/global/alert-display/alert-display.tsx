import { Alert } from "antd";
import React from "react";

import { useAppDispatch } from "@/hooks/use-redux/use-redux";
import { useAppSelector } from "@/hooks/use-redux/use-redux";
import { removeMessage } from "@/redux/slice/message-slice/message-slice";
import { RootState } from "@/redux/store/store";

export function AlertDisplay() {
    const messages = useAppSelector((state: RootState) => state.message.messages);
    const dispatch = useAppDispatch();

    return (
        <div className="fixed right-0 top-0 z-50 space-y-2 p-4">
            {messages.map((msg) => (
                <Alert
                    key={msg.id}
                    closable
                    showIcon
                    description={msg.description}
                    message={msg.message}
                    style={{ marginBottom: 16, maxWidth: 400 }}
                    type={msg.type}
                    onClose={() => dispatch(removeMessage(msg.id))}
                />
            ))}
        </div>
    );
}
