import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/clientApp";

function useAuth() {
    const [ user, setLocalUser ] = useState<any | null>(null);

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            if(user) {
                console.log('There is a user.');
                setLocalUser(user);
            } else {
                console.log('There is no user.');
            }
        })
    
        return () => unsubscribe();

    },[ ])
  
    return user;
}
export default useAuth;