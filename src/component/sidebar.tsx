import { chatStore } from "../store/chatstore";
import { chatService } from "../service/chatservice";
import { useState } from "react";

export default function Sidebar() {
    const [, forceRender] = useState(0);

    const selectUser = (user: string) => {
        chatStore.setCurrentChat("people", user);
        chatService.send({
            action: "onchat",
            data: {
                event: "GET_PEOPLE_CHAT_MES",
                data: { name: user, page: 1 },
            },
        });
        forceRender(x => x + 1);
    };

    const selectRoom = (room: string) => {
        chatService.joinRoom(room);
        chatService.send({
            action: "onchat",
            data: {
                event: "GET_ROOM_CHAT_MES",
                data: { name: room, page: 1 },
            },
        });
        forceRender(x => x + 1);
    };

    return (
        <div className="sidebar">
            <h3>People</h3>
            {chatStore.users.map(u => (
                <div key={u} onClick={() => selectUser(u)} className="item">
                    {u}
                </div>
            ))}

            <h3>Groups</h3>
            {chatStore.rooms.map(r => (
                <div key={r} onClick={() => selectRoom(r)} className="item">
                    {r}
                </div>
            ))}
        </div>
    );
}
