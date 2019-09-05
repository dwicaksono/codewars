function findNeededGuards(k) {
  // your beatiful code goes here ;)
  var count = 0;
  for (let i = 0; i < k.length - 1; i++) {
    if (k[i] !== true && k[i + 1] !== true) count++;
  }

  return count;
}

console.log(findNeededGuards([true, true, false, true, false])); // 0
console.log(findNeededGuards([false, false, true, false, false])); // 2
