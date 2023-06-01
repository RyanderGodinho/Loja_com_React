import "./style.css";
import data from "../../data";
import { useState } from "react";

export default function Content({ handleOpenDescription }) {
  return (
    <div className="container-content">
      <div className="container-items">
        {data.map((shoe) => {
          return (
            <div
              key={shoe.id}
              className="item"
              onClick={() => handleOpenDescription(shoe)}
            >
              <img src={shoe.image} alt="shoe" />
              <span className="title">{shoe.name}</span>
              <span className="price">
                <span className="old-price">R$ {shoe.oldPrice.toFixed(2)}</span>
                <span className="new-price">
                  R$ {shoe.currentPrice.toFixed(2)}
                </span>
              </span>
              <span className="payment">
                <span className="payment-option">
                  6x R$ {(shoe.currentPrice / 6).toFixed(2)}
                </span>
                <span className="last">Sem juros</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
