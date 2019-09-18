function solution(str, ending) {
  // TODO: complete
  var revStr = [];
  var revEnding = [];
  for (let i = str.length; i >= 0; i--) {
    if (str[i] !== undefined) {
      revStr.push(str[i]);
    }
  }
  for (let i = ending.length; i >= 0; i--) {
    console.log(ending[i]);
    if (ending[i] !== undefined) {
      revEnding.push(ending[i]);
    }
  }
  var count = 0;
  for (let i = 0; i < revStr.length; i++) {
    if (revStr[i] === revEnding[i]) {
      count++;
    }
  }
  if (count === ending.length) {
    return true;
  }
  return false;
  //   return str.endsWith(ending);
}

console.log(solution("abcde", "cde"), true);
console.log(solution("abcde", "abc"), false);
console.log(solution("ails", "fails"), false);
