import {supabase} from '../supabaseClient';
import { useState, useEffect, useContext, createContext } from 'react';

const authContext = createContext();

export const AuthProvider = ({children}) => {
    const auth = useProviderAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext);
}

function useProviderAuth() {
    const [user, setUser] = useState(null)

    const login = async(email) => {
        const { data, error } = await supabase.auth.signInWithOtp({email})

        if(error){
            console.log(error);
        }

        return {data, error}
    }

    const logout = async() => {
        const { error } = await supabase.auth.signOut()

        if(error){
            console.log(error);
        }

        setUser(null)
    }

    useEffect(() => {
        const user = supabase.auth.user
        setUser(user)

        const auth = supabase.auth.onAuthStateChange((event, session) => {
            if(event === 'SIGNED_IN'){
                setUser(session.user)
            }

            if(event === 'SIGNER_OUT'){
                setUser(null)
            }

        })

        return () => auth.unsubscribe()

    }, [])
    
    return {user, login, logout}
}