function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  //return dna.split("T").join("U");

  var temp = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      temp += "U";
    } else {
      temp += dna[i];
    }
  }
  return temp;
}

console.log(DNAtoRNA("TTTT"), "UUUU");
console.log(DNAtoRNA("GCAT"), "GCAU");
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
