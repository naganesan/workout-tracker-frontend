import {UserContext} from '../context/userContext'
import { useContext } from 'react'

const useUserContext = () => {

    const context = useContext(UserContext)
    
    if(!context){
        console.log('conetxt using not working')
    }

    return context
}

export default useUserContext;