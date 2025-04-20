import React, {useMemo} from "react";
import Stock from "./Stock";

function StockContainer({stocks, onBuyStock, sortBy}) {
  console.log("StockContainer sortBy is:", sortBy);

  const sortedStocks = useMemo(() => {
    const stocksToSort = [...stocks]

    if (sortBy === "Alphabetically") {
      stocksToSort.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (sortBy === "Price") {
      stocksToSort.sort((a, b) => a.price - b.price);
    }
    return stocksToSort
  }, [stocks, sortBy])
  
  return (
    <div>
      <h2>Stocks</h2>
      {sortedStocks.map((stock) => (
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
