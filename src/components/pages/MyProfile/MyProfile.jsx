import { Box, Card, Typography } from '@mui/material';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

const MyProfile = () => {
    console.log(localStorage.getItem('storage'));
    return (
        <Box flex={4} p={2} height='100vh' display='flex' gap={2}>
            {/* {JSON.parse(localStorage.getItem('storage'))[0]} */}
            <Card sx={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ width: '200px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgb(45, 45, 92, 0.4)', ":hover": { borderBottom: 'solid 2px' } }}>
                    <PhotoCameraOutlinedIcon sx={{ fontSize: '100px', marginBottom: 2 }} />
                    <Typography variant='h4' sx={{ textAlign: 'center', fontSize: '16px', fontWeight: '900', color: 'text.primary' }}>Upload a photo</Typography>
                </Card>
            </Card>
            <Card sx={{ width: '100%', height: '300px' }}>

            </Card>
        </Box>
    );
};

export default MyProfile;