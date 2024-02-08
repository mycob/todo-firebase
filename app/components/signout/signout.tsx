'use client'
import { auth } from '@/app/lib/firebase/clientApp';
import { signOut } from 'firebase/auth'
import React from 'react'
import { useRouter } from 'next/navigation';



const SignOutButton = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut(auth);
        router.push('/');
    }
    
    return (
        <button
            onClick={handleSignOut}
        >Sign Out</button>
    )
}

export default SignOutButton