import type { TaskModel } from "./TaskModel";


export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaning: number;
  formatedSecondsRemaning: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreak: number;
    longBreak: number;
  }

}