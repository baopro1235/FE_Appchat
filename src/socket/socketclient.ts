import { socket } from "../api/socket";
import { onOpen } from "./handlers/onOpen";
import { onClose } from "./handlers/onClose";
import { onError } from "./handlers/onError";
import { onMessage } from "./handlers/onMessage";

export const initSocket = (): void => {
    socket.raw.onopen = onOpen;
    socket.raw.onclose = onClose;
    socket.raw.onerror = onError;
    socket.raw.onmessage = onMessage;
};
