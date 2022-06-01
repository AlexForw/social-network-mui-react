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
import { Divider } from '@mui/material';


const Post = ({ props }) => {
    return (
        <Card sx={{ marginBottom: { xs: 1, sm: 3, md: 4 }, marginTop: { xs: 1, sm: 3, md: 4 } }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        {props.author.split(' ')[0]?.slice(0, 1) + props.author.split(' ')[1]?.slice(0, 1)}
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
                <Divider sx={{ height: 5, m: 0.5 }} orientation="horizontal" />
                <Typography variant="body2" color="text.secondary">
                    {props.content}
                </Typography>
                <IconButton variant='a' sx={{ borderRadius: 3, mt: 2 }} target="_blank" href={props.readMoreUrl}>Read more</IconButton>
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