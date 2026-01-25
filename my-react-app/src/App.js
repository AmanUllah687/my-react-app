import { useState } from 'react';
 export default function Form () {
  const[isSent, setIsSent] = useState(false);
  const[message, setMessage] = useState('Hi!');
  if (isSent) {
    return <h1> Your Message is  on its way.</h1>
  }

  return (
  <form onSubmit={(e) => {
    e.preventDefault();
    setIsSent(true);
    setMessage(message);
  }}>
    <textarea
    placeholder='message'
    value={message}
    onChange={e => setMessage(e.target.value)}
    />
    <button type="submit">Send</button>

  </form>
  );
 }
 function sendMessage(message) {
  //...
 }
