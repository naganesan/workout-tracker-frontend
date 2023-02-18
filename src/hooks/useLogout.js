import useUserContext from "./useUsercontext";
import useWorkoutContext from "./useWorkcontext";

export const useLogout = () => {

    const {setCurrentUser} = useUserContext();
    const {setWorkouts} = useWorkoutContext();

    const logout = () => {

        console.log('logout running')
    localStorage.removeItem('user')
    setCurrentUser(null);
    setWorkouts(null)

    }

    return {logout}
}

export default useLogout;


