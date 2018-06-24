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

console.log(dogs);
console.log(names);
console.log(namesAndSpecies);
