// filter function

const numbers = [1, 3, 6, 8, 10, 13, 16];

// greater than 9

const filteredNumbers = numbers.filter(filterNumbers);

function filterNumbers(number) {
  // displays all numbers greater than 9 and can be divided by 2
  if (number % 2 === 0 && number > 9) {
    return true;
  }
}

console.log(numbers);
console.log(filteredNumbers);
