import {  useState } from "react";
import useWorkoutContext from '../hooks/useWorkcontext'
import useUserContext from "../hooks/useUsercontext";


const WorkoutForm = () => {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [myerror, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [btndisable, setBtnDisable] = useState(true);
    const {currentUser} = useUserContext();
    const {setWorkouts} = useWorkoutContext()

    const addworkout = {title,load,reps}
    // console.log('addworkout' , addworkout)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(title === ''){
            setError('All fileds are required')
        }else if (load === ''){
            setError('All fileds are required')
        }
        else if (reps === ''){
            setError('All fileds are required')
        }else{

            if(!currentUser){
                setError('User must be logged In..')
            }

        //spinner    
        setBtnDisable(false)
        setLoading(true) 

        fetch('/api/workout', {
            method:'POST',
            body:JSON.stringify(addworkout),
            headers:{
                'Content-Type' : 'application/json',
                'Authorization' :`Bearer ${currentUser.token}`,
            }
        })
        .then(async (response) => {
            
            const data = await response.json()

            if(!response.ok){
              setError(data.error)
            }
            if(response.ok){

                setWorkouts(olddata => [data,...olddata])

                //spinner    
                setBtnDisable(true)
                setLoading(false) 

                setError(null);
                setTitle('');
                setLoad('');
                setReps('');
            }
           
        })
        .catch((error) => {
            
           const err = JSON.stringify(error)
           console.log('nnn', error)
            setError(err);
            setBtnDisable(true)
            setLoading(false) 

        })
        }
            
    }


    return ( 
        <div className="workoutform "  >
                <form onSubmit={handleSubmit}>
                <div className="container border border-dark p-4  rounded-3 bg-body-tertiary">

                <h2 className="text-center">Add New WorkOut</h2>

                <label htmlFor="titleInput" className="form-label mt-3" >Workout Title</label>
                <input 
                type="text" 
                id="titleInput" 
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value= {title}/>

                <label htmlFor="loadInput" className="form-label mt-3 " >Load</label>
                <input 
                type="number" 
                id="loadInput" 
                className="form-control"
                onChange={(e) => setLoad(e.target.value)}
                value= {load}/>

                <label htmlFor="repsInput" className="form-label mt-3" >Reps</label>
                <input 
                type="number" 
                id="repsInput" 
                className="form-control"
                onChange={(e) => setReps(e.target.value)}
                value= {reps}/>

                <div className="text-center">
                {btndisable && <button type="submit" className="btn  btn-success  mt-4 ">Add Workout</button>}
                {loading && <div className="spinner-border text-success mt-4" role="status"><span className="sr-only"></span></div>}
                </div>
                </div>
                </form>
                {myerror && 
                <div className="alert alert-danger mt-4" role="alert">
                    {myerror}
                </div>
                }
        </div>
     );
}
 
export default WorkoutForm;