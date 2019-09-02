function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classPoint = 0;
  console.log(classPoints.length);
  for (let i = 0; i < classPoints.length; i++) {
    classPoint += classPoints[i];
  }
  var averange = classPoint / classPoints.length;
  if (averange > yourPoints) {
    return false;
  } else {
    return true;
  }
}

console.log(betterThanAverage([2, 3], 5), true);

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
