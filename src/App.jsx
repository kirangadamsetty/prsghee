import {createBrowserRouter, Outlet} from "react-router-dom" 
import TopNavbar from "./components/TopNavbar.jsx" 
import "./App.css"
import {lazy, Suspense} from "react"
const Home = lazy(() => import("./Pages/Home.jsx"));
function App(){
  return(
    <div>
      <TopNavbar/>
      <Suspense fallback = {<div>Loading....</div>}><Outlet/></Suspense>
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



















