function century(year) {
  // Finish this :)

  // var years = parseInt(year / 100);
  // if (year <= 100) return 1;
  // if (year % 2 === 0) {
  //   return years;
  // } else {
  //   return years + 1;
  // }
  return Math.ceil(year / 100);
}

console.log(century(1705), 18, "Testing for year 1705");
console.log(century(1900), 19, "Testing for year 1900");
console.log(century(1601), 17, "Testing for year 1601");
console.log(century(89), 1, "Testing for year 89");
console.log(century(530559), 5306, "Testing for year 5306");
console.log(century(388767), 3888, "Testing for year 3888");
