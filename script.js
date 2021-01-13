
var fruits = ["Banana", "Orange", "Apple", "Mango", "PineApple", "Cherry"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.sort();
  document.getElementById("demo").innerHTML = fruits;
}
