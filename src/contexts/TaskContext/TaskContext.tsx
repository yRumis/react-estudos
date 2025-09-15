import { createContext, type Dispatch, type SetStateAction } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";


// here i have my created context
type TaskContextType = {
  state: TaskStateModel;
  setState: Dispatch<SetStateAction<TaskStateModel>>;
}

const initialContextValue = {
    state: initialTaskState,
    setState: () => {},
}

export const TaskContext = createContext<TaskContextType>(initialContextValue);
