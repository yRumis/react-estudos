import styles from './styles.module.css';

type ConbtainerProps = {
    children: React.ReactNode;
}


export function Container ({children}: ConbtainerProps) {
    return (
        <div className={styles.container}>
           <div className={styles.content}>
               {children}
           </div>
        </div>
    )
}