import { chatContextRef } from "../../context/chatcontext";

export const onMessage = (event: MessageEvent) => {
    const res = JSON.parse(event.data);

    switch (res.event) {
        case "GET_PEOPLE_CHAT_MES":
        case "GET_ROOM_CHAT_MES":
            chatContextRef.setMessages(res.data);
            break;

        case "SEND_CHAT":
            chatContextRef.addMessage(res.data);
            break;

        case "GET_USER_LIST":
            chatContextRef.setUserList(res.data);
            break;

        case "CHECK_USER_ONLINE":
            chatContextRef.setUserOnline(res.data);
            break;

        case "CHECK_USER_EXIST":
            chatContextRef.setUserExist(res.data);
            break;

        default:
            console.log("Unhandled event:", res);
    }
};
