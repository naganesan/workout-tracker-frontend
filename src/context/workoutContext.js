import { createContext, useState } from "react";

export const WorkoutContext = createContext();

const WorkoutContextProvider = ({children}) => {

    const [workouts , setWorkouts] = useState([]);
    
    return (
        <WorkoutContext.Provider value={{workouts, setWorkouts}} >
            {children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutContextProvider;

