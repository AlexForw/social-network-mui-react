import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Search from '../../assets/Search';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../../firebase-config'


const Register = () => {

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')


    const register = async () =>{
        try{
          const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
          console.log(user);
        }catch (error){
          console.log(error.message);
        }
      }

    return (
        <Box height='100vh' p={3} sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box sx={{ backgroundColor: 'red', width: '300px' }}>
                Animation
            </Box>
            <Card sx={{ width: '400px', height: '400px', display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography variant='h4' sx={{ textAlign: 'center', marginTop: 5 }}>Register</Typography>
                <Search text={'Email..'} icon={<AlternateEmailOutlinedIcon />} onChange={e => setRegisterEmail(e.target.value)} />
                <Search text={'Password..'} icon={<LockOutlinedIcon />} onChange={e => setRegisterPassword(e.target.value)} />
                <Button variant="contained" onClick={register} sx={{ width: '200px', alignSelf: 'center', marginTop: 5 }}>Sign up</Button>

                <Box sx={{ display: 'flex', justifyContent: 'center', color: '#4682B4', fontWeight: '900' }}>
                    <Typography variant="body2" color="text.secondary" marginRight={1}>
                        Have already an account?
                    </Typography>
                    <Link to='/login'>Sign in</Link>
                </Box>
            </Card>
        </Box>
    );
};

export default Register;