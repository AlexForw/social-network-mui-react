import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import DownloadIcon from '@mui/icons-material/Download';
import ModalPage from './ModalPage';

const CreatePost = () => {
    return (
        <Paper
            sx={{ p: '2px 4px', display: {xs:'none', sm:'flex'}, alignItems: 'center'}}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <ModalPage><DownloadIcon /></ModalPage>
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="What's new?"
            />
            <IconButton sx={{ p: '3px' }} aria-label="search">
                <SentimentVerySatisfiedIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <SendIcon />
            </IconButton>
        </Paper>
    );
}
export default CreatePost;