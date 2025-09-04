import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

export function Menu() {

  type AvaibleThemes = 'dark' | 'light';

  const [theme, setTheme] = useState<AvaibleThemes>('dark');

   function handleThemeChange (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
   }


  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a 
        className={styles.menuLink} 
        href="#" aria-label="Ir para home" 
        title="Ir para home">

        <HouseIcon />
      </a>

      <a 
        className={styles.menuLink} 
        href="#" aria-label="Historico" 
        title="Historico">

        <HistoryIcon />
      </a>


      <a 
        className={styles.menuLink} 
        href="#" 
        aria-label="Config" 
        title="Config">

        <SettingsIcon />
      </a>
      <a 
        className={styles.menuLink} 
        href="#" 
        aria-label="Mudar tema" 
        title="Mudar tema"
        onClick={handleThemeChange}>
        
        <SunIcon />
      </a>
    </nav>
  );
}
