import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Search from '../../assets/Search';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase-config'
import useAuth from '../../assets/hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import Bowl from '../../animations/Bowl';
import { useForm } from 'react-hook-form';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const Login = ({ setUserName }) => {

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

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUserName(currentUser)
        }
    })


    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            setAuthUser({ user })
            navigate(from, { replace: true })
        } catch (error) {
            console.log(error.message);
        }
        setLoginEmail('')
        setLoginPassword('')
    }

    return (
        <Box height='100vh' p={3} sx={{ display: 'flex', justifyContent: 'space-around' }}>

            <Bowl title='Login..' />
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('firstName', {
                    required: 'None',
                    minLength: {
                        value: 6,
                        message: 'Min length 6'
                    }
                })} />
                <div>{errors?.firstName && <p>{errors?.firstName?.message || Error}</p>}</div>
                <input {...register('lastName', {
                    required: 'None',
                    minLength: {
                        value: 6,
                        message: 'Min length 6'
                    }
                })} />
                <div>{errors?.lastName && <p>{errors?.lastName?.message || Error}</p>}</div>
                <input style={{padding:'20px'}} type="submit" disabled={!isValid} />
            </form> */}
            <Card sx={{ width: '400px', height: '400px', display: 'flex', flexDirection: 'column', gap: 3, borderRadius: '50px', padding: 1.5 }}>
                <Typography variant='h4' sx={{ textAlign: 'center', marginTop: 5 }}>Login</Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
                    <Box sx={{ position: 'relative' }}>
                        <Search type='text' inputValue={{
                            ...register('email', {
                                required: 'Field is required',
                            })
                        }} text={'Email..'} icon={<AlternateEmailOutlinedIcon />} value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
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
                        }} text={'Password..'} icon={<LockOutlinedIcon />} value={loginPassword} onChange={e => setLoginPassword(e.target.value)} />
                        <Box sx={{ position: 'absolute', left: 25, color: '#ff4040', display: 'flex', alignItems: 'center', gap: 0.5 }}>{errors?.password && <ReportProblemIcon fontSize='small' />} {errors?.password && <Box>{errors?.password?.message || Error}</Box>}</Box>
                    </Box>


                    <Button type='submit' variant="contained" disabled={!isValid} onClick={login} sx={{ width: '200px', alignSelf: 'center' }}>Sign in</Button>
                </form>

                <Box sx={{ display: 'flex', justifyContent: 'center', color: '#4682B4', fontWeight: '900' }}>
                    <Typography variant="body2" color="text.secondary" marginRight={1}>
                        Don't have account?
                    </Typography>
                    <Link to='/register'>Sign up</Link>
                </Box>
            </Card>
        </Box>
    );
};

export default Login;