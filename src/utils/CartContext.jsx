import {createContext, useState, useEffect } from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) =>{
    const [cartData, setCartData] = useState([])
    const [totalBillPrice,setTotalBillPrice]  = useState(1)
    const [finalTotalQuantity, setFinalTotalQuantity] = useState(1)

useEffect(() => {
  const result = cartData.reduce(
    (sum, item) => sum + item.totalQuantity * item.finalPrice,
    0
  );

  const totalQuantityResult = cartData.reduce((sum, item)=>{
     return sum + item.totalQuantity
  },0)


  setTotalBillPrice(result);
  setFinalTotalQuantity(totalQuantityResult)
}, [cartData]);

    const handleProductQuantity  = (quan, item) =>{
        const uni = `${item.id}-${item.selectedQuantity}`
        const updatedData = [...cartData]
        const index = updatedData.findIndex((item)=>`${item.id}-${item.selectedQuantity}`=== uni)
        updatedData[index].totalQuantity = quan 
           setCartData(updatedData)

    } 
    
    

    return(
        <CartContext.Provider value = {{finalTotalQuantity,totalBillPrice,cartData, setCartData, handleProductQuantity}}>
            {children}
        </CartContext.Provider> 
    )
} 
export default CartContextProvider








      








