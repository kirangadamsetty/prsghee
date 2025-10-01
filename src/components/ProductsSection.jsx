import "../styles/productssection.css"
import {useContext, useState} from "react"
import {ProductContext} from "../utils/ProductContext.jsx"
import { CartContext } from "../utils/CartContext.jsx"
import Modal from "./Modal.jsx"
function ProductsSection() {
    const {cartData,setCartData} = useContext(CartContext)
    const [allquantity, setAllquantity] = useState(null)
    const [quantityButton,setQuantityButton] = useState("")
    const [selectedProduct, setSelectedProduct] = useState([])
    const {productsData} = useContext(ProductContext)
    const [finalPrice, setFinalPrice] = useState(null)
      const [showModal, setShowModal] = useState(false)
      const handleModalButton = () => {
  if (quantityButton === "") {
    alert("Please select the quantity.");
    return; 
  }

  const updatedData = [...cartData];
  const index = updatedData.findIndex((item) => item.id === selectedProduct.id && item.selectedQuantity === quantityButton);

  if (index !== -1) {
    updatedData[index].totalQuantity = updatedData[index].totalQuantity + 1;
    setCartData(updatedData);
  } else {
    setCartData((prev) => [
      ...prev,
      {
        ...selectedProduct,
        selectedQuantity: quantityButton,
        totalQuantity: 1,
        finalPrice : finalPrice
      },
    ]);
   
  }
  setShowModal(false);
  setQuantityButton("");
};


  return (
    <section className="container my-5" id = "products">
      <h2 className="text-center mb-4" style={{ color: "#437459", fontWeight:"bold" }}>
        Our Products
      </h2>
      <div className="row">
        {productsData.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 border-0">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body ">
                <h5 className="card-title" style={{ color: "#437459" }}>
                  {product.name}
                </h5>
                <p className="card-text">{product.desc}</p>
                <p className="fw-semibold" style = {{fontSize:"20px"}}>{product.price}</p>
                <button onClick = {()=>{setSelectedProduct(product);setAllquantity(product.quantity);setShowModal(!showModal)}} className="btn shadow" style={{ background: "#437459", color: "white" }}>
            Add to Cart
          </button>
         
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && <Modal>
      <div className = "d-flex justify-content-between">
 <p>Select quantity</p>
 <button className="btn shadow" onClick = {()=>setShowModal(!showModal)} style={{ background: "white", color: "#437459", fontWeight:"500" }}>
            close
          </button>
      </div>
           

            {
                allquantity.map((item)=>{
                    const res = Object.keys(item)[0]
                    const val = Object.values(item)[0]
                    return <button onClick = {()=>{setQuantityButton(res);setFinalPrice(val)}}  style = {{backgroundColor:res === quantityButton ? "#437459" : "white" , color:res === quantityButton ? "white" : "#437459", marginRight:"10px",border:"1px solid", borderRadius:"5px"}} key = {item.id}>{res}</button>
                })
            }
            <div>
<button onClick = {handleModalButton} className="btn shadow block mt-4" style={{ background: "#437459", color: "white" }}>
            Add to Cart 
          </button>
            </div>
  
      </Modal>
     } 
    </section>
  );
}

export default ProductsSection;
