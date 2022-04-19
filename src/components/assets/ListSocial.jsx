import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const ListSocial = () => {
    return (
        <List>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="My profile" />
                    </ListItemButton>
                </ListItem>
            </List>
    );
};

export default ListSocial;