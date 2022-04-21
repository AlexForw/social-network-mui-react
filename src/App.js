import './App.css'
import React from 'react';
import Header from './components/Header/Header';
import Leftbar from './components/Leftbar/Leftbar';
import Main from './components/Main/Main';
import Rightbar from './components/Rightbar/Rightbar';
import { Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';




function App() {

  const API = 'https://inshortsapi.vercel.app/news?category'  // news API
  const [newsArr, setNewsArr] = React.useState([])
  const [kindOfNews, setKindOfNews] = React.useState('all')

  const [mode, setMode] = React.useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        bmd: 1024,
        lg: 1280,
        xl: 1536,
      },
    },
  })


  const createNews = async (target) => {
    const resp = await fetch(`${API}=${target}`)
    const news = await resp.json()
    setNewsArr(news.data)
  }

  return (
    <ThemeProvider theme={darkTheme}>

      <Box bgcolor={'background.default'} color={'text.primary'} className="App">
        <Header mode={mode} setMode={setMode} />
        <Stack direction="row" justifyContent="space-between">
          <Leftbar />
          <Main createNews={createNews} kindOfNews={kindOfNews} newsArr={newsArr} />
          <Rightbar createNews={createNews} newsArr={newsArr} setKindOfNews={setKindOfNews}/>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
