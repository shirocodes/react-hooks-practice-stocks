import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortBy] = useState("")
  const [stocks, setStocks] = useState([])
  const [filterBy, setFilterBy] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((stocks) => setStocks(stocks))
  }, [])

  //handle buy stocks
  function handleBuyStockClick(addedStock) {
    setPortfolio([...portfolio, addedStock])
  }

  //remove stock fromthe portfolio
  function handleSellStock(stock) {
    setPortfolio(portfolio.filter((s) => s.id !==stock.id))
  }
  
  return (
    <div>
      <SearchBar sortBy={sortBy} setSortBy={setSortBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={stocks}
          onBuyStock={handleBuyStockClick}
          sortBy={sortBy} 
        />
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
