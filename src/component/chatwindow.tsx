import { chatStore } from "../store/chatstore";
import MessageInput from "./messageinput";

export default function ChatWindow() {
    if (!chatStore.currentChat) {
        return <div className="chat-empty">Chọn người hoặc nhóm để chat</div>;
    }

    return (
        <div className="chat-window">
            <div className="chat-header">
                {chatStore.currentChat.name}
            </div>

            <div className="chat-body">
                {chatStore.messages.map((m, i) => (
                    <div key={i} className="message">
                        {m.user}: {m.mes}
                    </div>
                ))}
            </div>

            <MessageInput />
        </div>
    );
}
