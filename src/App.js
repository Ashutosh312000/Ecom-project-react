import './App.css';
import {createBrowserRouter,RouterProvider }from "react-router-dom"
import ErrorPage from "./components/error/error"
import About from "./components/Main/About"
import Store from "./components/Main/Store"
import RootLayout from './components/pages/RootLayout'
import Home from './components/Main/Home';

const router=createBrowserRouter([
  {
    path:'/',element:<RootLayout/>,errorElement:<ErrorPage/>, 
    children:[
      {path:'/', element:<Home/>,errorElement:<ErrorPage/>},
    {path:'/Store', element:<Store/>,errorElement:<ErrorPage/>},
    {path:'/About', element:<About/>,errorElement:<ErrorPage/>}
  ]
  },
  
    
])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
