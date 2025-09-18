import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import {useRef} from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsTolMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {

  const {state, setState} = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

// ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle); 

    function handleCreateNewTask(event: React.FormEvent){
      event.preventDefault();

      if(taskNameInput.current === null )return;

      const taskName = taskNameInput.current.value.trim();

      if(taskName.length === 0){
        alert("Task name cannot be empty");
        return;
      }

       const newTask: TaskModel = {
        id: crypto.randomUUID(),
        name: taskName,
        startDate: Date.now(),
        completed:null,
        interupted:null,
        duration: state.config[nextCycleType], // convertendo para minutos
        type: nextCycleType
      }

      const secondsRemaning = newTask.duration * 60; // convertendo para segundos

      setState( prevState => {
        return {
          ...prevState,
          activeTask: newTask,
          currentCycle: nextCycle,
          secondsRemaning,
          formatedSecondsRemaning: formatSecondsTolMinutes(secondsRemaning),
          tasks: [...prevState.tasks, newTask]
        }
      })
    }


 

    return (
      <form onSubmit={handleCreateNewTask} className="form" action="">
          <div className='formRow'>
            <DefaultInput 
            id="meuInput" 
            type='text' 
            labelText='Task'
            placeholder='Digite algo'
            ref={taskNameInput}
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          {state.currentCycle > 0 && (
            <div className='formRow'>
              <Cycles/>
            </div>
          )}

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color="green"/>
            {/* <DefaultButton icon={<StopCircleIcon />} color="red" /> */}

          </div>
      </form>
    )
}
