const names = ["Alice", "Anders", "Ben", "Mari", "Marie", "Xander"];

const filteredNames = names.filter(filterNames);
const filteredNames2 = names.filter(filterNames2);

function filterNames(name) {
  // toLowerCase will convert the first array so everything is lowercase
  // but the output when console.log will be with captial on the first letter
  if (name.toLowerCase().startsWith("m")) {
    return true;
  }
}

function filterNames2(name) {
  if (name.toLowerCase().includes("e")) {
    return true;
  }
}

// this looks more nice and shorter
const filteredNames3 = names.filter((name) => name.toLowerCase().includes("n"));

console.log(names);
console.log(filteredNames);
console.log(filteredNames2);
console.log(filteredNames3);
