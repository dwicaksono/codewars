//..
function solve(str) {
  const startIndex = str.indexOf("(");
  if (startIndex === -1) {
    return str;
  }
  const digitIndex = startIndex - 1;
  const endIndex = str.lastIndexOf(")");
  const start = str.substring(0, digitIndex);
  const digit = str.charAt(digitIndex);
  const expansion = solve(str.substring(startIndex + 1, endIndex));
  const end = str.substr(endIndex + 1);
  return (
    (digit >= "0" && digit <= "9"
      ? start + expansion.repeat(digit)
      : digit + expansion) + end
  );
}

console.log(solve("3(ab)"), "ababab");
console.log(solve("2(a3(b))"), "abbbabbb");
console.log(solve("3(b(2(c)))"), "bccbccbcc");
console.log(solve("k(a3(b(a2(c))))"), "kabaccbaccbacc");
