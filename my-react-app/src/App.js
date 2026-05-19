import { useRef, useImperativeHandle } from "react";
 function MyInput({ref}) {
    const realInputRef = useRef(null);
    useImperativeHandle(ref, () =>({
        focus() {
            realInputRef.current.focus();
        }
    }))
    return <input ref={realInputRef} />
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