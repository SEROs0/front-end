import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './page/Home.jsx'
import Login from './page/Login.jsx'
import HG from './page/HG.jsx'
import SD from './page/SD.jsx'
import RG from './page/RG.jsx'
import MG from './page/MG.jsx'
import PG from './page/PG.jsx'
import MEGA from './page/MEGA.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Signin from './page/Signin.jsx'
import Profile from './page/Profile.jsx'



const router = createBrowserRouter ([
    {
        path :"/",
        element : <Home/>
    },
    {
        path :"/LOGIN",
        element : <Login/>
    },
    {
        path :"/SIGNIN",
        element : <Signin/>
    },
    {
        path :"/SIGNINTOLOGIN",
        element : <Login/>
    },
    {
        path :"/SD",
        element : <SD/>
    },
    {
        path :"/HG",
        element : <HG/>
    },
    {
        path :"/RG",
        element : <RG/>
    },
    {
        path :"/MG",
        element : <MG/>
    },
    {
        path :"/PG",
        element : <PG/>
    },
    {
        path :"/MEGASIZE",
        element : <MEGA/>
    },
    {
        path :"/PROFILE",
        element : <Profile/>
    },

])




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)