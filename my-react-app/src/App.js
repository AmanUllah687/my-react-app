import { useState} from "react";
import ChatRoom from './ChatRoom.js';
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from './chat.js';
export default function App() {
    const[roodId, setRoomId] = useState('general');
    const[isEncripted , setIsEncripted] = useState(false);
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
        <label>
            <input type="checkbox"
            checked={isEncripted}
            onChange={e => setIsEncripted(e.target.checked)}/>
            Enable encryption
        </label>
        <hr/>
        <ChatRoom roomId={roodId}
        createConnection={isEncripted ? createEncryptedConnection : createUnencryptedConnection}
        />
        </>
    );
}