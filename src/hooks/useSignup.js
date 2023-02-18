import { useState } from "react";
import  useUserContext  from '../hooks/useUsercontext'

export const useSignup = () => {
    const { setCurrentUser} = useUserContext();

    const [error,setError] = useState();
    const [isloading,setisLoading] = useState();

    async function signup(email,password){
        setError(null);
        setisLoading(true);


        fetch("api/user/signup",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({email,password})
        }).then(async (res)=>{

            const json = await res.json()

            if(!res.ok){
                setError(json.error)
                setisLoading(false);
            }
            if(res.ok){
                setisLoading(false);

                // setting in local storage
                localStorage.setItem('user', JSON.stringify(json))

                // setting the current user
                setCurrentUser(json)


            }
        })


    }

    return {signup, error, isloading}
}
 
