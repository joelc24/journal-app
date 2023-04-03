import { Navigate, Route, Routes } from "react-router-dom"
import JorunalPage from "../pages/JorunalPage"


const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<JorunalPage/>} />

        <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default JournalRoutes