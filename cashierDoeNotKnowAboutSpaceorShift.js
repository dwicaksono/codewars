function getOrder(input) {
  var obj = {
    burger: "burger",
    fries: "fries",
    chicken: "chicken",
    pizza: "pizza",
    sandwich: "sandwich",
    onionrings: "onionrings",
    milkshake: "milkshake",
    coke: "coke"
  };
  var arr = [
    "burger",
    "fries",
    "chicken",
    "pizza",
    "sandwich",
    "onionrings",
    "milkshake",
    "coke"
  ];
  console.log(input);
  var str = "";
  var menu = [];
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    menu.push(input[i]);
  }
  console.log(menu);
  for (let i = 0; i < arr.length; i++) {
    var temp = "";
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      console.log(menu);
      if (arr[i][j] === menu) {
        temp += arr[i][j];
      }
    }
  }
  return "";
}

console.log(
  getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
); //"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
// console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich")); //"Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");
