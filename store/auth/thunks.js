import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = ({correo, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}