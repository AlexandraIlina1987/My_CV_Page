
import type { FC } from "react";
import styles from "./Button.module.css";
    
export interface ButtonProps {
    onClick: () => void;
    className: string;
    label: string;
}

export const Button: FC<ButtonProps> = ({ onClick, className, label }) => {
    return <button onClick={onClick} className={`${styles.button} ${className}`}>{label}</button>
}