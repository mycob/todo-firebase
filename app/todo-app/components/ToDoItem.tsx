import useAuth from '@/app/lib/hooks/useAuth';
import React from 'react'
import { db } from '@/app/lib/firebase/clientApp';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { deleteToDo, updateToDo, updateStatus } from '@/app/lib/actions/toDoActions';
import '../todo.css';

const ToDoItemComponent = ({ todo } : 
    { todo: {id: string, todo: string, timestamp: number, complete: boolean }}) => {

    const auth = useAuth();

    //  ALL OF THE METHODS BEING USED ARE ON THE SERVER SIDE.
    //  KEPT THIS CODE FOR REFERENCE
    const handleCheckBox = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!auth) return;
        let checked = e.target.checked;
        let docRef = doc(db, "users", auth?.uid, 'todos', todo.id);
        await updateDoc(docRef, { complete: checked });
    }

    const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
        if(!auth) return;
        let newVal = e.target.value;
        let docRef = doc(db, "users", auth?.uid, 'todos', todo.id);
        await updateDoc(docRef, { todo: newVal });
    }

    const handleDelete = async () => {
        if(!auth) return;
        let docRef = doc(db, "users", auth?.uid, 'todos', todo.id);
        await deleteDoc(docRef);
    }

    return (
        <div className='hover:border-2 shadow-md p-2 m-1 rounded-sm'>
            <div className='text-xs'>{new Date(todo.timestamp).toDateString()}</div>
            <div  className='flex mx-1 hover:border-slate-300 '>
                <input type="checkbox" checked={todo.complete} 
                    onChange={(e) => updateStatus(auth?.uid,todo.id,e.target.checked)} />
                <input
                    onBlur={(e) => updateToDo(auth?.uid, todo.id, e.target.value)}
                    type='text'
                    defaultValue={todo.todo}
                    disabled={todo.complete}
                    className={todo.complete ?'complete-todo' : 'incomplete-todo'}
                />
                <button
                    className='bg-red-600 text-white text-xs px-2 rounded-md' 
                    onClick={() => deleteToDo(auth?.uid,todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ToDoItemComponent