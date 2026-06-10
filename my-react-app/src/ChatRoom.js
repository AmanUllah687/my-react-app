import { useState, useEffect } from "react";

export default function ChatRoom({RoomId, createConnection}) {
    useEffect(() => {
        const connection = createConnection(RoomId);
        connection.connect();
        return () => connection.disconnect();
    }, [RoomId, createConnection]);
    return <h1>Welcome to the {roomId} room!</h1>;
}