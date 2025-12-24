class ChatStore {
    messages: any[] = [];
    rooms: any[] = [];
    users: string[] = [];
    loginCode = "";

    addMessage(mes: any) {
        this.messages.push(mes);
    }

    setMessages(list: any[]) {
        this.messages = list;
    }

    addRoom(room: any) {
        this.rooms.push(room);
    }

    setLoginCode(code: string) {
        this.loginCode = code;
    }
    currentChat: {
        type: "people" | "room";
        name: string;
    } | null = null;

    setCurrentChat(type: "people" | "room", name: string) {
        this.currentChat = { type, name };
        this.messages = []; // clear khi đổi chat
    }

    setUsers(users: string[]) {
        this.users = users;
    }
}

export const chatStore = new ChatStore();
