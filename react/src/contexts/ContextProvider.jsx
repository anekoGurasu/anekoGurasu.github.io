import { use, useContext } from "react";
import { createContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('USER_DATA');
        return storedUser ? JSON.parse(storedUser) : {};
    });
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        } else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    // Simple login function to create token
    const login = (username) => {
        if(username && username.trim() !== "") {
            const fakeToken = "token_" + username.trim();
            setToken(fakeToken);
            setUserAndStore({ name: username });
            return true;
        }
        return false;
    }
 
    const setUserAndStore = (user) => {
        setUser(user);
        if(user){
            localStorage.setItem('USER_DATA', JSON.stringify(user));
        } else {
            localStorage.removeItem('USER_DATA');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser: setUserAndStore,
            setToken,
            login
        }}>

        {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)