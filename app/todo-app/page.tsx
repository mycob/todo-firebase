import React from 'react'
import dynamic from 'next/dynamic'
const AddToDoComponent = dynamic(() => import('./components/AddToDo').then(mod => mod.default));
const SignOutButton = dynamic(() => import('../components/signout/signout').then(mod => mod.default));
const ToDoListComponent = dynamic(() => import('./components/ToDoList').then(mod => mod.default));

const ToDoAppComponent = () => {
  return (
    <div className='flex flex-col pt-12'>
        <SignOutButton />
        <h1 className='text-center my-12 font-bold'>My ToDos</h1>
        <AddToDoComponent />
        <hr className='my-12 mx-12' />
        <ToDoListComponent />
    </div>
  )
}

export default ToDoAppComponent