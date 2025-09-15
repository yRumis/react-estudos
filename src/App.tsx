import "./styles/theme.css";
import "./styles/global.css";

import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
// import { AboutPomodoro } from "./pages/AboutPomodoro";
// import { NotFound } from './pages/NotFound';


export function App() {
 
  return ( 

  <TaskContextProvider>
    <Home />
  </TaskContextProvider>
);
}
