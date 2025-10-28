import { useContext, useState } from "react";
import { CartContext } from "../utils/CartContext.jsx";
import Modal from "../components/Modal.jsx";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function CartPage() {
  const { cartData, handleProductQuantity, handleCancelProduct,totalBillPrice, finalTotalQuantity } =
    useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleOrderOnWhatsApp = () => {
  if (cartData.length === 0) return;

  const phoneNumber = "7730982553"; // replace with your WhatsApp number

  let message = `🛒 *Order Details* 🛒%0A%0A`;

  cartData.forEach((item, index) => {
    message += `*${index + 1}. ${item.name}*%0A`;
    message += `   📦 _Net Weight:_ ${item.selectedQuantity}%0A`;
    message += `   🔢 _Quantity:_ ${item.totalQuantity}%0A`;
    message += `   💰 _Price:_ *₹${item.finalPrice}*%0A%0A`;
  });

  message += `━━━━━━━━━━━━━━━%0A`;
  message += `📌 *Summary*%0A`;
  message += `🛍️ Total Products: *${cartData.length}*%0A`;
  message += `📦 Total Quantity: *${finalTotalQuantity}*%0A`;
  message += `💵 Total Bill: *₹${totalBillPrice}*%0A`;
  message += `━━━━━━━━━━━━━━━%0A`;
  message += `🙏 Thank you for shopping with us!`;

  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
};



  return (
    <div style={{ marginTop: "200px",marginBottom: "200px" }}>
      <Container>
        <h3 className="mb-4" style={{ fontWeight: 600, color: "#437459" }}>
          Your Cart
        </h3>

        <Row>
          <Col md={8}>
            {cartData.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartData.map((item) => (
                <Card key={`${item.id}-${item.selectedQuantity}`} className="mb-3 shadow-sm">
                  <Row className="g-0">
                    <Col md={3} className="d-flex align-items-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="img-fluid p-3"
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                      />
                    </Col>
                    <Col md={9}>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text className="text-muted">{item.desc}</Card.Text>
                        <Card.Text>
                          <strong>Price:</strong> ₹{item.finalPrice}
                        </Card.Text>
                        <Card.Text>
                          <strong>Net weight:</strong> {item.selectedQuantity}
                        </Card.Text>
                        <Card.Text>
                          <strong>Total Quantity:</strong>
                          <span
                           
                            style={{
                              marginLeft: "10px",
                              border: "1px solid #437459",
                              borderRadius: "5px",
                              padding: "1px 8px",
                            }}
                          >
                            {item.totalQuantity}
                          </span>
                          <span  onClick={() => {
                              setShowModal(!showModal);
                              setSelectedItem(item);
                            }} className = "mx-2 underline" style = {{cursor:"pointer",textDecoration:"underline",fontWight:"bold", fontSize:"20px"}}>+</span>
                        </Card.Text>
                         <button
                  onClick = {()=>handleCancelProduct(item)}
                  style={{
                    padding: "1px 8px",
                    marginRight: "8px",
                    marginTop: "10px",
                    backgroundColor: "#437459",
                    color:"white",
                    borderRadius: "5px",
                  }}
                >
                  Remove from Cart
                </button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))
            )}
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Header>
                <h5 className="mb-0">Billing Summary</h5>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between">
                  <strong>Total Products:</strong> {cartData.length}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <strong>Total Quantity:</strong> {finalTotalQuantity}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <strong>Total Price:</strong> ₹{totalBillPrice}
                </ListGroup.Item>
              </ListGroup>
              <Card.Footer>
                <button
                  className="btn w-100"
                  style={{ backgroundColor: "#437459", color: "white" }}
                  onClick={handleOrderOnWhatsApp}
                >
                  Order on Whatsapp
                </button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

      {showModal && (
        <Modal>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p>Select quantity</p>
            <button
              className="btn shadow"
              onClick={() => setShowModal(!showModal)}
              style={{ background: "white", color: "#437459", fontWeight: "500" }}
            >
              close
            </button>
          </div>

          {Array(11)
            .fill("")
            .map((_, index) => {
              return index === 0 ? null : (
                <button
                  key={index}
                  onClick={() => {
                    handleProductQuantity(index, selectedItem);
                    setShowModal(!showModal);
                  }}
                  style={{
                    padding: "1px 8px",
                    backgroundColor: "white",
                    marginRight: "8px",
                    marginTop: "10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                >
                  {index}
                </button>
              );
            })}
        </Modal>
      )}
    </div>
  );
}

export default CartPage;
