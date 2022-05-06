import { Box, Card, Typography, IconButton } from '@mui/material';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

const MyProfile = ({ profileStatus }) => {
    console.log(localStorage.getItem('storage'));
    return (
        <Box flex={4} p={2} height='100vh' display='flex' gap={2}>
            {/* {JSON.parse(localStorage.getItem('storage'))[0]} */}
            <Card sx={{ width: '300px', height: '300px', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
                <Card sx={{ width: '200px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgb(45, 45, 92, 0.4)', ":hover": { borderBottom: 'solid 2px' }, cursor: 'pointer' }}>
                    <PhotoCameraOutlinedIcon sx={{ fontSize: '100px', marginBottom: 2 }} />
                    <Typography variant='h4' sx={{ textAlign: 'center', fontSize: '16px', fontWeight: '900' }}>Upload a photo</Typography>
                </Card>
                <IconButton variant='h4' sx={{ textAlign: 'center', borderRadius: '5px', padding: '5px 20px', fontSize: '16px', fontWeight: '900', background: 'rgb(45, 45, 92, 0.4)' }}>Edit profile</IconButton>
            </Card>
            <Card sx={{ width: '100%', height: '300px', padding: 2.5 }}>
                <Box sx={{ borderBottom: '1px solid' }}>
                    <Typography variant='h4' sx={{ fontSize: '24px', fontWeight: '400', marginBottom: 0.3 }}>{JSON.parse(localStorage.getItem('storage'))[0]}</Typography>
                    <Typography variant='h5' sx={{ fontSize: '14px', fontWeight: '400', marginBottom: 1.5, opacity: 0.5 }}>{'Set status' || profileStatus}</Typography>
                </Box>
            </Card>
        </Box>
    );
};

export default MyProfile;