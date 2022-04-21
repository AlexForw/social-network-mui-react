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

const Post = ({ props }) => {
    return (
        <Card sx={{ marginBottom: { xs: 1, sm: 3, md: 4 }, marginTop: { xs: 1, sm: 3, md: 4 } }}>
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
                title={props.author}
                subheader={props.date + ' ' + props.time}
            />
            <CardMedia
                component="img"
                height="30%"
                width="100"
                image={props.imageUrl}
                alt="City"
            />
            <CardContent>
                <Typography variant='h6'>{props.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                {props.content}
                </Typography>
                <IconButton >Read more</IconButton>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>

        </Card>
    );
};

export default Post;