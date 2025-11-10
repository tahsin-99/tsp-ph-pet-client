import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase';


export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const creatUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
  
    const Login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleProvider=new GoogleAuthProvider()

    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut=()=>{
        return signOut(auth)
        .then(()=>{
            
        })
        

    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authData={
        user,
         loading,
        setUser,
       creatUser,
       Login,
        googleLogin,
        logOut,
       
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
        
};

export default AuthProvider;