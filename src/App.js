import './App.css'
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home/Home';
import MyProfile from './components/pages/MyProfile/MyProfile'
import Messenger from './components/pages/Messenger/Messenger';
import Groups from './components/pages/Groups/Groups';
import Friends from './components/pages/Friends/Friends';

function App() {

  const API = 'https://inshortsapi.vercel.app/news?category'  // news API
  const [newsArr, setNewsArr] = React.useState([])
  const [kindOfNews, setKindOfNews] = React.useState('hatke')

  const [searchNews, setSearchNews] = React.useState('')   // For search by word in header Input

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

        <Routes>
          <Route path='/' element={<Layout mode={mode} setMode={setMode} setSearchNews={setSearchNews}/>}>
            <Route index element={<Home createNews={createNews} kindOfNews={kindOfNews} searchNews={searchNews} newsArr={newsArr} setKindOfNews={setKindOfNews}/>}/>
            <Route path='/myprofile' element={<MyProfile />}/>
            <Route path='/messenger' element={<Messenger />}/>
            <Route path='/groups' element={<Groups />}/>
            <Route path='/friends' element={<Friends />}/>
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
