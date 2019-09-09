function mygcd(x, y) {
  //your code here
  if (y === 0) {
    return x;
  }
  return mygcd(y, x % y);
}

console.log(mygcd(30, 12), 6);
console.log(mygcd(8, 9), 1);
console.log(mygcd(1, 1), 1);
