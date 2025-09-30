import { createPortal } from "react-dom";
import "../styles/modal.css"
function Modal({ children }) {
  return createPortal(
    <div className="overlay">
      <div className="modal-box">
        {children}
      </div>
    </div>,
    document.getElementById("modal-dom")
  );
}

export default Modal;
