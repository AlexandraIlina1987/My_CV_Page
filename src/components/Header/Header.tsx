import { Menu } from '../Menu/Menu';
import { ContactsButton } from '../ContactsInfo/ContactsButton';
import styles from './Header.module.css';
import { useResize } from '../../hooks/useResize';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { NAVIGATION_ITEMS } from '../../constants/navigation';

export const Header = () => {
  const width = useResize();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Aleksandra Ilina</div>
      {width > 768 && <Menu menuItems={NAVIGATION_ITEMS} />}
      {width <= 768 && <BurgerMenu menuItems={NAVIGATION_ITEMS} />}
      <ContactsButton />
    </header>
  );
};
