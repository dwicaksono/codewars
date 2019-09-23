// function itinerary(travel) {
//   // here your code
//   var arrIn = [];
//   var arrOut = [];
//   for (let i = 0; i < travel.length; i++) {
//     arrIn.push(travel[i].in);
//     arrOut.push(travel[i].out);
//   }
//   var arr1d = [];
//   if (arrIn[1] === arrOut[0]) {
//     arr1d.push(arrIn, arrOut[1]);
//   } else {
//     for (let j = 0; j < travel.length; j++) {
//       arr1d.push(Object.values(travel[j]));
//     }
//   }
//   var comb = [].concat(...arr1d);
//   return comb.join("-");
// }

function itinerary(travel) {
  var stations = [travel[0].in];
  for (var i = 0; i < travel.length; i++) {
    if (stations[stations.length - 1] !== travel[i].in) {
      stations.push(travel[i].in);
    }
    if (stations[stations.length - 1] !== travel[i].out) {
      stations.push(travel[i].out);
    }
  }
  console.log(stations[stations.length - 1]);
  stations;
  return stations.join("-");
}

console.log(itinerary([{ in: "TRN", out: "FCO" }])); //, "TRN-FCO")
// console.log(itinerary([{ in: "TRN", out: "FCO" }, { in: "CIA", out: "JFK" }])); //, "TRN-FCO-CIA-JFK")
console.log(itinerary([{ in: "TRN", out: "FCO" }, { in: "FCO", out: "JFK" }])); //, "TRN-FCO-JFK")
// console.log(itinerary([{ in: "TRN", out: "FCO" }, { in: "CIA", out: "TRN" }])); //, "TRN-FCO-CIA-TRN")
// console.log(itinerary([{ in: "TRN", out: "FCO" }, { in: "FCO", out: "TRN" }])); //, "TRN-FCO-TRN")
// console.log(
//   itinerary([
//     { in: "TRN", out: "FCO" },
//     { in: "FCO", out: "CIA" },
//     { in: "CIA", out: "FRA" },
//     { in: "FRA", out: "JFK" },
//     { in: "JFK", out: "CIA" },
//     { in: "CIA", out: "GOA" },
//     { in: "GOA", out: "CIA" }
//   ])
// ); // 'TRN-FCO-CIA-FRA-JFK-CIA-GOA-CIA')
// console.log(
//   itinerary([
//     { in: "TRN", out: "FCO" },
//     { in: "FCO", out: "TRN" },
//     { in: "TRN", out: "NCE" },
//     { in: "NCE", out: "PAR" },
//     { in: "PAR", out: "JFK" },
//     { in: "JFK", out: "MIA" },
//     { in: "MIA", out: "FCO" },
//     { in: "FCO", out: "CIA" },
//     { in: "CIA", out: "TRN" }
//   ])
// ); //'TRN-FCO-TRN-NCE-PAR-JFK-MIA-FCO-CIA-TRN', 'TRN-FCO-TRN-NCE-PAR-JFK-MIA-FCO-CIA-TRN'
