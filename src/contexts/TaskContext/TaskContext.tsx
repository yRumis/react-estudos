import React, { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./taskActions";


// here i have my created context
type TaskContextType = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
}

const initialContextValue = {
    state: initialTaskState,
    dispatch: () => {},
}

export const TaskContext = createContext<TaskContextType>(initialContextValue);
