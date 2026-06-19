import { Menu } from '../Menu/Menu';
import { NAVIGATION_ITEMS } from '../../constants/navigation';

export const Footer = () => {
  return (
    <footer>
      <Menu menuItems={NAVIGATION_ITEMS} />
    </footer>
  );
};
