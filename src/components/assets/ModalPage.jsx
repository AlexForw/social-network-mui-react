import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import IconButton from '@mui/material/IconButton';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import SendIcon from '@mui/icons-material/Send'
import Fab from '@mui/material/Fab';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '45vh',
    color: 'text.primary',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
};
const ModalPage = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div >
            <Button onClick={handleOpen}>{children}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create post
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, margin:'10px 0 10px 0' }}>
                        <AccountCircle fontSize='large' />
                        <Typography variant='h6' fontWeight='600'>Your Name</Typography>
                    </Box>
                    <TextField
                        sx={{width:'100%',maxHeight:'300px'}}
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's new?"
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between', gap: 1, margin:'10px 0 10px 0' }}>
                        <Box fontSize='large'>
                            <IconButton>
                                        <SentimentVerySatisfiedIcon />
                            </IconButton>
                            <IconButton>
                            <PhotoIcon />
                            </IconButton>
                            <IconButton>
                                        <VideoCameraBackOutlinedIcon />
                            </IconButton>
                            <IconButton>
                                        <InsertDriveFileOutlinedIcon />
                            </IconButton>
                        </Box>

                        <Fab>
                            <SendIcon/>
                        </Fab>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalPage;