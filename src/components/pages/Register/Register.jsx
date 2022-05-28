import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Search from '../../assets/Search';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../firebase-config'
import useAuth from '../../assets/hooks/useAuth';
import Bowl from '../../animations/Bowl';
import { useForm } from 'react-hook-form';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';


const Register = ({ setUserName, userName }) => {

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = (data) => {
        console.log(data);
        reset()
    }



    const { setAuthUser } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'



    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUserName(currentUser)
        }
    })

    const registration = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            setAuthUser({ user })
            navigate(from, { replace: true })
        } catch (error) {
            console.log(error.message);
        }
        setRegisterEmail('')
        setRegisterPassword('')
    }


    return (
        <Box height='100vh' p={3} sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Bowl title='Register..' />

            <Card sx={{ width: '400px', height: '400px', display: 'flex', flexDirection: 'column', gap: 3, borderRadius: '50px' }}>
                <Typography variant='h4' sx={{ textAlign: 'center', marginTop: 5 }}>Register</Typography>

                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
                    <Box sx={{ position: 'relative' }}>
                        <Search type='text' inputValue={{
                            ...register('email', {
                                required: 'Field is required',
                            })
                        }} text={'Email..'} icon={<AlternateEmailOutlinedIcon />} value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} />
                        <Box sx={{ position: 'absolute', left: 25, color: '#ff4040', display: 'flex', alignItems: 'center', gap: 0.5 }}>{errors?.email && <ReportProblemIcon fontSize='small' />} {errors?.email && <Box>{errors?.email?.message || Error}</Box>}</Box>
                    </Box>
                    <Box sx={{ position: 'relative' }}>
                        <Search type='password' inputValue={{
                            ...register('password', {
                                required: 'Field is required',
                                minLength: {
                                    value: 6,
                                    message: 'Min length 6'
                                }
                            })
                        }} text={'Password..'} icon={<LockOutlinedIcon />} value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} />
                        <Box sx={{ position: 'absolute', left: 25, color: '#ff4040', display: 'flex', alignItems: 'center', gap: 0.5 }}>{errors?.password && <ReportProblemIcon fontSize='small' />} {errors?.password && <Box>{errors?.password?.message || Error}</Box>}</Box>
                    </Box>


                    <Button type='submit' variant="contained" disabled={!isValid} onClick={registration} sx={{ width: '200px', alignSelf: 'center' }}>Sign up</Button>
                </form>


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