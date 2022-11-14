var stocks = [
  { symbol: "dfg", price: 345.45, volume: 4567 },
  { symbol: "hjl", price: 637.78, volume: 4587 },
  { symbol: "yulk", price: 123.45, volume: 667 },
];

var filterStockSymbols = stocks
  .filter((stock) => stock.price >= 150.0)
  .map((stock) => stock.symbol);

filterStockSymbols.forEach((symbol) => {
  console.log(symbol);
});
