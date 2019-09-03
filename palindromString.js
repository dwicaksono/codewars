function isPalindrome(line) {
  line = line.toString();

  for (var i = 0; i < line.length; i++) {
    if (line.charAt(i) !== line.charAt(line.length - 1 - i)) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("anna"), true);

console.log(isPalindrome("walter"), false);

console.log(isPalindrome(12321), true);

console.log(isPalindrome(123456), false);

console.log(isPalindrome("."), true);

console.log(isPalindrome(".!!."), true);

// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false
