import { useEffect, useReducer} from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManage";

// this is for my provider component, i mean, the one that will wrap my app and provide the context to all components
type TaskContextProviderProps = {
  children: React.ReactNode;
}

export function TaskContextProvider ({children}: TaskContextProviderProps){

    const [state, dispatch] = useReducer(taskReducer,initialTaskState);

    const worker = TimerWorkerManager.getInstance();

    worker.onmessage((e) => {
      const secondsLeft = e.data;
      console.log('seconds left from worker', secondsLeft);

      if(secondsLeft <= 0){
          console.log('Worker COMPLETED');
          worker.terminate();
      }
    });

    useEffect(() => {
      if(!state.activeTask){
        console.log('terminating worker');
        worker.terminate();
      }
      worker.postMessage(state);
    }, [worker, state]);

 return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
 )

}