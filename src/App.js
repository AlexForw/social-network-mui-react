import './App.css'
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home/Home';
import MyProfile from './components/pages/MyProfile/MyProfile'
import Messenger from './components/pages/Messenger/Messenger';
import Groups from './components/pages/Groups/Groups';
import Friends from './components/pages/Friends/Friends';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register'
import LayoutForm from './components/Layout/LayoutForm';



function App() {

  const API = 'https://inshortsapi.vercel.app/news?category'  // news API
  const [newsArr, setNewsArr] = useState([])
  const [kindOfNews, setKindOfNews] = useState('hatke')

  const [searchNews, setSearchNews] = useState('')   // For search by word in header Input

  let modeArr // For Page Theme
  if (localStorage.getItem('mode') === null) {
    modeArr = ['light']
    localStorage.setItem('mode', JSON.stringify(modeArr))
  } //else{
  //   // JSON.parse(localStorage.getItem('mode'))
  //   modeArr.push(mode)
  //   localStorage.setItem('mode',JSON.stringify(modeArr))
  // } //

  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')).slice(-1).join(''))
  console.log(mode);



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


  const [userName, setUserName] = useState({})  // Register part


  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'} className="App">

        <Routes>
          <Route path='/' element={<Layout mode={mode} setMode={setMode} setSearchNews={setSearchNews} />}>
            <Route index element={<Home createNews={createNews} kindOfNews={kindOfNews} searchNews={searchNews} newsArr={newsArr} setKindOfNews={setKindOfNews} />} />
            <Route path='/myprofile' element={<MyProfile />} />
            <Route path='/messenger' element={<Messenger />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/friends' element={<Friends />} />
          </Route>
          <Route path='/' element={<LayoutForm mode={mode} setMode={setMode} setSearchNews={setSearchNews} />}>
            <Route path='/register' element={<Register setUserName={setUserName} userName={userName} />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
