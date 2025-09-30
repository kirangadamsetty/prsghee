import {createContext} from "react"
import {productsData} from "./productsData.jsx"


export const ProductContext = createContext()


const ProductContextProvider = ({children}) =>{
   return(
    <ProductContext.Provider value = {{productsData}}>
          {children}
    </ProductContext.Provider>
   )
}
export default ProductContextProvider












