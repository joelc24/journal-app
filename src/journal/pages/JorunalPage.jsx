import { IconButton, Typography } from "@mui/material"
import JournalLayout from "../layout/JournalLayout"
import NothingSelectedView from "../views/NothingSelectedView"
import NoteView from "../views/NoteView"
import { AddOutlined } from "@mui/icons-material"

const JorunalPage = () => {
  return (
    <>
        <JournalLayout>
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus reprehenderit cumque, beatae, ut, architecto at quos qui praesentium voluptates illum. Perferendis exercitationem dolorum, ex reprehenderit ea molestiae tempora error.</Typography> */}

            <NothingSelectedView/>
            {/* <NoteView/> */}


          <IconButton
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

export default JorunalPage