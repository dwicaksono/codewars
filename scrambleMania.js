function wordscore(word) {
  var obj = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10
  };

  var seplit = word.split("");
  var count = 0;
  //   for (let i = 0; i < word.length; i++) {
  //     split.push(word[i]);
  //   }

  for (let i = 0; i < seplit.length; i++) {
    count += obj[seplit[i]];
  }
  if (seplit.length >= 7) {
    return count * seplit.length + 50;
  }
  return count * seplit.length;
}

console.log(wordscore("great")); // , 30, "The expected score for 'great' was 30. "
console.log(wordscore("deceive")); //, 141, "'deceive' is seven letters, the expected result was 141"
console.log(wordscore("melon")); // , 35, "The expected score for 'melon' was 35."
