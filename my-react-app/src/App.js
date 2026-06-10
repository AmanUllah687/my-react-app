import { useState , useEffect} from "react";
import { createConnection} from "./Chat.js";

 function ChatRoom({roomId}) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();

    }, [roomId, serverUrl]);
    return (
        <>
        <label>
            Server URL:{''}
            <input 
             value={serverUrl}
             onChange={e => setServerUrl(e.target.value)}/>
        </label>
        <h1>Welcome to the {roomId} Room!</h1>
        </>
    );
}
export default function App() {
    const[roodId, setRoomId] = useState('general');
    return (
        <>
        <label>
            choose the ChatRoom:{''}
            <select 
            value={roodId}
            onChange={e => setRoomId(e.target.value)}>
                <option value="general">general</option>
                <option value="travel">travel</option>
                <option value="music">music</option>
            </select>
        </label>
        <hr/>
        <ChatRoom roomId={roodId}/>
        </>
    );
}