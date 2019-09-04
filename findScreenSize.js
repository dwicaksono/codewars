function findScreenHeight(width, ratio) {
  //   let parts = ratio.split(":");
  let parts = [];
  var temp = "";
  for (let i = 0; i < ratio.length; i++) {
    console.log(ratio[i]);
    if (ratio[i] === ":") {
      parts.push(temp);
      temp = "";
    } else {
      temp += ratio[i];
    }
  }
  temp;
  parts.push(temp);
  parts;

  let piece = width / parts[0];

  let height = piece * parts[1];

  return width + "x" + height;
}

console.log(findScreenHeight(1024, "4:3"), "1024x768");

console.log(findScreenHeight(1280, "16:9"), "1280x720");

console.log(findScreenHeight(3840, "32:9"), "3840x1080");
