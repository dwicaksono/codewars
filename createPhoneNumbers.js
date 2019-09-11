function createPhoneNumber(numbers) {
  //return "("+numbers[0]+numbers[1]+numbers[2]+")"+" "+numbers[3]+numbers[4]+numbers[5]+"-"+numbers[6]+numbers[7]+numbers[8]+numbers[9]
  ///////
  //  numbers = numbers.join('');
  //   return '(' + numbers.substring(0, 3) + ') '
  //       + numbers.substring(3, 6)
  //       + '-'
  //       + numbers.substring(6);
  ////
  var format = "(xxx) xxx-xxxx";
  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}
console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "(123) 456-7890"
);
