import { TextField, Stack, Box, Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <br />
      <Box component="form" sx={{
        "margin": "1%",
        "border": "2px solid #ccc",
        // ".MuiInputBase-root": {"width": "130ch"},
        // ".MuiButtonBase-root": {"width": "130ch"}
      }}>
        <Stack direction={'column'} spacing={3} margin={3}>
          <TextField label="User Name" />
          <TextField label="Password" type='password' />
          <TextField label="Mobile" type='tel' />
          <TextField label="Email" type='email' />
          <TextField label="Address" multiline maxRows={3} minRows={2} />
          <TextField label="Date Of Birth" type='date' 
            InputLabelProps={{
            shrink: true,
            }}
          />
          <Button variant="contained">Submit</Button>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
