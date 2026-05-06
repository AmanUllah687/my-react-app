import { useState } from "react";
 export default function Form() {
    const[person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com' 
    })

 function handlefirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
 }
 function handlelastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
 }
 function handleEmailChange(e) {
   setPerson({
      ...person,
      email: e.target.value
    });
 }
 return(
    <>
    <label>
        First Name:
        <input value={person.firstName} onChange={handlefirstNameChange} />
    </label>
    <label>
        Last Name:
        <input value={person.lastName} onChange={handlelastNameChange} />
    </label>
    <label>
        E-mail:
        <input value={person.email} onChange={handleEmailChange} />
    </label>
    <p>
        {person.firstName}{''}
        {person.lastName}{''}
        {person.email}
    </p>
    </>
 )
}