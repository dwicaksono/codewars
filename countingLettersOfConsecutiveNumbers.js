function letterCounter(m, n) {
  //   return 0;
  var objNum = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "0": "zeor"
  };

  var comb = [m, n];
  var arr = comb.sort((a, b) => a - b);
  //   console.log(arr[0]);
  //   console.log(arr[1]);
  var max = arr[1];
  var min = arr[0];
  var count = [];

  var split = [...Array(max - min + 1)]
    .map((item, index) => min + index)
    .join("");

  var arr = split.split("");
  arr;
  var out = "";
  for (let i = 0; i < arr.length; i++) {
    console.log(objNum[arr[i]]);
    out += objNum[arr[i]];
  }
  console.log(out.length + 1);
}
console.log(letterCounter(3, 6), 16);
console.log(letterCounter(84, 82), 30);
// console.log(letterCounter(113, 114), 36);
// console.log(letterCounter(1, 1000000), 44872010);
