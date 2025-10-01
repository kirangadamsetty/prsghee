import {createBrowserRouter, Outlet} from "react-router-dom" 
import TopNavbar from "./components/TopNavbar.jsx" 
import "./App.css"
import {lazy, Suspense, useEffect} from "react"
import ProductContextProvider from "./utils/ProductContext.jsx"
const Home = lazy(() => import("./Pages/Home.jsx"));
import Shimmer from "./components/Shimmer.jsx" 
import CartContextProvider from "./utils/CartContext.jsx"
import CartPage from "./Pages/CartPage.jsx"
import Footer from "./components/Footer.jsx"
const About = lazy(()=>import("./Pages/About.jsx"))
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./utils/ScrollToTop.jsx"
function App(){
   useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,     // whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);  
  return(
    <div>
      <ProductContextProvider>
      <ScrollToTop/>
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
        path : "/cart",
        element : <CartPage/>
      },{
        path : "/about",
        element : <About/>
      }
    ]
  }
])



















