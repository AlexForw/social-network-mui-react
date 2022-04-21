import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const ListSocial = ({primary, icon, optionalIcon, onClickWrapper, sx, onClick}) => {
    return (
        <List sx={sx} onClick={onClick}>
            <ListItem disablePadding onClick={onClickWrapper}>
                <ListItemButton>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={primary} />
                    <ListItemIcon>
                        {optionalIcon}
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default ListSocial;