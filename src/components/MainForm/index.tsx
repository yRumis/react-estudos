import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import {useRef} from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";

export function MainForm() {

  const {setState} = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

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
        duration: 0,
        type: "workTime"
      }

      const secondsRemaning = newTask.duration * 60;

      setState( prevState => {
        return {
          ...prevState,
          activeTask: newTask,
          currentCycle: 1,
          secondsRemaning,
          formatedSecondsRemaning: "00:00",
          tasks: [...prevState.tasks, newTask]
        }
      })
    }


 

    return (
      <form onSubmit={handleCreateNewTask} className="form" action="">
        <h1>{}</h1>
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

          <div className='formRow'>
            <Cycles/>
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color="green"/>
            {/* <DefaultButton icon={<StopCircleIcon />} color="red" /> */}

          </div>
      </form>
    )
}
