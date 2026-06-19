import { BasicModal } from '../BasicModal/BasicModal';
import { ConnectForm } from './ConnectForm';
import { Button } from '../Button/Button';
import styles from '../Button/Button.module.css';
import { useState } from 'react';

export const ConnectButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={() => handleOpen()}
        className={styles.buttonConnect}
        label="Connect With Me"
      />
      <BasicModal open={open} onClose={handleClose}>
        <ConnectForm />
      </BasicModal>
    </>
  );
};
