import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {

      tasks: [],
      secondsRemaning: 0,
      formatedSecondsRemaning: "00:00",
      activeTask: null,
      currentCycle: 0,
      config: {
        workTime: 25,
        shortBreak: 5,
        longBreak: 15,
      }
}
