import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Home from "./pages/detail/detail"
import Home from "./pages/home/home"
import Vehicles from "./pages/vehicle/vehicle"
import Login from './pages/login/login'
import Register from './pages/register/register'
import Detail from "./pages/detail/detail"

function router() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="detail/:id_vehicle" element={<Detail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    )
}

export default router