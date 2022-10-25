import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../../firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;