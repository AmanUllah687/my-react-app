import { useState } from "react";
export default function TrafficLight() {
  const[walk, SetWalk] = useState(true);
  function handleClick() {
    SetWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }
  return (
    <>
    <button onClick={handleClick}>
      change to {walk ? 'stop' : walk}
    </button>
    <h1 style={{
      color: walk ? 'darkgreen' : 'darkred'
    }}>
      {walk ? 'walk' : 'stop'}
    </h1>
    </>
  );
}