import { use, useContext } from "react";
import { createContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
    difficulty: null,
    setDifficulty: () => {}
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('USER_DATA');
        return storedUser ? JSON.parse(storedUser) : {};
    });
    const [difficulty, setDifficulty] = useState(() => {
        const storedUser = localStorage.getItem('USER_DATA');
        const userData = storedUser ? JSON.parse(storedUser) : {};
        return userData.difficulty !== undefined ? userData.difficulty : null;
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

    const setDifficultyAndStore = (diff) => {
        setDifficulty(diff);
        const storedUser = localStorage.getItem('USER_DATA');
        const userData = storedUser ? JSON.parse(storedUser) : {};
        userData.difficulty = diff;
        setUser(userData);
        localStorage.setItem('USER_DATA', JSON.stringify(userData));
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser: setUserAndStore,
            setToken,
            login,
            difficulty,
            setDifficulty: setDifficultyAndStore
        }}>

        {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)