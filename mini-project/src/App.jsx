// import './App.css'
import React from 'react'; 
import Button from '@mui/material/Button'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import Alert from '@mui/material/Alert';
import { createSvgIcon } from '@mui/material/utils'

function App() {
  let handleClick = () => { 
    console.log("button was clicked!");
  }
  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick}>Click me!</Button> <br /><br />
      <Button variant="contained" onClick={handleClick} disabled>Click me2!</Button> <br /><br />
      <Button variant="contained" onClick={handleClick} color="error" size="large">Click me3!</Button> <br /><br />
      <Button variant="contained" onClick={handleClick} color="success" size="small">Click me4!</Button><br /><br />
      <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon/>}>Delete</Button><br /><br />
      <Alert severity="error">Delete option is given</Alert>
    </>
  );
}

export default App;
