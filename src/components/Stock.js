import React from "react";

function Stock({ stock, onBuyStock}) {
  const {id, ticker, name, type, price} = stock

  function handleBuyClick() {
    onBuyStock(stock)
  }

  return (
    <div>
      <div className="card" onClick={handleBuyClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
