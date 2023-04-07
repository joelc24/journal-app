import { useMemo, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

import { setActiveNote } from "../../../store/journal/journalSlice"
import { startDelethingNote, startSaveNote, startUploadingFiles } from "../../../store/journal/thunks"

import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'


const NoteView = () => {
    const dispatch = useDispatch()
    const { activeNote: { id, body, title, date, imageUrls }, messageSaved, isSaving } = useSelector((state) => state.journal)
    const { register, reset, getValues } = useForm({
        defaultValues: {
            title,
            body
        }
    })

    useEffect(() => {
        reset({title, body})
    }, [title, body])

    useEffect(() => {
      if (messageSaved.length) {
        Swal.fire('Nota actualizada', messageSaved, 'success')
      }
    }, [messageSaved])
    
    

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        const options =  {weekday: "long", year: "numeric", month: "long", day: "numeric"}
        return newDate.toLocaleDateString('es-Es', options)
    }, [date])

    const fileInputRef = useRef()

    const onSaveNote = () =>{
        const titulo = getValues('title')
        const cuerpo = getValues('body')
        dispatch(setActiveNote({ id, title: titulo, body: cuerpo, date, imageUrls}))
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({target}) =>{
        if (target.files === 0) {
            return 
        }

        dispatch(startUploadingFiles(target.files))
    }

    const onDelete = () =>{
        dispatch(startDelethingNote())
    }

  return (
    <Grid container direction="row" justifyContent="space-between" sx={{mb: 1}} alignItems="center" className='animate__animated animate__fadeIn animate__faster'>
        <Grid item>
            <Typography fontSize={39} fontWeight="ligth">{ dateString }</Typography>
        </Grid>
        <Grid item>
            <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={onFileInputChange}
                style={{display: 'none'}}
            />

            <IconButton
                color="primary"
                disabled={isSaving}
                onClick={()=> fileInputRef.current.click()}
            >
                <UploadOutlined/>
            </IconButton>

            <Button disabled={isSaving} color="primary" sx={{ p:2}} onClick={onSaveNote}>
                <SaveOutlined xs={{ fontSize: 30, mr: 1}}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un titulo"
                label="Titulo"
                sx={{ border: 'none', mb: 1 }}
                {...register('title')}
            />

            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Que sucedio en le dia de hoy?"
                label="Body"
                minRows={5}
                {...register('body')}
            />
        </Grid>

        <Grid container justifyContent="end">
            <Button
                onClick={onDelete}
                sx={{ mt: 2 }}
                color="error"
            >
                <DeleteOutline/>
                Borrar
            </Button>
        </Grid>

        {/* Galeria de imagenes */}
        <ImageGallery
            images={imageUrls}
        />
    </Grid>
  )
}

export default NoteView
