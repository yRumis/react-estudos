import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsTolMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(
    state: TaskStateModel, 
    action: TaskActionModel
):TaskStateModel{

switch (action.type) {
  case TaskActionTypes.START_TASK: {
    const newTask = action.payload;
    const nextCycle = getNextCycle(state.currentCycle);
    const secondsRemaning = newTask.duration * 60;

    return {
      ...state,
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaning,
      formatedSecondsRemaning: formatSecondsTolMinutes(secondsRemaning),
      tasks: [...state.tasks, newTask],
    };
  }

  case TaskActionTypes.INTERRUPT_TASK: {
    return {
      ...state,
      activeTask: null,
      secondsRemaning: 0,
      formatedSecondsRemaning: "00:00",
      tasks: state.tasks.map((task) => {
        if (state.activeTask && state.activeTask.id === task.id) {
          return {
            ...task,
            interupted: Date.now(),
          };
        }
        return task;
      }),
    };
  }
  case TaskActionTypes.RESET_STATE: {
    return {
      ...state,
    };
  }
}

    return state;
}