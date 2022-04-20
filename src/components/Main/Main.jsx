import { Box } from '@mui/material';
import React from 'react';
import Post from '../assets/Post'
import CreatePost from '../assets/CreatePost';

const Main = () => {
    return (
        <Box flex={4} p={2}>
            

            <Box>
                <CreatePost />
                <Post img="https://www.flydubai.com/ru/media/Tel-Aviv-2560x960_tcm10-161005.jpg" />
                <Post img="https://upload.wikimedia.org/wikipedia/commons/9/98/Hashalom_interchange.jpg" />
            </Box>
        </Box>
    );
};

export default Main;