function getStockSymbols(stocks) {
  var symbols = [],
    counter,
    stock;
  for (counter = 0; counter < stocks.length; counter++) {
    stock = stocks[counter];
    symbols.push(stock.symbol);
  }
  return symbols;
}

var symbols = getStockSymbols([
  { symbol: "dfg", price: 345.45, volume: 4567 },
  { symbol: "hjl", price: 67.78, volume: 4587 },
  { symbol: "yulk", price: 35.45, volume: 667 },
]);
console.log(JSON.stringify(symbols));

// using forEach
function getStockSymbols(stocks) {
  var symbols = [];
  stocks.forEach((stock) => {
    symbols.push(stock.symbol);
  });
  return symbols;
}

var symbols = getStockSymbols([
  { symbol: "dfg", price: 345.45, volume: 4567 },
  { symbol: "hjl", price: 67.78, volume: 4587 },
  { symbol: "yulk", price: 35.45, volume: 667 },
]);
console.log(JSON.stringify(symbols));
