import { type ChangeEvent, type FormEvent, useState } from 'react';
import { Box, TextField, Button as MUIButton, Typography } from '@mui/material';

export const ConnectForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  const textFieldStyles = {
    '& .MuiInputLabel-root': {
      color: 'var(--text)',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'var(--text-h)',
    },
    '& .MuiOutlinedInput-root': {
      color: 'var(--text-h)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--border)',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--text)',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--text-h)',
    },
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}>
      <TextField
        label="FirstName"
        name="firstName"
        required
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        sx={textFieldStyles}
      />

      <TextField
        label="LastName"
        name="lastName"
        required
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        sx={textFieldStyles}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
        fullWidth
        sx={textFieldStyles}
      />

      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        sx={textFieldStyles}
      />

      <Typography sx={{ textAlign: 'center', color: 'var(--text)' }}>
        Thank you for your message! I'll get back to you as soon as possible.
      </Typography>

      <MUIButton
        sx={{
          backgroundColor: 'var(--accent)',
          color: 'var(--accent-contrast)',
          '&:hover': {
            backgroundColor: 'var(--link-hover)',
          },
        }}
        type="submit"
        variant="contained">
        Send
      </MUIButton>
    </Box>
  );
};
