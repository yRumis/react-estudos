import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
   const { setState } = useTaskContext();

   function handleClick(){
      setState(prevState => {
        return {
          ...prevState,
          formatedSecondsRemaning: "10:00"
        }
      });
   }

    return (
          <form className="form" action="">
            <button type="button" onClick={handleClick}>Alguma coisa</button>
          <div className='formRow'>
            <DefaultInput 
            id="meuInput" 
            type='text' 
            labelText='Task'
            placeholder='Digite algo'
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
