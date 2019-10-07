var check1800 = function(str) {
  // Your code here!
  return [];
};
var show = function(s) {
  console.log(s);
  return s;
};

var equalSet = function(ary1, ary2) {
  var as = new Set(ary1),
    bs = new Set(ary2);
  if (as.size !== bs.size) return false;
  for (var a of as) if (!bs.has(a)) return false;
  return true;
};

describe("SampleTests", function() {
  it("example", function() {
    var expected = [
      "1-800-CODE-WAR",
      "1-800-CODE-YAP",
      "1-800-CODE-WAS",
      "1-800-CODE-ZAP"
    ];
    Test.expect(equalSet(show(check1800("1-800-CODE-WAR")), expected));
  });
});
