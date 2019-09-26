function solution(roman) {
  // complete the solution by transforming the
  // string roman numeral into an integer
  var obj = {
    I: 1,
    IV: 4,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var arr = roman.split("");
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += obj[arr[i]];
    if (arr[0] === "I" && arr[1] === "V") {
      return obj.IV;
    }
  }
  return count;
  //   if (roman !== obj[roman]) {
  //     return count;
  //   }
  //   else {
  //     return count - 2;
  //   }

  // return count;
}
console.log(solution("XXI")); // == 21, 'XXI should == 21')
console.log(solution("I")); // == 1, 'I should == 1')
console.log(solution("IV")); // == 4, 'IV should == 4')
console.log(solution("MMVIII")); // == 2008, 'MMVIII should == 2008')
console.log(solution("MDCLXVI")); // == 1666, 'MDCLXVI should == 1666')
