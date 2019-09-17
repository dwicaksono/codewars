decodeMorse = function(morseCode) {
  //your code here
  var morse = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    ".----": 1,
    "..---": 2,
    "...--": 3,
    "....-": 4,
    ".....": 5,
    "-....": 6,
    "--...": 7,
    "---..": 8,
    "----.": 9,
    "-----": 0,
    "": " "
  };

  //   var arr = [];
  //   var temp = "";
  //   for (let i = 0; i < morseCode.length; i++) {
  //     if (morseCode[i] === " ") {
  //       arr.push(temp);
  //       temp = "";
  //     } else {
  //       temp += morseCode[i];
  //     }
  //   }
  //   arr.push(temp);
  //   arr;

  var twoSpace = morseCode.split(" ");
  var temp = [];
  for (let i = 0; i < twoSpace.length; i++) {
    temp.push(morse[twoSpace[i]]);
  }
  temp.join();
  temp;
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. .")); // "HEY JUDE"
