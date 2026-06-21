import type { PropsWithChildren } from 'react';
import type { Theme } from '../../context/ThemeContext';
import styles from './ThemeWrapper.module.css';

type ThemeWrapperProps = PropsWithChildren<{
  theme: Theme;
}>;

export const ThemeWrapper = ({ theme, children }: ThemeWrapperProps) => {
  return <div className={`${styles.wrapper} ${styles[theme]}`}>{children}</div>;
};
