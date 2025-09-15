import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string; 
  name: string;
  duration: number;
  startDate: number;
  completed: number | null;
  interupted: number | null;
  type:  keyof TaskStateModel["config"];
}
