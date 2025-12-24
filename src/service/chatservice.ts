import { socket } from "../api/socket";

interface OnChatPayload {
    event: string;
    data?: any;
}

class ChatService {

    private sendOnChat(payload: OnChatPayload) {
        socket.send(
            JSON.stringify({
                action: "onchat",
                data: payload
            })
        );
    }


    getPeopleMessages(user: string, page = 1) {
        this.sendOnChat({
            event: "GET_PEOPLE_CHAT_MES",
            data: {
                name: user,
                page
            }
        });
    }

    sendChatToPeople(to: string, mes: string) {
        this.sendOnChat({
            event: "SEND_CHAT",
            data: {
                type: "people",
                to,
                mes
            }
        });
    }

    sendChatToRoom(room: string, mes: string) {
        this.sendOnChat({
            event: "SEND_CHAT",
            data: {
                type: "room",
                to: room,
                mes
            }
        });
    }

    checkUserOnline(user: string) {
        this.sendOnChat({
            event: "CHECK_USER_ONLINE",
            data: { user }
        });
    }

    checkUserExist(user: string) {
        this.sendOnChat({
            event: "CHECK_USER_EXIST",
            data: { user }
        });
    }

    getUserList() {
        this.sendOnChat({
            event: "GET_USER_LIST"
        });
    }
}

export const chatService = new ChatService();
