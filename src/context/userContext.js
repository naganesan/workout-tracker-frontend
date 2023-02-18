import { createContext, useState , useEffect} from "react";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {

    const [currentUser , setCurrentUser] = useState();

    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem('user')));
    }, [])
    
    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

