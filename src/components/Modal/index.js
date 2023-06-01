import "./style.css";
import closeIcon from "../../assets/close-icon.svg";

export default function Modal({ shoe, setIsOpen }) {
  return (
    <div className="container-modal">
      <div className="container-inner-modal">
        <div className="container-content-modal">
          <img src={shoe.image} alt="shoe description" />
          <strong>{shoe.name}</strong>
          <p>{shoe.description}</p>
          <div className="btn-div-price">
            <button>COMPRAR</button>
            <div>
              <span className="price-modal">
                <span className="old-price-modal">
                  R$ {shoe.oldPrice.toFixed(2)}
                </span>
                <span className="new-price-modal">
                  R$ {shoe.currentPrice.toFixed(2)}
                </span>
              </span>
              <span className="payment-modal">
                <span className="payment-option-modal">
                  6x R$ {(shoe.currentPrice / 6).toFixed(2)}
                </span>
                <span className="last-modal">Sem juros</span>
              </span>
            </div>
          </div>
          <img
            className="btn-close"
            src={closeIcon}
            alt="close-icon"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
