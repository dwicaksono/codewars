function sortGrades(lst) {
  //your code here
  let grades = ["VB", "V0", "V0+"];
  for (let i = 1; i <= 17; i++) {
    grades.push("V" + i);
  }
  return lst.sort((a, b) => grades.indexOf(a) - grades.indexOf(b));
}
console.log(sortGrades(["V7", "V12", "V1"])); //, ["V1", "V7", "V12"]);
console.log(sortGrades(["V13", "V14", "VB", "V0"])); //, ["VB", "V0", "V13", "V14"]);
console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"])); //, ["VB", "V0", "V0+", "V2", "V6", "V16"]);
console.log(sortGrades(["V7"])); //, ["V7"]);
console.log(sortGrades([])); //, []);
