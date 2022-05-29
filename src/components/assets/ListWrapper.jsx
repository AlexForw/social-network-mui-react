import { Box } from '@mui/material';
import ListSocial from './ListSocial';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';



const ListWrapper = ({ children, titleText }) => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box>
            <ListSocial primary={titleText} onClickWrapper={handleClick} optionalIcon={open ? <ExpandLess /> : <ExpandMore />} />
            <Collapse in={open} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </Box>
    );
};

export default ListWrapper;