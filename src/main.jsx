 

import {appRouter} from "./App.jsx"  
import React from "react"
import ReactDOM from "react-dom/client"
import {RouterProvider} from "react-router-dom"
import "./index.css"
const root =  ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router = {appRouter}/>)














