var exchanges = [
  [
    { symbol: "dfg", price: 345.45, volume: 4567 },
    { symbol: "hjl", price: 637.78, volume: 4587 },
  ],
  [
    { symbol: "yulk", price: 123.45, volume: 667 },
    { symbol: "yubd", price: 937.78, volume: 4687 },
  ],
];

// exchanges.forEach((exchange) =>
//   exchange.forEach((stock) => console.log(JSON.stringify(stock)))
// );

Array.prototype.concatAll = function () {
  var results = [];
  this.forEach((subArray) => {
    subArray.forEach((item) => results.push(item));
  });
  return results;
};

var stocks = exchanges.concatAll();

stocks.forEach((stock) => console.log(JSON.stringify(stock)));
