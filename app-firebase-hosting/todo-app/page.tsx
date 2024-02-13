import React from 'react'
import AddToDoComponent from './components/AddToDo';
import SignOutButton from '../components/signout/signout';
import ToDoListComponent from './components/ToDoList';

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