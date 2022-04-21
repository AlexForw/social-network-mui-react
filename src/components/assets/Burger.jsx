import { List } from '@mui/material';

import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Leftbar from '../Leftbar/Leftbar';

const Burger = () => {
    const [open,setOpen] = React.useState(false)
    return (
        <Box sx={{display:{xs:'block', md:'none'}}}>
            <Button sx={{color:'white'}}><MenuIcon onClick={()=> setOpen(true)} /></Button>
            <SwipeableDrawer
                open={open}
                onOpen={()=> setOpen(true)}
                onClose={()=> setOpen(false)}
            >
                <List sx={{width:'250px'}}>{<Leftbar />}</List>
            </SwipeableDrawer>

        </Box>
    );
}


export default Burger