import { useEffect, useState } from "react";

import WorkoutDetailed from "../components/WorkoutDetailed";
import WorkoutForm from "../components/WorkoutForm";

import useWorkoutContext from '../hooks/useWorkcontext'
import useUserContext from "../hooks/useUsercontext";

const Home =  () => {
    
    //const [workouts, setWorkouts] = useState([]);
    const {workouts , setWorkouts} = useWorkoutContext();
    const [error, setError] = useState(null);
    const {currentUser} = useUserContext();

    //  const currentUser =  JSON.parse(localStorage.getItem('user'))

    useEffect(()=> {
     
        if(!currentUser){
            setError('User must be logged In..')
            return
        }

    if(currentUser){

       fetch('/api/workout/', {
        headers : {
        "Authorization" :`Bearer ${currentUser.token}`,
         }
       })
       .then(response => {
         if(response.ok){
            setError(null)
            return response.json()
        }
        if(!response.ok){
            console.log(response.statusText)
            return setError(response.statusText)
        }
      })
        .then(data => {
          
            setWorkouts(data)
            
            //  console.log('data log :', data)
        })
        .catch((e) => {

            setError(e)
        console.log(e)});
    }

    },[currentUser, setWorkouts])

    
    return ( 
        <div className="home container-fluid p-4" value={{workouts}}>
            
            <div className="row">
            
                <div className="col  ">
                <h1 className="mt-3">Workouts Tracker</h1>
                <br></br>

                {error && 
                <div className="alert alert-danger mt-4" role="alert">
                    {error}
                </div>
                }

                {workouts && workouts.map((workout) => 
                <WorkoutDetailed key={workout._id} workout={workout} ></WorkoutDetailed>)}
                </div>
                <div className="col-4 mt-3">
                    <WorkoutForm></WorkoutForm>
                </div>
            </div>


        </div>
     );
}
 
export default Home;