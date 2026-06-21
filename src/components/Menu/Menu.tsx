import styles from './Menu.module.css';
import { Link } from 'react-router-dom';
import type { NAVIGATION_ITEMS } from '../../constants/navigation';

interface MenuProps {
  menuItems: typeof NAVIGATION_ITEMS;
}

export const Menu = ({ menuItems }: MenuProps) => {
  return (
    <nav>
      <ul className={styles.menu}>
        {menuItems.map(({ label, path }, index) => (
          <Link key={`${index}-menu-item`} to={path}>
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
