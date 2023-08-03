import React from "react";
import Store from "./Store";
import {createBrowserRouter,RouterProvider }from "react-router-dom"
import ErrorPage from "../error/error"
import About from "./About";


const router=createBrowserRouter([
    {path:'/Store', element:<Store/>,errorElement:<ErrorPage/>},
    {path:'/About', element:<About/>,errorElement:<ErrorPage/>}
])

function Main(){

return (
    <>
        <RouterProvider router={router} />
    </>
)

}

export default Main;
