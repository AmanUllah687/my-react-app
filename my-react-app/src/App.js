import { useRef } from "react";
 function MyInput({ref}) {
    return <input ref={ref} />
 }
 export default function Form() {
    const inputRef = useRef(null);
    function handleClick() {
        inputRef.current.focus();
    }
    return (
        <>
        <MyInput ref={inputRef} />
        <button on onClick={handleClick}>Focus the input:</button>
            </>
    )
  }