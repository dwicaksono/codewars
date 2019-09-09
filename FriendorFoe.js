function friend(friends) {
  //your code here
  //   var result = [];
  //   for (let i = 0; i < friends.length; i++)
  //     if (friends[i].length === 4) result.push(friends[i]);
  //   return result;
  return friends.filter(value => value.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"])); //, ["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])); //, ["Ryan"]
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
); // ["Jimm", "Cari", "aret"]
console.log(friend(["Love", "Your", "Face", "1"])); //, ["Love", "Your", "Face"]
