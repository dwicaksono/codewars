function songDecoder(song) {
  // ...
  var arr = song.split("WUB"); //.join(" ");
  arr;

  // Your code here
  // buat list yang nama yang kembar dibuang
  var list = [];
  for (let i = 0; i < arr.length; i++) {
    var janganPush = false;
    //console.log(arr[i]);
    for (let j = 0; j < list.length; j++) {
      if (arr[i] === "") {
        janganPush = true;
      }
    }
    if (janganPush !== true) {
      list.push(arr[i]);
    }
    console.log(arr[i]);
  }
  console.log(list);

  //   return song
  //     .split("WUB")
  //     .filter(x => x !== "")
  //     .join(" ");
}
console.log(songDecoder("JKDWUBWBIRAQKFWUBYEWUBWV")); //, "jKD WBIRAQKF YE WV","WUB should be replaced by 1 space");
console.log(songDecoder("AWUBBWUBC")); //, "A B C","WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC")); //, "A B C","multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB")); //, "A B C","heading or trailing spaces should be removed");
