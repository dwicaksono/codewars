function enough(cap, on, wait) {
  // your code here
  var passe = on + wait;
  passe;
  if (passe > cap) {
    return Math.abs(passe - cap);
  }
  return 0;
}

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);
