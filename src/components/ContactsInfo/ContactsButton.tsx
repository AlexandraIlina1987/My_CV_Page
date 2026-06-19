import { BasicModal } from '../BasicModal/BasicModal';
import { Button } from '../Button/Button';
import styles from '../Button/Button.module.css';
import { useState } from 'react';
import { ContactsInfo } from './ContactsInfo';

export const ContactsButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={() => handleOpen()} className={styles.button} label="My Contacts" />
      <BasicModal open={open} onClose={handleClose}>
        <ContactsInfo />
      </BasicModal>
    </>
  );
};
