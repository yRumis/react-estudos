import { useEffect, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

// this is for my provider component, i mean, the one that will wrap my app and provide the context to all components
type TaskContextProviderProps = {
  children: React.ReactNode;
}

export function TaskContextProvider ({children}: TaskContextProviderProps){

    const [state, setState] = useState(initialTaskState);

    useEffect(() => {
       console.log(state);
    }, [state])

 return (
        <TaskContext.Provider value={{state, setState}}>
            {children}
        </TaskContext.Provider>
 )

}