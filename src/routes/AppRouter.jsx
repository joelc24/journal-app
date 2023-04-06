import { Routes, Route, Navigate } from "react-router-dom";

import JournalRoutes from "../journal/routes/JournalRoutes";
import AuthRoutes from "../auth/routes/AuthRoutes";
import CheckingAuth from "../ui/components/CheckingAuth";

import { useCheckAuth } from "../hooks/useCheckAuth";



const AppRouter = () => {

  const { status } = useCheckAuth()
 

  if (status == 'checking') {
    return <CheckingAuth/>
  }

  return (
    <Routes>

      {
        (status == 'authenticated') 
        ?  <Route path="/*" element={<JournalRoutes/>}/>
        : <Route path="/auth/*" element={<AuthRoutes/>} ></Route>
      }

      <Route path="/*" element={<Navigate to='/auth/login'/>} />

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={<AuthRoutes/>} ></Route> */}

        {/* JournalApp */}
        {/* <Route path="/*" element={<JorunalPage/>}/> */}
    </Routes>
  )
}

export default AppRouter