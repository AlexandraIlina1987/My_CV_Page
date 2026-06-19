import { Menu } from '../Menu/Menu';
import { ContactsButton } from '../ContactsInfo/ContactsButton';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Aleksandra Ilina</div>
      <Menu />
      <ContactsButton />
    </header>
  );
};
