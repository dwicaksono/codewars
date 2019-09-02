// function greet(name, owner) {
//   // Add code here
//   if (name === owner) {
//     return "Hello boss";
//   }else{
//       return 'Hello guest'
//   }
//}

function greet(name, owner) {
  // Add code here
  return name === owner ? "Hello boss" : "Hello guest";
}

console.log(greet("Daniel", "Daniel")); //, "Hello boss"
console.log(greet("Greg", "Daniel")); // , "Hello guest"
