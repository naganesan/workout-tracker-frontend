import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import useWorkoutContext from '../hooks/useWorkcontext'
import useUserContext from '../hooks/useUsercontext'


const WorkoutDetailed = ({workout}) => {

    const {workouts, setWorkouts} = useWorkoutContext()
    const {currentUser} = useUserContext();

    

    function handleDelete() {

       

        fetch('/api/workout/'+ workout._id, {
            method:'DELETE',
            headers : {
                'Authorization' :`Bearer ${currentUser.token}`,
            }
        })
        .then(async (response) => {

            const data = await response.json()
            
            if(response.ok){
                
                setWorkouts(workouts.filter((item) => item._id !== data.workout._id));

                // console.log('item delted')
                // console.log(data)
            }
            
        })
    }

    return ( 
        <div className="workoutdetailed">
            
            <div className=" workout container ms-0 bg-body-tertiary mt-4 py-3 px-4 border-left border border-secondary rounded-3 ">
            
            <h3 className="text-capitalize font-weight-bold text-success ">{workout.title}</h3>
            
            <p className="mb-2"><strong>Loads (kg) : </strong>{workout.load}
            <br></br>
            <strong>Reps : </strong>{workout.reps}</p>
            <br></br>
            <p><strong>{formatDistanceToNow(new Date(workout.createdAt) , {addsuffix : true})}</strong></p>     
            
            <div className="position-relative">
              
            <span className="material-symbols-outlined  rounded-2 bg-teritary position-absolute bottom-0 end-0" role='button' onClick={handleDelete}>delete</span>
           
            </div>

            </div>

        </div>
     );
}

/// export default WorkoutDetailed;




 
export default WorkoutDetailed;