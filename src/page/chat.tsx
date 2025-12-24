import { useEffect } from "react";
import { socketClient } from "../socket/socketclient";
import { subscribe } from "../socket/subscribe";
import Sidebar from "../component/sidebar";
import ChatWindow from "../component/chatwindow";

export default function Chat() {
    useEffect(() => {
        socketClient.connect();
        subscribe();
    }, []);

    return (
        <div className="chat-layout">
            <Sidebar />
            <ChatWindow />
        </div>
    );
}
