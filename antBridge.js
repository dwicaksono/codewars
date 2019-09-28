var antBridge = function(ants, terrain) {
  // Your code here!

  var cutNum = 0;

  for (let i = 0; i < terrain.length; i++) {
    if (terrain[i] === ".") {
      cutNum++;
    }
  }
  cutNum;
  var limit = ants.length - cutNum;
  var split = ants.split("");
  var arr = split.slice("0, limit");
  var arr1 = split.slice(limit);
  var antMove = arr1.concat(arr).join("");

  for (let i = 0; i < terrain.length; i++) {
    if (terrain[i] === ".") {
      return antMove;
    }
  }
  return ants;
};

// console.log(antBridge("GFEDCBA", "------------...-----------"), "EDCBAGF");
console.log(
  antBridge("LKJIHGFEDCBA", "----......------.....---....-...------"),
  "ALKJIHGFEDCB"
);

// console.log(antBridge("GFEDCBA", "-----------------------"), "GFEDCBA");
