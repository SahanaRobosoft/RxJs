var Observable = Rx.Observable;
var button = document.getElementById("button");
// var handler = function (e) {
//   alert("Button clicked!");
// };
// button.addEventListener("click", handler);
var clicks = Observable.fromEvent(button, "click");

var points = clicks.map((e) => {
  return { x: e.clientX, y: e.clientY };
});
var subscription = points.forEach(
  function onNext(point) {
    alert("clicked:" + JSON.stringify(point));
    subscription.dispose();
  },
  function onError(error) {
    console.log("ERROR!");
  },
  function onCompleted() {
    console.log("done");
  }
);
