/**
 * THIS CODE WAS ADDED TO DEMONSTRATE PARALLEL ROUTING
 * BECAUSE SIGNIN COMPONENT CAN USED BY OTHER COMPONENTS
 * WE DID NOT USE IT IN THIS CASE
 */

'use client'
import React, { useState } from 'react'

const SignInComponent = () => {

    const [ loading, setLoading ] = useState<boolean>(false);

    const handleSignIn = () => {

    }

    const handleSignUp = () => {
        
    }

    return (
        <div className="flex justify-center">
        <form 
            onSubmit={handleSignIn}
            className="grid grid-cols-1 gap-2 w-[250px] min-w-fit items-center justify-center"
        >
            <h1 className="text-center">Sign In</h1>
            <input type="email" name="email" placeholder='Email' required />
            <input type="password" name="password" placeholder='Password' required/>
            <button type='submit' className='bg-blue-500 rounded-md text-white'>Login</button>
            <button 
            type='button' 
            className='bg-yellow-500 rounded-md text-white'
            onClick={handleSignUp}
            >Sign Up</button>
            <p>{ loading ? 'Signing in...' : '' }</p>
        </form>
        </div>
    )
}

export default SignInComponent