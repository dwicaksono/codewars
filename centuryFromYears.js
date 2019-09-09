function century(year) {
  // Finish this :)

  var years = Math.round(year / 100 + 1);
  if (year <= 100) return 1;
  //   if (year > 100 && year % 100 === 0) return Math.round(year / 100);
  if (year > 100 && year % 100 !== 0) return Math.round(year / 100 + 1);
  if (year % 1000 !== 0) return Math.round(year / 100);
}

console.log(century(1705), 18, "Testing for year 1705");
console.log(century(1900), 19, "Testing for year 1900");
console.log(century(1601), 17, "Testing for year 1601");
console.log(century(89), 1, "Testing for year 89");
console.log(century(530559), 5306, "Testing for year 5306");
