import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Missions from "../pages/Missions";
import Reports from "../pages/Reports";

export default function AppRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Dashboard/>}/>
            <Route path = "/missions" element = {<Missions/>}/>
            <Route path = "/reports" element = {<Reports/>}/>
        </Routes>
        </BrowserRouter>
    )
}