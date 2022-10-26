import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = provider => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            console.log("user inside state change", currenUser);
            setUser(currenUser);
        });
        return () => {
            unSubscribe();
        }
    } , [])



    const authInfo = {user, createUser, googleSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;