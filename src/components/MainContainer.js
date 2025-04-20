import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [portfolio, setPortfolio] = useState([])

  function handleBuyStockClick(addedStock) {
    setPortfolio([...portfolio, addedStock])
  }

  //remove stock fromthe portfolio
  function handleSellStock(stock) {
    setPortfolio(portfolio.filter((s) => s.id !==stock.id))
  }
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer onBuyStock={handleBuyStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          portfolio={portfolio}
          onSellStock={handleSellStock}  
        />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
