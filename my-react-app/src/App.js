import { useState } from "react";

export default function Form () {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const fullName = firstName + '' +  lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }
    function hanleLastNameChange(e) {
        setLastName(e.target.value);
    }
    return (
        <>
        <h2>Lets Check You in!</h2>
        <label>
            First Name: {''}
            <input
            value={firstName}
            onChange={handleFirstNameChange}
            />
        </label>
         <label>
            Last Name: {''}
            <input
            value={lastName}
            onChange={hanleLastNameChange}
            />
        </label>
        <p>
            Your Ticket Will be issued to: <b>{fullName}</b>
        </p>
        </>
    );
}