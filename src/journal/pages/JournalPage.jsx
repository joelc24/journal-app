import { IconButton, Typography } from "@mui/material"
import JournalLayout from "../layout/JournalLayout"
import NothingSelectedView from "../views/NothingSelectedView"
import NoteView from "../views/NoteView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../../store/journal/thunks"

const JournalPage = () => {

  const dispatch = useDispatch()
  const { isSaving, activeNote } = useSelector((state) => state.journal) 
  const onClickNewNote = () =>{
    dispatch(startNewNote())
  }

  return (
    <>
        <JournalLayout>
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus reprehenderit cumque, beatae, ut, architecto at quos qui praesentium voluptates illum. Perferendis exercitationem dolorum, ex reprehenderit ea molestiae tempora error.</Typography> */}
            {
              (!!activeNote)
              ?  <NoteView/> 
              : <NothingSelectedView/>
            }
            
          

          <IconButton
            onClick={onClickNewNote}
            disabled={isSaving}
            size="large"
            sx={{
              color: "white",
              backgroundColor: "error.main",
              ":hover": { backgroundColor: "error.main", opacity: .9 },
              position: "fixed",
              right: 50,
              bottom: 50
            }}
          >
            <AddOutlined sx={{ fontSize: 30 }}/>
          </IconButton>
        </JournalLayout>
    </>
  )
}

export default JournalPage