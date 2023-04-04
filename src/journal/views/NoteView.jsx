import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"


const NoteView = () => {
  return (
    <Grid container direction="row" justifyContent="space-between" sx={{mb: 1}} alignItems="center">
        <Grid item>
            <Typography fontSize={39} fontWeight="ligth">28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ p:2}}>
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
            />

            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Que sucedio en le dia de hoy?"
                label="Titulo"
                minRows={5}
            />
        </Grid>

        {/* Galeria de imagenes */}
        <ImageGallery/>
    </Grid>
  )
}

export default NoteView
