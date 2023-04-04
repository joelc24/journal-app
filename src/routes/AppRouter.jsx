import { Routes, Route } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JorunalPage from "../journal/pages/JorunalPage";



const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={<AuthRoutes/>} ></Route>

        {/* JournalApp */}
        <Route path="/*" element={<JorunalPage/>}/>
    </Routes>
  )
}

export default AppRouter