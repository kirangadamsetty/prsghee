import {createBrowserRouter, Outlet} from "react-router-dom" 
import TopNavbar from "./components/TopNavbar.jsx" 
import "./App.css"
import {lazy, Suspense} from "react"
import ProductContextProvider from "./utils/ProductContext.jsx"
const Home = lazy(() => import("./Pages/Home.jsx"));
import Shimmer from "./components/Shimmer.jsx" 
import FestivalOffer from "./components/FestivalOffer.jsx"
import CartContextProvider from "./utils/CartContext.jsx"
import CartPage from "./Pages/CartPage.jsx"
import Footer from "./components/Footer.jsx"
function App(){
  return(
    <div>
      <ProductContextProvider>
      <CartContextProvider>
      <TopNavbar/>
      <Suspense fallback = {<Shimmer/>}><Outlet/></Suspense>
              <Footer/>

      </CartContextProvider>
      </ProductContextProvider>
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
      },

      {
        path : "/festival",
        element :<FestivalOffer/>
      }
      ,{
        path : "/cart",
        element : <CartPage/>
      }
    ]
  }
])



















