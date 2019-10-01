function solution(str) {
  var arr = str.split("");

  var ok = [];

  for (let i = 0; i < arr.length; i = i + 2) {
    if (arr[i + 1] === undefined) {
      ok.push([arr[i], "_"]);
    } else {
      ok.push([arr[i], arr[i + 1]]);
    }
  }

  var result = [];
  for (let i = 0; i < ok.length; i++) {
    var a = [].concat(...ok[i]);
    var b = a.join("");
    result.push(b);
  }
  return result;
}
console.log(solution("abc")); // should return ['ab', 'c_']
console.log(solution("abcdef")); // should return ['ab', 'cd', 'ef']
console.log(solution("abcdefg")); // should return ['ab', 'cd', 'ef','g_']
