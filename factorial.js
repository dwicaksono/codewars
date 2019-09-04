function factorial(n) {
  //   let answer = 1;

  //   while (n > 0) {
  //     answer *= n;
  //     n--;
  //   }

  //   return answer;
  var output = 1;
  for (let i = n; i > 0; i--) {
    output *= n;
    n--;
  }
  return output;
}

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);
