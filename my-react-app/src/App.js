import { useState , useEffect} from "react";
import { createConnection} from "./Chat.js";

const serverUrl = 'https://localhost:1234';
 function ChatRoom({roomId}) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();

    }, [roomId]);
    return <h1>Welcome to the {roomId} Room!</h1>
}
export default function App() {
    const[roodId, setRoomId] = useState('general');
    const[show, setShow] = useState(false);
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
        <button onClick={() => setShow(!show)}>
            {show ? 'Close chat' : 'Open chat' }
        </button>
        {show && <hr/>}
        {show && <ChatRoom roomId={roodId} />}
        </>
    );
}