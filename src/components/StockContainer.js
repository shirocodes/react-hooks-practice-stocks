import React, {useState, useEffect} from "react";
import Stock from "./Stock";

function StockContainer({onBuyStock}) {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((stocks) => setStocks(stocks))
  }, [])

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock 
          key={stock.id}
          stock={stock}
          onStockClick={onBuyStock}
        />
      ))}
    </div>
  );
}

export default StockContainer;
