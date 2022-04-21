import { Box } from '@mui/material';
import React, { useEffect} from 'react';
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



const Main = ({createNews, newsArr, kindOfNews, searchNews}) => {
    
    
    useEffect(()=>{
        console.log(kindOfNews)
        createNews(kindOfNews)
                                // solve problem with useEffect

        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[kindOfNews])
    return (
        <Box flex={4} p={2}>

            {/* <NewsApi /> */}

            <CreatePost />
            <Box>
                {newsArr.filter(text => text.title.toLowerCase().includes(searchNews.toLowerCase()) ||
                text.content.toLowerCase().includes(searchNews.toLowerCase()) ||
                text.author.toLowerCase().includes(searchNews.toLowerCase()))
                .map((elem,i)=> <Post key={elem + i} props={elem}/>)}
            </Box>
        </Box>
    );
};

export default Main;