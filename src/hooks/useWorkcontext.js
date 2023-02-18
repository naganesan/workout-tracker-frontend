import {WorkoutContext} from '../context/workoutContext'
import { useContext } from 'react'

const useWorkoutContext = () => {

    const context = useContext(WorkoutContext)
    
    if(!context){
        console.log('conetxt using not working')
    }

    return context
}

export default useWorkoutContext;