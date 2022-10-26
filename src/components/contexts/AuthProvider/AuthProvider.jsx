import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider} from 'firebase/auth'
import app from '../../../firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const user = {displayName : "batas"}
    const authInfo = {user, createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;