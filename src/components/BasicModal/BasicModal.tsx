import Box from '@mui/material/Box';
import type { PropsWithChildren } from 'react';

import Modal from '@mui/material/Modal';

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

type BasicModalProps = PropsWithChildren<{
  open: boolean;
  onClose: () => void;
}>;

export const BasicModal = ({ children, open, onClose }: BasicModalProps) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: '1px',
              right: '1px',
            }}>
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </Modal>
    </div>
  );
};
