'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import useAuth from '../lib/hooks/useAuth';
const SignInComponent = dynamic(() => import('../components/signin/signin').then(mod => mod.default));

const ToDoAppLayoutComponent = ({ children } : 
    { children: React.ReactElement }) => {

    const isAuthenticated = useAuth();

    return isAuthenticated ? (<div>{children}</div>)
        : <SignInComponent />
}

export default ToDoAppLayoutComponent