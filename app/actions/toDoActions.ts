'use server'
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export async function addToDo (userId: string, FormData: FormData) {
    let todo = FormData.get('todo');
    let app: any = await getApp();
    if(!app) return;
    const db = getFirestore(app);
    const todoRef = collection(db, 'users', userId, 'todos');
    await addDoc(todoRef, {
        todo,
        timestamp: new Date().getTime(),
        complete: false
    })
}

export async function updateToDo(userId: string, docId: string, newVal: string) {
    let app: any = await getApp();
    if(!app) return;
    const db = getFirestore(app);
    let docRef = doc(db, "users", userId, 'todos', docId);
    await updateDoc(docRef, { todo: newVal });
}

export async function updateStatus(userId: string, docId: string, status: boolean) {
    let app: any = await getApp();
    if(!app) return;
    const db = getFirestore(app);
    let docRef = doc(db, "users", userId, 'todos', docId);
    await updateDoc(docRef, { complete: status });
}

export async function deleteToDo(userId: string, docId: string) {
    let app: any = await getApp();
    if(!app) return;
    const db = getFirestore(app);
    let docRef = doc(db, "users", userId, 'todos', docId);
    await deleteDoc(docRef);
}

function getApp () {
    const firebaseConfig = {
        apiKey: "AIzaSyCvr-QyOL3SVc9IEhkc-qICUT83dsCRnA0",
        authDomain: "todo-firebase-19c22.firebaseapp.com",
        projectId: "todo-firebase-19c22",
        storageBucket: "todo-firebase-19c22.appspot.com",
        messagingSenderId: "841113620295",
        appId: "1:841113620295:web:92462662e58197ab640662",
        measurementId: "G-THD3C2XDJX"
      };

    return new Promise((resolve, reject) => {

        try {
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            resolve(app);
        } catch (error) {
            resolve(null);
        }
        
    })
}