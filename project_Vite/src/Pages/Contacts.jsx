import { Button, Container, TextField, FormControlLabel, Checkbox, Typography } from '@mui/material';
import React from 'react';

export default function Contacts() {
  return (
    <Container style={{ width: "500px" }}>
      <form className='form'>
        <Typography variant="h4" align="center" gutterBottom>
          Contact me
        </Typography>

        {/* Поле для email */}
        <TextField className='input-form'
          fullWidth
          label="Email address"
          type="email"
          variant="outlined"
          placeholder="Enter email"
          helperText="We will never share your email with anyone else"
          margin="normal"
        />

        {/* Текстовая область */}
        <TextField
          fullWidth
          label="Example textarea"
          variant="outlined"
          multiline
          rows={3}
          margin="normal"
        />

        {/* Чекбокс */}
        <FormControlLabel
          control={<Checkbox />}
          label="Check me out"
        />

        {/* Кнопка отправки */}
        <Button className='button-form' variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
}
