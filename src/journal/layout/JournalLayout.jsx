import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components"
import SideBar from "../components/SideBar"

const drawerWidth = 280

const JournalLayout = ({children}) => {
  return (
    <Box
        sx={{ display: 'flex' }}
    >
        <Navbar drawerWidth={drawerWidth}/>

        <SideBar drawerWidth={drawerWidth}/>

        <Box 
            component="main"
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar/>

            { children }
        </Box>
    </Box>
  )
}

export default JournalLayout