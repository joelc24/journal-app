import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "react-hook-form";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../../store/auth/thunks";

const LoginPage = () => {
    const { status, errorMessage } = useSelector((state) => state.auth)
    
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const isAuthenticating = useMemo(() => status == 'checking', [status])

    const onSubmit = (data) =>{
        dispatch(startLoginWithEmailPassword(data))
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={handleSubmit(onSubmit)} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            error={ errors.email ? true : false }
                            helperText={ errors.email && 'El correo es obligatorio' }
                            {...register('email', { required: true })}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            error={ errors.password ? true : false }
                            helperText={ errors.password && 'La contraseña debe contener minimo seis caracteres' }
                            {...register('password', { required: true, minLength: 6 })}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating} variant="contained" fullWidth onClick={onGoogleSignIn}>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};

export default LoginPage;
