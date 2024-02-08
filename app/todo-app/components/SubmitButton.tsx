'use client'
import React, { useEffect } from 'react'
import { useFormStatus } from 'react-dom';

const SubmitButtonComponent = () => {
    const { pending } = useFormStatus();

    useEffect(() => {
        if(!pending) {
            //  RESET INPUT AND REFOCUS
            (document.getElementById('todo-input') as HTMLInputElement).value = '';
            (document.getElementById('todo-input') as HTMLInputElement).focus();
        }
    }, [pending])

    return (
        <button
            disabled={pending}
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2'
        >Add</button>
    )
}

export default SubmitButtonComponent