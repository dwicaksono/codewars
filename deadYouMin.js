function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  var levenshtein = function(word) {
    if (word === term) {
      return 0;
    }
    if (term.length === 0) {
      return word.length;
    }
    if (word.length === 0) {
      return term.length;
    }
    var v0 = new Array(term.length + 1);
    var v1 = new Array(term.length + 1);
    for (var i = 0; i < v0.length; i++) {
      v0[i] = i;
    }
    for (var i = 0; i < word.length; i++) {
      v1[0] = i + 1;
      for (var j = 0; j < term.length; j++) {
        var cost = word.charAt(i) === term.charAt(j) ? 0 : 1;
        v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
      }
      var tmp = v0;
      v0 = v1;
      v1 = tmp;
    }
    return v0[term.length];
  };
  return this.words.sort(function(a, b) {
    return levenshtein(a) - levenshtein(b);
  })[0];
};

function TestDictionary(spec) {
  var matcher = new Dictionary(spec.words);
  spec.expectations.forEach(function(e) {
    Test.expect(
      matcher.findMostSimilar(e.query) == e.nearest,
      'expected findMostSimilar("' + e.query + '") == "' + e.nearest + '"'
    );
  });
}

TestDictionary({
  words: ["cherry", "pineapple", "melon", "strawberry", "raspberry"],
  expectations: [
    { query: "strawbery", nearest: "strawberry" },
    { query: "berry", nearest: "cherry" }
  ]
});

TestDictionary({
  words: Test.randomize([
    "javascript",
    "java",
    "ruby",
    "php",
    "python",
    "coffeescript"
  ]),
  expectations: [
    { query: "heaven", nearest: "java" },
    { query: "javascript", nearest: "javascript" }
  ]
});
