import { Menu } from '../Menu/Menu';
import { ContactsButton } from '../ContactsInfo/ContactsButton';
import styles from './Header.module.css';
import { useResize } from '../../hooks/useResize';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { NAVIGATION_ITEMS } from '../../constants/navigation';
import { useTheme } from '../../context/ThemeContext';
import { FormControlLabel, Switch } from '@mui/material';

export const Header = () => {
  const width = useResize();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Aleksandra Ilina</div>
      {width > 768 && <Menu menuItems={NAVIGATION_ITEMS} />}
      {width <= 768 && <BurgerMenu menuItems={NAVIGATION_ITEMS} />}

      <FormControlLabel
        control={<Switch color="default" checked={theme === 'dark'} onChange={toggleTheme} />}
        label={theme === 'dark' ? 'Dark' : 'Light'}
      />

      <ContactsButton />
    </header>
  );
};
