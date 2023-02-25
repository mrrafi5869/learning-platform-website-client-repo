import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("light");
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubSignIn = provider => {
        // setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            console.log("user inside state change", currenUser);
            setUser(currenUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    } , [])



    const authInfo = {user, loading,theme, setTheme, createUser, googleSignIn, githubSignIn, logOut, signIn, updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;