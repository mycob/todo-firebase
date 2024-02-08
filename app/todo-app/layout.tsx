'use client'
import React from 'react'
import SignInComponent from '../components/signin/signin';
import useAuth from '../lib/hooks/useAuth';

const ToDoAppLayoutComponent = ({ children } : 
    { children: React.ReactElement }) => {

    const isAuthenticated = useAuth();

    return isAuthenticated ? (<div>{children}</div>)
        : <SignInComponent />
}

export default ToDoAppLayoutComponent