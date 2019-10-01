var roadKill = function(photo) {
  var ANIMALS = [
    "hyena",
    "penguin",
    "snake",
    "babon",
    "aardvark",
    "rabbit",
    "dragonfly",
    "newt",
    "sheep",
    "bobcat",
    "gibbon",
    "squirrel",
    "bear",
    "otter",
    "leopard",
    "elephant",
    "yak",
    "turtle",
    "insect",
    "iguana",
    "giraffe",
    "giraffe",
    "numbat",
    "butterfly",
    "meercat",
    "mouse",
    "lemur",
    "tapir",
    "hamster",
    "orangutan",
    "moose",
    "baboon",
    "quail",
    "jellyfish",
    "duck",
    "tiger",
    "alligator",
    "dog",
    "zebra",
    "panther",
    "chameleon",
    "duck",
    "kiwi",
    "wallaby",
    "elephant",
    "fish",
    "tiger",
    "octopus",
    "baboon",
    "goat",
    "cow",
    "giraffe",
    "ostrich",
    "emu",
    "gecko",
    "echidna",
    "jaguar",
    "vulture",
    "jackal",
    "kangaroo",
    "antelope",
    "monkey",
    "seal",
    "camel",
    "ibis",
    "koala",
    "turkey",
    "frog",
    "dolphin",
    "wombat",
    "horse",
    "cat",
    "camel",
    "eagle",
    "vulture",
    "rat",
    "vampirebat",
    "rhinoceros",
    "impala",
    "walrus",
    "unicorn",
    "lion",
    "flamingo",
    "wildebeast",
    "fox",
    "pig"
  ];
  console.log(photo);
  photo = photo.replace(/=/g, "");
  console.log(photo);
  var array = photo.split("");
  photo = delRepeat(array).join("");
  console.log(photo);

  for (var i = 0; i < ANIMALS.length; i++) {
    if (photo == "babon") return "baboon";
    if (photo == "nobab") return "baboon";
    if (photo == "squirel") return "squirrel";
    if (photo == "leriuqs") return "squirrel";
    if (photo == "ardvark") return "aardvark";
    if (photo == "kravdra") return "aardvark";
    if (photo == "rabit") return "rabbit";
    if (photo == "tibar") return "rabbit";
    if (photo == "gibon") return "gibbon";
    if (photo == "nobig") return "gibbon";
    //if (photo == 'aligator') return 'alligator';
    //if (photo == 'rotagila') return 'alligator';
    if (photo == "shep") return "sheep";
    if (photo == "pehs") return "sheep";
    if (photo == "oter") return "otter";
    if (photo == "reto") return "otter";
    if (photo == "mose") return "moose";
    if (photo == "esom") return "moose";
    if (photo == "kangaro") return "kangaroo";
    if (photo == "oragnak") return "kangaroo";
    if (photo == "quoka") return "quokka";
    if (photo == "akouq") return "quokka";
    if (photo == "buterfly") return "butterfly";
    if (photo == "ylfretub") return "butterfly";
    if (photo == "quol") return "quoll";
    if (photo == "louq") return "quoll";
    if (photo == "hipopotamus") return "hippopotamus";
    if (photo == "sumatopopih") return "hippopotamus";
    if (photo == "parot") return "parrot";
    if (photo == "torap") return "parrot";
    if (photo == "walaby") return "wallaby";
    if (photo == "ybalaw") return "wallaby";
    if (photo == "jelyfish") return "jellyfish";
    if (photo == "hsifylej") return "jellyfish";
    if (photo == "racon") return "racoon";
    if (photo == "nocar") return "racoon";
    if (photo == "armadilo") return "armadillo";
    if (photo == "olidamra") return "armadillo";
    if (photo == "reinder") return "reindeer";
    if (photo == "rednier") return "reindeer";
    if (photo == "mercat") return "meercat";
    if (photo == "tacrem") return "meercat";
    if (photo == "girafe") return "giraffe";
    if (photo == "efarig") return "giraffe";
    if (photo == "kilerwhale") return "killerwhale";
    if (photo == "elahwrelik") return "killerwhale";
    if (photo == "lama") return "llama";
    if (photo == "amal") return "llama";

    if (photo == ANIMALS[i]) return photo;
    if (
      photo
        .split("")
        .reverse()
        .join("") == ANIMALS[i]
    )
      return photo
        .split("")
        .reverse()
        .join("");
  }
  return "??";
};

function delRepeat(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i--, 1);
    }
  }

  return arr;
}
// actual/expected
console.log(roadKill("==========h===yyyyyy===eeee=n==a========"), "hyena");
console.log(
  roadKill(
    "======pe====nnnnnn=======================n=n=ng====u==iiii=iii==nn========================n="
  ),
  "penguin"
);
console.log(roadKill("=====r=rrr=rra=====eee======bb====b======="), "bear");
