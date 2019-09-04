function findScreenHeight(width, ratio) {
  //   let parts = ratio.split(":");
  var parts = [];
  var temp = "";
  for (let i = 0; i < ratio.length; i++) {
    console.log(ratio);
    if (ratio[i] === ":") {
      parts.push(temp);
      temp = "";
    } else {
      temp += ratio[i];
    }
  }
  parts.push(temp);
  //////
  var result = "";
  var height = width / parts[0];
  var ratioHeight = height * parts[1];
  result += width + "x" + ratioHeight;
  return result;
}

console.log(findScreenHeight(1024, "4:3"), "1024x768");

console.log(findScreenHeight(1280, "16:9"), "1280x720");

console.log(findScreenHeight(3840, "32:9"), "3840x1080");
