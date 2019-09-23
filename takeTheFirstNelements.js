function take(arr, n) {
  // Your code here
  var output = [];
  for (let i = 0; i < n; i++) {
    if (arr.length < n) {
      return arr;
    }
    output.push(arr[i]);
  }
  if (!arr.length) {
    return [];
  }
  return output;
}

//= [0,-1,-15,79,54,69,1,-50,-47,56,-7,36,22,42,-19,61,7,7,-54,-56,-6,1,-60,12,-54,-10,24,-4,-39,-71,24,59,-50,-14,-26,39,-42,49,33,48,-32,-32,-10,-7,-32,-34,12,58,-14,-22,46,-36,0,-9,-69,4,-11,8,-39,-34,-62,-28,-12,-40,-36,39,7,13,-35,-53,20,76,42] and n = 30:

console.log(take([0, 1, 2, 3, 5, 8, 13], 10)); //,[0, 1, 2],"should return the first 3 items");
console.log(take([0, 1, 2, 3, 5, 8, 13], 4)); //,[0, 1, 2],"should return the first 3 items");
console.log(take([], 8)); //,[0, 1, 2],"should return the first 3 items");
