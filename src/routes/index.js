import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginAndSignUp from '../Components/LoginAndSignUp'
import Cart from '../pages/Cart'
import DeletePage from "../pages/Delete Product"
import AddPage from "../pages/Add Product"

export const MyRoutes=()=>{
    return(
        <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
            <Route exact path='/login' element={<LoginAndSignUp/>}></Route>
            <Route exact path='/signup' element={<LoginAndSignUp/>}></Route>
            <Route exact path="/profile" element={<LoginAndSignUp/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
            <Route exact path="/delete" element={<DeletePage/>}></Route>
            <Route exact path="/add" element={<AddPage/>}></Route>
        </Routes>
    )
}