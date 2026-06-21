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
  bgcolor: 'var(--main-background)',
  color: 'var(--text)',
  border: '2px solid var(--border)',
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

export const BasicModal = ({ children, open, onClose }: BasicModalProps) => {
  return (
    <div>
      <Modal disablePortal open={open} onClose={onClose}>
        <Box sx={style}>
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: '1px',
              right: '1px',
              color: 'var(--text-h)',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'var(--border)',
              },
            }}>
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </Modal>
    </div>
  );
};
