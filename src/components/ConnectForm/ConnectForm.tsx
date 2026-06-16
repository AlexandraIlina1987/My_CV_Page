import { type ChangeEvent, type FormEvent, useState } from "react";
import { Box, TextField, Button as MUIButton, Typography } from "@mui/material";

export const ConnectForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
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

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        label="FirstName"
        name="firstName"
        required
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="LastName"
        name="lastName"
        required
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
      />

      <Typography sx={{ textAlign: "center" }}>
        Thank you for your message! I'll get back to you as soon as possible.
      </Typography>

      <MUIButton type="submit" variant="contained">
        Send
      </MUIButton>
    </Box>
  );
}