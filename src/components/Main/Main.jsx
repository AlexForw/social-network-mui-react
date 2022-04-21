import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Post from '../assets/Post'
import CreatePost from '../assets/CreatePost';
// import NewsApi from '../APIs/NewsApi';

// all
// national //Indian News only
// business
// sports
// world
// politics
// technology
// startup
// entertainment
// miscellaneous
// hatke
// science
// automobile



const Main = () => {
    const API = 'https://inshortsapi.vercel.app/news?category'  // news API
    const [newsArr, setNewsArr] = useState([])
    
    const createNews = async (target) => {
        const resp = await fetch(`${API}=${target}`)
        const news = await resp.json()
        setNewsArr(news.data)
        console.log(newsArr)
    }
    
    useEffect(()=>{
        createNews('sport')
                                // solve problem with useEffect

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    return (
        <Box flex={4} p={2}>

            {/* <NewsApi /> */}

            <CreatePost />
            <Box>
                {newsArr.map((elem,i)=> <Post key={elem + i} props={elem}/>)}
            </Box>
        </Box>
    );
};

export default Main;