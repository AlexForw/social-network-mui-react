import { IconButton, List } from '@mui/material';

import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Leftbar from '../Leftbar/Leftbar';

const Burger = () => {
    const [open,setOpen] = React.useState(false)
    return (
        <Box>
            <Button ><MenuIcon onClick={()=> setOpen(true)} color='white'/></Button>
            <SwipeableDrawer
                open={open}
                onOpen={()=> setOpen(true)}
                onClose={()=> setOpen(false)}
            >
                <List>{<Leftbar />}</List>
            </SwipeableDrawer>

        </Box>
    );
}


export default Burger