import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { firebaseDB } from "../../src/firebase/config"
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice"
import { loadNotes } from "../../src/helpers/loadNotes"
import { fileUpload } from "../../src/helpers/fileUpLoad"


export const startNewNote = () =>{
    return async(dispatch, getState)=>{
        dispatch(savingNewNote())
        const { uid } = getState().auth
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        }

        const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes` ))
        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
        
    }
}


export const startLoadingNotes = () => {
    return async(dispatch, getState) =>{
        const { uid } = getState().auth
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const startSaveNote = () =>{
    return async(dispatch, getState) =>{
        dispatch(setSaving())
        const { uid } = getState().auth
        const { activeNote: { id, ...noteToFireStore } } = getState().journal
        
       const docRef = doc( firebaseDB, `${uid}/journal/notes/${id}` )
       await setDoc(docRef, noteToFireStore, { merge: true })

       dispatch(updateNote({ id, ...noteToFireStore }))

    }
}

export const startUploadingFiles = (files = []) =>{
    return async(dispatch) =>{

        const fileUploadPromises = []
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const photosUrl = await Promise.all(fileUploadPromises)
        dispatch(setPhotosToActiveNote(photosUrl))
    }
}


export const startDelethingNote = () =>{
    return async(dispatch,getState) =>{
        const { uid } = getState().auth
        const { activeNote } = getState().journal
        const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`)
        await deleteDoc(docRef)

        dispatch(deleteNoteById(activeNote.id))
    }
}