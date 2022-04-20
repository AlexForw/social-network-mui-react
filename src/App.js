import './App.css'
import React from 'react';
import Header from './components/Header/Header';
import Leftbar from './components/Leftbar/Leftbar';
import Main from './components/Main/Main';
import Rightbar from './components/Rightbar/Rightbar';
import { Stack } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

function App() {

  const [mode, setMode] = React.useState('light')

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
  <ThemeProvider theme={darkTheme}>
    
      <Box bgcolor={'background.default'} color={'text.primary'} className="App">
        <Header mode={mode} setMode={setMode}/>
        <Stack direction="row" gap="20px" justifyContent="space-between">
          <Leftbar />
          <Main />
          <Rightbar />
        </Stack>
      </Box>
  </ThemeProvider>
  );
}

export default App;
