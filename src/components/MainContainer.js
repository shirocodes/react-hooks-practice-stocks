import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [portfolio, setPortfolio] = useState([])

  function handleBuyStockClick(addedStock) {
    setPortfolio([...portfolio, addedStock])

  }
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer onBuyStock={handleBuyStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
