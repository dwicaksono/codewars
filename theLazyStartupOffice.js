function binRota(arr) {
  var output = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      output.push(arr[i]);
    } else {
      output.push(arr[i].reverse());
    }
  }
  var result = [].concat(...output);
  return result;
}

console.log(binRota([["Bob", "Nora"], ["Ruby", "Carl"]])); //,["Bob","Nora","Carl","Ruby"],"Test failed");
console.log(binRota([["Billy"]])); //,["Billy"]//,"Test failed");
console.log(binRota([["Billy", "Nancy"]])); //,["Billy","Nancy"],"Test failed");
console.log(binRota([["Billy"], ["Megan"], ["Aki"], ["Arun"], ["Joy"]])); //,["Billy", "Megan", "Aki", "Arun","Joy"],"Test failed");
console.log(
  binRota([
    ["Sam", "Nina", "Tim", "Helen", "Gurpreet", "Edward", "Holly", "Eliza"],
    ["Billy", "Megan", "Aki", "Arun", "Joy", "Anish", "Lee", "Maryan"],
    ["Nick", "Josh", "Pete", "Kavita", "Daisy", "Francesca", "Alfie", "Macy"]
  ])
); //,["Sam","Nina","Tim","Helen", "Gurpreet", "Edward", "Holly", "Eliza","Maryan","Lee","Anish","Joy","Arun","Aki","Megan","Billy","Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"], "Test failed")
console.log(
  binRota([
    ["Stefan", "Raj", "Marie"],
    ["Alexa", "Amy", "Edward"],
    ["Liz", "Claire", "Juan"],
    ["Dee", "Luke", "Elle"]
  ])
); //,["Stefan","Raj","Marie","Edward","Amy","Alexa","Liz","Claire","Juan","Elle","Luke","Dee"], "Test failed");
