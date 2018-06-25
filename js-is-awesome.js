// Just some cool ES6+ examples. Like a simple array cheat sheet so far.

const animals = [
  { name: "Zeus", species: "dog" },
  { name: "Plato", species: "dog" },
  { name: "Ursula", species: "cat" },
  { name: "Spirit", species: "horse" },
  { name: "Thunder", species: "rabbit" },
  { name: "Bolt", species: "dog" },
  { name: "Tony", species: "fish" }
];

// Using filter to just get dogs
const dogs = animals.filter(animal => animal.species === "dog");

// Using map to get all the names
const names = animals.map(animal => animal.name);

// Use map to get all the names and their respective species
const namesAndSpecies = animals.map(
  animal => `${animal.name} is a ${animal.species}`
);

// console.log(dogs);
// console.log(names);
// console.log(namesAndSpecies);

const bills = [
  { amount: 500 },
  { amount: 250 },
  { amount: 125 },
  { amount: 666 },
  { amount: 436 },
  { amount: 88 }
];

// Use reduce to get the total amount of bills we have to pay
const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);

// console.log(`${totalAmount} $`);

// Using mock data we trim, split and use reduce on it. Kinda messy but works.
const mockData = `
  george washington pot 35 4
  george washington pan 25 1
  george washington knife 60 1
  tony stark waffle iron 95 2
  tony stark ark reactor 150 1
  tony stark pickles 11 2`;

const output = mockData
  .trim()
  .split("\n")
  .map(line => line.trim().split(" "))
  .reduce((customers, line) => {
    customers[`${line[0]} ${line[1]}`] =
      customers[`${line[0]} ${line[1]}`] || [];
    customers[`${line[0]} ${line[1]}`].push({
      name: line[2],
      price: line[3],
      quantity: line[4]
    });

    return customers;
  }, {});

console.log(JSON.stringify(output, null, 2));
