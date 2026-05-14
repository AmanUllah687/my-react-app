import { useState } from "react";

export default function Form() {
    const[answer, setAnswer] = useState('');
    const[error, setError] = useState(null);
    const[status, setstatus] = useState('typing');

    if(status === 'success') {
        return <h1>That's Right!</h1>
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setstatus('submitting');
        try{
            await submitForm(answer);
            setstatus('success');  
        } catch (err) {
            setstatus('typing');
            setError(err);
        }
    }
    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }
    return (
        <>
        <h2>City Quiz</h2>
        <p>In Which city there is a billboard that turn Water into Electricity?</p>
        <form onSubmit={handleSubmit}>
            <textarea
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === 'submitting'}
             />
            <br/>
            <button disabled= {answer.length === 0 || answer === 'submitting'}>
                Submit
                </button>
                {error !== null && 
                <p className="Error">
                    {error.message}
                    </p>
                    }
        </form>
        </>
    );
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if(shouldError) {
            reject(new Error('Good Gues But Wrong Answer. Try Again!'));
        } else {
            resolve();
        }
    }, 1500)
    })
}