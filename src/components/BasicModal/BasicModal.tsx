import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { Button as CustomButton } from '../../components/Button/Button';
import { ConnectForm } from '../ConnectForm/ConnectForm';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CustomButton onClick={() => handleOpen()} label="Connect With Me" />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
            }}>
            <CloseIcon />
          </IconButton>
          <ConnectForm />
        </Box>
      </Modal>
    </div>
  );
}
