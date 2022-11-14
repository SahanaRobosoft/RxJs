function getStocksOver(stocks, minPrice) {
  return stocks.filter((stock) => stock.price >= minPrice);
}
var expensiveStocks = getStocksOver(
  [
    { symbol: "dfg", price: 1345.45, volume: 14567 },
    { symbol: "hjl", price: 67.78, volume: 457 },
    { symbol: "yulk", price: 3245.45, volume: 3667 },
  ],
  500
);
console.log(expensiveStocks);
