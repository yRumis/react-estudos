import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css'

export function Cycles() {
  const cycleDescription = {
    workTime: 'Tempo de trabalho',
    shortBreak: 'Pausa curta',
    longBreak: 'Pausa longa'
  }

  const {state} = useTaskContext();

  const cycleStep = Array.from({length: state.currentCycle})

  return (
    <div className={styles.cycles}>
      <span>Ciclos: </span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);

        return ( 
          <span 
            key={crypto.randomUUID()}
            className={`${styles.cycleDot} ${styles[nextCycleType]}`}
            aria-label={`indicador de ciclo de ${cycleDescription[nextCycleType]}`}
            title={`indicador de ciclo de ${cycleDescription[nextCycleType]}`}
          ></span>
        );
        })}
         
        


      </div>
    </div>
  )
}