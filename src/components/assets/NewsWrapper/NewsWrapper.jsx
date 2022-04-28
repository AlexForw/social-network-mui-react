import { Box } from '@mui/material';
import React, { useEffect} from 'react';
import Post from '../Post'
import CreatePost from '../CreatePost';


const NewsWrapper = ({createNews, newsArr, kindOfNews, searchNews}) => {
    
    
    useEffect(()=>{
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

export default NewsWrapper;