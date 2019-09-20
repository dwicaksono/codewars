function getAges(sum, difference) {
  var arr2 = (sum - difference) / 2;
  var arr1 = arr2 + difference;
  if (arr1 < 0 || arr2 < 0 || sum < 0 || difference < 0) {
    return null;
  }
  return [arr1, arr2];
}

console.log(getAges(24, 4), [14, 10]);
console.log(getAges(63, -14), null);
