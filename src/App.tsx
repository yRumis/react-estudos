import './styles/theme.css'
import './styles/global.css'
// import { TimerIcon } from 'lucide-react';
import { Container } from './components/Container';
// import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

export function App() {
  return (
    <>
      <Container>
        <Logo />
       </Container>

      <Container>
        <Menu/>
       </Container>

      
      <Container>
        <CountDown/>
       </Container>

      <Container>
        <form className="form" action="">
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
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
      
      </>
  );
}
