'use client'
import React, { useEffect, useState } from 'react';
import { db } from "@/app/lib/firebase/clientApp";
import { collection, onSnapshot } from "firebase/firestore";
import useAuth from "@/app/lib/hooks/useAuth";
import ToDoItemComponent from './ToDoItem';

const ToDoListComponent = () => {
    const [ todos, setToDos ] = useState<any []>([]);
    const auth = useAuth();

    useEffect(() => {
        if(!auth) return;
        const todoRef = collection(db, 'users', auth?.uid, 'todos');
        const unsubscribe = onSnapshot(todoRef, (snapshot) => {
            if(!snapshot.empty) {
                let todos: any[] = [];
                snapshot.forEach((doc) => {
                    todos.push({...doc.data(), id: doc.id});
                })
                setToDos([...todos]);
                return;
            }
            setToDos([]);
        });

        return () => unsubscribe();
    },[ auth ])
    
    return (
        <div className='mt-12 flex flex-col items-center'>
            <div className='p-3 min-w-fit w-[350px]'>
                {todos.map((todo) => (
                    <ToDoItemComponent key={todo.id} todo={todo} />
                ))} 
            </div>
        </div>
    )
}

export default ToDoListComponent;