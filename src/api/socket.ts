class SocketAPI {
    private socket!: WebSocket;

    connect() {
        this.socket = new WebSocket("wss://chat.longapp.site/chat/chat");
    }

    send(event: string, data?: any) {
        this.socket.send(
            JSON.stringify({
                action: "onchat",
                data: { event, data }
            })
        );
    }

    get raw() {
        return this.socket;
    }
}

export const socket = new SocketAPI();
