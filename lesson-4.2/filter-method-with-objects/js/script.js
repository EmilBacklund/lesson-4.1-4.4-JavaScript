const people = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Anders" },
  { id: 3, name: "Mari" },
];

const filteredPeople = people.filter(filterPeople);

function filterPeople(person) {
  if (person.name.toLowerCase().startsWith("a")) {
    return true;
  }
}

console.log(people);
console.log(filteredPeople);
