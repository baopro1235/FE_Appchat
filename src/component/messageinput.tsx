import { useState } from "react";
import { useChat } from "../context/chatcontext";

export default function MessageInput() {
    const [text, setText] = useState("");
    const { sendChat } = useChat();

    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => sendChat("people", "ti", text)}>
                Send
            </button>
        </>
    );
}
