import { Box } from '@mui/material';
import React from 'react';
import ListSocial from './ListSocial';

import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';



const ListWrapper = ({typographyText, titleText}) => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box>
            <ListSocial primary={titleText} onClickWrapper={handleClick} optionalIcon={open ? <ExpandLess /> : <ExpandMore />}/>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListSocial primary={typographyText}/>
            </Collapse>
        </Box>
    );
};

export default ListWrapper;