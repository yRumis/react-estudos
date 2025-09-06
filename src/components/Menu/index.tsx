import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export function Menu() {

  type AvaibleThemes = 'dark' | 'light';

  const [theme, setTheme] = useState<AvaibleThemes>(() => {
    const savedTheme = localStorage.getItem('theme') as AvaibleThemes;
    return savedTheme || 'dark';
  });

   function handleThemeChange (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
},[theme]);

  const nextTheme = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
  };


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
        
       {nextTheme[theme]}
      </a>
    </nav>
  );
}
