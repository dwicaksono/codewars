function toWeirdCase(string) {
  //TODO
  var arr = string.split(" ");
  var beforeOut = [];
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    var temp = arr[i].split("");
    for (let j = 0; j < temp.length; j++) {
      console.log(temp[j]);
      if (j % 2 === 0) {
        temp[j] = temp[j].toUpperCase();
      } else {
        temp[j] = temp[j].toLowerCase();
      }
    }
    beforeOut.push(temp);
  }
  for (let i = 0; i < beforeOut.length; i++) {
    result.push(beforeOut[i].join(""));
  }
  return result.join(" ");
  //   for (let i = 0; i < arr.length; i++) {
  //     var evenUppercase = [];
  //     console.log(arr[i]);
  //     for (let j = 0; j < arr[i].length; j++) {
  //       console.log(arr[i][j]);
  //       console.log(j);
  //       if (j % 2 === 0) {
  //         evenUppercase.push(arr[i][j].toUpperCase());
  //       } else {
  //         odd.push(arr[i][j]);
  //       }
  //     }
  //   }
  //   odd;
  //   evenUppercase;
  //   arr;
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i]);
  //     for (let j = 0; j < arr[i].length; j++) {
  //       if (j % 2 === 0) {
  //         result.push(evenUppercase.shift());
  //       } else {
  //         result.push(odd.shift());
  //       }
  //     }
  //   }
  //   result.join(",");
  //   console.log(result)
}

console.log(toWeirdCase("This"), "ThIs");
console.log(toWeirdCase("is"), "Is");
console.log(toWeirdCase("This is a test"), "ThIs Is A TeSt");
