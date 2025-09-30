import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import {useRef} from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";

export function MainForm() {

  const {state, dispatch} = useTaskContext();
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

      dispatch({type: TaskActionTypes.START_TASK, payload: newTask});

    }

    function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){

      e.preventDefault();
      dispatch({type: TaskActionTypes.INTERRUPT_TASK});

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
            disabled={state.activeTask !== null}
            />
          </div>

          <div className='formRow'>
            <Tips/>
          </div>

          {state.currentCycle > 0 && (
            <div className='formRow'>
              <Cycles/>
            </div>
          )}

          <div className='formRow'>
            {!state.activeTask ? (
              <DefaultButton 
              aria-label='Iniciar nova tarefa' 
              type='submit' icon={<PlayCircleIcon />} 
              color="green"
              title='iniciar nova tarefa'/>
            ) : (
              <DefaultButton 
              aria-label='parar tarefa' 
              type='button' icon={<StopCircleIcon />} 
              color="red"
              title='para tarefa'
              onClick={handleInterruptTask}/>
            )
          }
            
            {/* <DefaultButton icon={<StopCircleIcon />} color="red" /> */}

          </div>
      </form>
    )
}
