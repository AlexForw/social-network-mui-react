import './App.css'
import React from 'react';
import Header from './components/Header/Header';
import Leftbar from './components/Leftbar/Leftbar';
import Main from './components/Main/Main';
import Rightbar from './components/Rightbar/Rightbar';
import { Stack } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material';

function App() {

  const [mode, setMode] = React.useState('dark')

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
  <ThemeProvider theme={darkTheme}>
    
      <div className="App">
        <Header />
        <Stack direction="row" gap="20px" justifyContent="space-between">
          <Leftbar />
          <Main />
          <Rightbar />
        </Stack>
      </div>
  </ThemeProvider>
  );
}

export default App;
