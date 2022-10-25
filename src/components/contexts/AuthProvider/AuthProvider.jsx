import React from 'react';
import { createContext } from 'react';



const AuthContext = createContext()
const AuthProvider = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;