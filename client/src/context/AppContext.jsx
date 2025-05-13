import { createContext, useState } from "react";

export const AppContext = createContext(); // create your own context provider 

const AppContextProvider = (props) => {

    const [user, setUser] = useState(null); // user logged in hai ya nahi 

    const [showLogin, setShowLogin] = useState(false); // login form khula hai ya nahi 

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
    }
    return (
        <AppContext.Provider value={value}>
            {props.children};
        </AppContext.Provider>
    )
}
export default AppContextProvider;