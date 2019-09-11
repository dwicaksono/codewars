function tidyNumber(n) {
  //your code here
  var stringN = n.toString();
  for (let i = 0; i < stringN; i++) {
    if (stringN[i] > stringN[i + 1]) return false;
  }
  return true;
}

console.log(tidyNumber(12), true);
console.log(tidyNumber(102), false);
console.log(tidyNumber(9672), false);
console.log(tidyNumber(2789), true);
console.log(tidyNumber(2335), true);
console.log(
  tidyNumber(12345678910121314887654393837365352426282938373736353532728)
);
