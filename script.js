function addLength(str) {
  return str.split(" ").map((str) => str + " " + str.length);
}
console.log(addLength("apple ban"));
