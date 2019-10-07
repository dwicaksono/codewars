// function spaghettiCode(plate) {
//   // Your code here

//   var letter = [];

//   for (let i = 0; i < plate.length; i++) {
//     var noStrip = plate[i].split("_");
//     var fil = noStrip.filter(x => x !== "");
//     letter.push(fil);
//   }

//   var letter1 = [];
//   for (let i = 0; i < letter.length; i++) {
//     for (let j = 0; j < letter[i].length; j++) {
//       letter1.push(letter[i][j]);
//     }
//   }

//   var ok = [];
//   for (let i = 0; i < letter1.length; i++) {
//     var count = 0;
//     for (let j = 0; j < letter1[i].length; j++) {
//       count++;
//     }
//     ok.push(count);
//   }
//   if (!ok.length) {
//     return "_";
//   } else {
//     var out = "";
//     for (let i = 0; i < ok.length; i++) {
//       if (Math.max(ok[i])) {
//         out = letter1[i][0];
//       }
//     }
//     return out;
//   }
//     // return "?";
// }

console.log(
  spaghettiCode([
    "AAAAAAAA____",
    "____________",
    "BBBBBB_",
    "____________",
    "CCCCCCCCCCCCCC___"
  ])
);

//   describe("ExampleTests", function() {

//     it("ex1", function() {
//       var plate = [
//         'AAAAAAAA____'.split(''),
//         '____________'.split(''),
//         'BBBBBBBBBBB_'.split(''),
//         '____________'.split(''),
//         'CCCCCC______'.split('')
//       ]
//       var info = {data: plate, count: 3, longest: 11, longestIDs: 'B'}
//       show(info)
//       var got = spaghettiCode(plate);
//       Test.expect(got != '' && info.longestIDs.includes(got))
//     });

//     it("ex2", function() {
//       var plate = [
//         'AAAAAAAAA      '.split(''),
//         '________A__CCC_'.split(''),
//         ' B   C  A    C '.split(''),
//         '_B___C__A____C_'.split(''),
//         ' B   C       C '.split(''),
//         '_B___CCCCCCCCC_'.split('')
//       ]
//       var info = {data: plate, count: 3, longest: 18, longestIDs: 'C'}
//       show(info)
//       var got = spaghettiCode(plate);
//       Test.expect(got != '' && info.longestIDs.includes(got))
//     });

//   });
