import { createContext, useEffect, useState } from 'react';

import { onUserAuthStateChanged } from '../utils/firebase/firebase-utils';



export const UserContext = createContext({
    user: null,
    setUser: () => null
})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const value = { user, setUser };
    useEffect(() => {
        const unsubscribe = onUserAuthStateChanged((user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);
    return (
        <UserContext.Provider value={value}> {children} </UserContext.Provider>
    );
}