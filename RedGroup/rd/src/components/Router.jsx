
import Home from "./screens/home/Home.jsx";
import CarDetail from "./screens/home/car-detail/CarDetail.jsx";
//import { Route, Routes, BrowserRouter } from "react-router";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<CarDetail/>} path="/car/:id"/>
            <Route path='*' element={<div className="text-white">Not found!</div>}/> 
        </Routes>
        </BrowserRouter>
    )

}
export default Router;