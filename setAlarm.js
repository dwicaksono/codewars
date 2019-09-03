function setAlarm(employed, vacation) {
  //   var boolean = true;
  //   if (employed === vacation) {
  //     return false;
  //   } else if (employed === boolean) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return employed && !vacation ? true : false;
}

console.log(setAlarm(true, true), "Should be false.");
console.log(setAlarm(false, true), "Should be false.");
console.log(setAlarm(true, false), "Should be true.");

// setalarm(true, true) -> false
// setalarm(false, true) -> false
// setalarm(false, false) -> false
// setalarm(true, false) -> true
