import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null,
        // active: {
        //     id: '1234',
        //     title: '',
        //     body: '',
        //     date: 2324324,
        //     imageUrls: []
        // }
    },
    reducers: {
        savingNewNote: (state)=>{
            state.isSaving = true
        },
        addNewEmptyNote: (state, action)=>{
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: (state, action)=>{
            state.activeNote = action.payload
            state.messageSaved = ''
        },
        setNotes: (state, action)=>{
            state.notes = action.payload
        },
        setSaving: (state)=>{
            state.isSaving = true
            state.messageSaved = ''
        },
        updateNote: (state, action)=>{
            state.isSaving = false
            state.notes = state.notes.map((note) => {
                if (note.id === action.payload.id) {
                    return action.payload
                }
                return note
            })

            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },
        setPhotosToActiveNote: (state, action) =>{
            state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...action.payload]
        },
        clearNotesLogout: (state) =>{
            state.isSaving = false
            state.messageSaved = ''
            state.notes = []
            state.activeNote = null
        },
        deleteNoteById: (state, action)=>{
            state.activeNote = null
            state.notes = state.notes.filter((note)=> note.id !== action.payload)
        },
    }
})

export const { 
    addNewEmptyNote, 
    setActiveNote, 
    setNotes,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
    deleteNoteById,
    savingNewNote ,
    clearNotesLogout
} = journalSlice.actions