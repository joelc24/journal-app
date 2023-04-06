import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { firebaseAuth } from "./config"

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            uid,
            displayName,
            email,
            photoURL
        }

    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }


}


export const registerUserWithEmailPassword = async({email, password, displayName})=>{
    try {
        const result = await createUserWithEmailAndPassword(firebaseAuth, email, password)

        const { uid, photoURL  } = result.user
        await updateProfile(firebaseAuth.currentUser, { displayName })
        return {
            ok: true,
            uid, 
            photoURL,
            email,
            displayName
        }
        
    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}


export const loginWithEmailPassword = async({ email, password}) =>{
    try {
        const result = await signInWithEmailAndPassword(firebaseAuth, email, password)
        const { displayName, photoURL, uid } = result.user

        return {
            ok: true,
            displayName, 
            email, 
            photoURL, 
            uid
        }

    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const logoutFirebase = async()=>{
    return await firebaseAuth.signOut()
}