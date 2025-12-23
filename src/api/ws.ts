import { DEV } from "solid-js";

const _ws = new WebSocket(DEV ? "wss://api.echoir.chat/ws" : "ws://localhost:6813/ws");

const wsReadyPromise = new Promise<void>(res => _ws.onopen = () => res());

export const ws = (await wsReadyPromise, _ws);

export enum WSEventType {
    DMReceived,
    GuildChannelCreated,
    BeginReceivingGuildMessages,
    GuildMessageSent,
    StopReceivingGuildMessages,
}

export type WSEventPayload = {
    [WSEventType.DMReceived]: {},
    [WSEventType.GuildChannelCreated]: {},
    [WSEventType.BeginReceivingGuildMessages]: {},
    [WSEventType.GuildMessageSent]: {},
    [WSEventType.StopReceivingGuildMessages]: {},
}

export type WSEvent<T extends WSEventType> = {
    type: T,
    payload: WSEventPayload[T],
}
export const on = <T extends WSEventType>(event: T, listener: (ev: WSEvent<T>) => void) => {
    let internalListener = (ev: MessageEvent<string>) => {
        let message: WSEvent<T> = JSON.parse(ev.data);
        if(message.type === event) listener(message);
    };
    ws.addEventListener("message", internalListener);
    return () => ws.removeEventListener("message", internalListener);
}