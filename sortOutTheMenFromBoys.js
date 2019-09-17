// function menFromBoys(arr) {
//   //your code here
//   var men = [];
//   var boys = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       men.push(arr[i]);
//     } else {
//       boys.push(arr[i]);
//     }
//   }
//   men.sort(sortMen);
//   boys.sort(sortBoys);
//   //var output = men.concat(boys);
//   return Array.from(new Set(men.concat(boys)));
// }
// function sortMen(a, b) {
//   return a - b;
// }
// function sortBoys(a, b) {
//   return b - a;
// }
function menFromBoys(arr) {
  arr = Array.from(new Set(arr));
  let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
  let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  return even.concat(odd);
}

console.log(menFromBoys([7, 3, 14, 17])); // [14,17,7,3];
console.log(menFromBoys([2, 43, 95, 90, 37])); //, [2,90,95,43,37]);
console.log(menFromBoys([20, 33, 50, 34, 43, 46])); //, [20,34,46,50,43,33]);
console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85])); //, [72,76,82,100,91,85]);
console.log(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1])); //, [2,10,17,15,1]);
console.log(menFromBoys([-32, -39, -35, -41])); //, [-32,-35,-39,-41]);
console.log(menFromBoys([-64, -71, -63, -66, -65])); //, [-66,-64,-63,-65,-71]);
console.log(menFromBoys([-94, -99, -100, -99, -96, -99])); //, [-100,-96,-94,-99]);
console.log(menFromBoys([-53, -26, -53, -27, -49, -51, -14])); //, [-26,-14,-27,-49,-51,-53]);
console.log(menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30])); //, [-86,-56,-30,-15,-17,-33,-45,-85]);
console.log(menFromBoys([12, 89, -38, -78])); //, [-78,-38,12,89]);
console.log(menFromBoys([2, -43, 95, -90, 37])); //, [-90,2,95,37,-43]);
console.log(menFromBoys([82, -61, -87, -12, 21, 1])); //, [-12,82,21,1,-61,-87]);
console.log(menFromBoys([63, -57, 76, -85, 88, 2, -28])); //, [-28,2,76,88,63,-57,-85]);
console.log(menFromBoys([49, 818, -282, 900, 928, 281, -282, -1])); //, [-282,818,900,928,281,49,-1]);
