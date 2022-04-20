import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { MoreVert } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const Post = ({img}) => {
    return (
        <Card sx={{marginBottom:{xs:1, sm:3, md:4},marginTop:{xs:1, sm:3, md:4}}}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        <AccountCircle />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Artemka how is your Ivrit"
                subheader="April 20, 2022"
            />
            <CardMedia
                component="img"
                height="30%"
                width="100"
                image={img}
                alt="City"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This is awesome city - Telaviv. It looks like a Moscow with the same amount of muslums.
                    My Brother Artem want to visit this city and land there. I think this place is really beautiful.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>

        </Card>
    );
};

export default Post;