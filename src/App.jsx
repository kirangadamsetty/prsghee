import {createBrowserRouter, Outlet} from "react-router-dom" 
import TopNavbar from "./components/TopNavbar.jsx" 
import "./App.css"
import {lazy, Suspense} from "react"
const Home  = lazy(()=>import("./pages/Home.jsx")) 
function App(){
  return(
    <div>
      <TopNavbar/>
      <Outlet/>
    </div>
  )
}

export const appRouter = createBrowserRouter([
  {
    path : "/",

    element : <App/>,
    children : [
      {
        path :"/",
        element : <Home/>
      }
    ]
  }
])



















