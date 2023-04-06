import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material";
import { startCreateUserWithEmailPassword } from "../../../store/auth/thunks";
import AuthLayout from "../layout/AuthLayout";

const RegisterPage = () => {

    const { status, errorMessage } = useSelector((state) => state.auth)
    
    const dispatch = useDispatch()

    const isCheckingAuthenticated = useMemo(() => status == 'checking', [status])

    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            displayName: 'Joel Camargo',
            email: 'joelcamargo255@gmail.com',
            password: '123456'
        }
    })

    const onSubmit = (data) =>{
        dispatch(startCreateUserWithEmailPassword(data))
    }
    return (
        <AuthLayout title="Crear una cuenta">
            <form onSubmit={handleSubmit(onSubmit)} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Nombre Completo"
                            type="text"
                            placeholder="Nombre Completo"
                            fullWidth
                            error={ errors.displayName ? true : false }
                            helperText={errors.displayName && 'El nombre es obligatorio'}
                            {...register('displayName', { required: true })}
                        />
                    </Grid>

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
                    
                        <Grid item xs={12} display={ !!errorMessage ? '' : 'none' }>
                            <Alert severity="error">{ errorMessage }</Alert>
                        </Grid>
                    
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isCheckingAuthenticated} type="submit" variant="contained" fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Inicia Sesion
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};

export default RegisterPage;
