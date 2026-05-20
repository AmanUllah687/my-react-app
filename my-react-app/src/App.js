import { useState, useRef } from "react";

export default function Counter() {
    const[show, setshow] = useState(true);
    const ref = useRef(null);
    return(
        <div>
            <button onClick={() =>
                setshow(!show)
            }>
                Toggle with setState
            </button>
            <button onClick={() => {
                ref.current.remove();
                }} >
                     Remove from the DOM
                </button>
                { show && <p ref={ref}>Hello World</p>}
        </div>
    );
}