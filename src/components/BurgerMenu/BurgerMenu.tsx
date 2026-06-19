// import styles from './BurgerMenu.module.css';

// export const BurgerMenu = () => {
//   return (
//     <>
//       {[...Array(3).keys()].map((el) => (
//         <span key={el} className={styles.line} />
//       ))}
//     </>
//   );
// };

import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NAVIGATION_ITEMS } from '../../constants/navigation';

interface BurgerMenuProps {
  menuItems: typeof NAVIGATION_ITEMS;
}
export function BurgerMenu({ menuItems }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map(({ label, path }, index) => (
            <ListItemButton key={`${index}-menu-item`} href={path}>
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
