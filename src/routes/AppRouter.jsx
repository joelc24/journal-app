import { Routes, Route } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JorunalPage from "../journal/pages/JorunalPage";
import { useSelector } from "react-redux";
import CheckingAuth from "../ui/components/CheckingAuth";



const AppRouter = () => {

 const { status } = useSelector(state => state.auth)

  if (status == 'checking') {
    return <CheckingAuth/>
  }

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