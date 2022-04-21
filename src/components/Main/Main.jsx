import { Box } from '@mui/material';
import React from 'react';
import Post from '../assets/Post'
import CreatePost from '../assets/CreatePost';
// import NewsApi from '../APIs/NewsApi';


const Main = () => {
    const API = 'https://inshortsapi.vercel.app/news?category'


    const createNews = async (target) => {
        const resp = await fetch(`${API}=${target}`)
        const data = await resp.json()
        console.log(data)
    }
    createNews('science')
    return (
        <Box flex={4} p={2}>

            {/* <NewsApi /> */}

            <CreatePost />
            <Box>
                <Post img="https://www.flydubai.com/ru/media/Tel-Aviv-2560x960_tcm10-161005.jpg" />
                <Post img="https://upload.wikimedia.org/wikipedia/commons/9/98/Hashalom_interchange.jpg" />
            </Box>
        </Box>
    );
};

export default Main;