import { createContext, useContext, useEffect, useState } from "react";
import { sendSocket } from "../api/socket";
import { chatStore } from "../socket/subscribe";

export const ChatContext = createContext<any>(null);
export let chatContextRef: any = null;

export const ChatProvider = ({ children }: any) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [users, setUsers] = useState<any[]>([]);
    const [online, setOnline] = useState<any>({});

    useEffect(() => {
        chatStore.addMessage = (m) => setMessages(prev => [...prev, m]);
        chatStore.setMessages = setMessages;
        chatStore.setUserList = setUsers;
        chatStore.setUserOnline = (d) => setOnline(d);
        chatStore.setUserExist = (d) => console.log("exist:", d);
    }, []);

    const getPeopleChat = (name: string) => {
        sendSocket("GET_PEOPLE_CHAT_MES", { name, page: 1 });
    };

    const sendChat = (type: "room" | "people", to: string, mes: string) => {
        sendSocket("SEND_CHAT", { type, to, mes });
    };

    const checkUserOnline = (user: string) => {
        sendSocket("CHECK_USER_ONLINE", { user });
    };

    const checkUserExist = (user: string) => {
        sendSocket("CHECK_USER_EXIST", { user });
    };

    const getUserList = () => {
        sendSocket("GET_USER_LIST");
    };

    chatContextRef = {
        setMessages,
        addMessage: (m: any) => setMessages(prev => [...prev, m]),
        setUserList: setUsers,
        setUserOnline: setOnline
    };

    return (
        <ChatContext.Provider value={{
            messages,
            users,
            online,
            getPeopleChat,
            sendChat,
            checkUserOnline,
            checkUserExist,
            getUserList
        }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
