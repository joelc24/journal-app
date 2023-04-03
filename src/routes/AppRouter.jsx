import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AuthRouter = lazy(()=> import("../auth/routes/AuthRoutes"))
const JournalRouter = lazy(()=> import("../journal/routes/JournalRoutes"))

const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={<AuthRouter/>}/>

        {/* JournalApp */}
        <Route path="/*" element={<JournalRouter/>}/>
    </Routes>
  )
}

export default AppRouter