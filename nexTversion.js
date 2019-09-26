function nextVersion(version) {
  //TODO : find the next version
  var arr = version.split(".").join("");
  arr;
  var versionCount = arr;

  for (let i = 0; i < arr.length; i++) {
    if (arr === versionCount) {
      versionCount++;
    }
  }
  versionCount;
  var ok = versionCount
    .toString()
    .split("")
    .join(".");

  ok;
}
console.log(nextVersion("1.2.3"), "1.2.4");
console.log(nextVersion("0.9.9"), "1.0.0");
console.log(nextVersion("1"), "2");
console.log(nextVersion("1.2.3.4.5.6.7.9"), "1.2.3.4.5.6.7.9");
console.log(nextVersion("9.9"), "10.0");
