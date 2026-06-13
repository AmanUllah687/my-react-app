import { useFormInput } from "./useFormInput";

export default function Form() {
    const firstNameProps = useFormInput('Marry');
    const lastNameProps = useFormInput('poppins');
    return (
        <>
        <label>
            First Name :
            <input {...firstNameProps}/>
        </label>
        <label>
            Last Name : 
            <input {...lastNameProps} />
        </label>
        <p><b>Good Morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
        </>
    );
}
 