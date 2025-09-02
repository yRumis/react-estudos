import styles from './styles.module.css'

import type React from "react";

type DefaultButtonProps = {
    color?: 'green' | 'red';
    icon: React.ReactNode;
} & React.ComponentProps<'button'>;

export function DefaultButton ({
    icon,
    color ='green',
    ...rest}: DefaultButtonProps) {
    return (

        <button className={`${styles.button} ${styles[color]}`} {...rest}>
        {icon}
        </button>
    
    );
}