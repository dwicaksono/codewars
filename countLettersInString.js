function letter_count(str) {
  // do magic
  var obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] + 1 || 1;
  }
  return obj;
}

console.log(letter_count("codewars")); //, {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1})
console.log(letter_count("activity")); //, {:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1})
console.log(letter_count("arithmetics")); //, {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2})
