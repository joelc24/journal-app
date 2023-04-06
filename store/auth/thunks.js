import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../src/firebase/provider"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await signInWithGoogle()

        if (!result.ok) {
            return dispatch(logout({ errorMessage: result.errorMessage}))
        }

        dispatch(login(result))
    }
}

export const startCreateUserWithEmailPassword = ({email, password, displayName}) =>{
    return async(dispatch) =>{
        dispatch(checkingCredentials())
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName})
        if (!ok) {
            return dispatch(logout({errorMessage}))
        }

        dispatch(login({uid, displayName, photoURL, email}))

    }
}


export const startLoginWithEmailPassword = ({email, password}) =>{
    return async(dispatch) =>{
        dispatch(checkingCredentials())
        const { ok, displayName, uid, photoURL, errorMessage } = await loginWithEmailPassword({email, password})
        if (!ok) {
            return dispatch(logout({errorMessage}))
        }

        dispatch(login({displayName, uid, photoURL, email}))
    }
}