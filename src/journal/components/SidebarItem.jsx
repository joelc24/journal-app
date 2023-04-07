import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { setActiveNote } from '../../../store/journal/journalSlice'

const SidebarItem = ({id, title, body, date, imageUrls}) => {

    const dispatch = useDispatch()

    const newtiTle = useMemo(() => {
        return title.length > 17
        ? title.substring(0,17) + '.....'
        : title
    }, [title])

    const activeNote = () =>{
        dispatch(setActiveNote({id, title, body, date, imageUrls}))
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={activeNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newtiTle} />
                    <ListItemText secondary={body} />

                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

export default SidebarItem