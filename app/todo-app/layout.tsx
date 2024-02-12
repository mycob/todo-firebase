'use client'
import React from 'react'
import useAuth from '../lib/hooks/useAuth';
import SignInComponent from '../components/signin/signin';

const ToDoAppLayoutComponent = ({ children } : 
    { children: React.ReactElement }) => {

    const isAuthenticated = useAuth();

    return isAuthenticated ? (<div>{children}</div>)
        : <SignInComponent />
}

export default ToDoAppLayoutComponent