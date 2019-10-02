function solution(number) {
  // convert the number to a roman numeral

  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  let result = "";

  for (let i = 0; i < decimal.length; i++) {
    while (decimal[i] <= number) {
      result += roman[i];
      number -= decimal[i];
    }
  }

  return result;
}

console.log(solution(1), "I");
console.log(solution(2), "II");
console.log(solution(3), "III");
console.log(solution(4), "IV");
console.log(solution(5), "V");
console.log(solution(9), "IX");
console.log(solution(10), "X");
console.log(solution(11), "XI");
console.log(solution(19), "XIX");
console.log(solution(22), "XXII");
console.log(solution(15), "XV");

console.log(solution(1000), "M");
console.log(solution(1001), "MI");
console.log(solution(1990), "MCMXC");
console.log(solution(2007), "MMVII");
console.log(solution(2008), "MMVIII");
