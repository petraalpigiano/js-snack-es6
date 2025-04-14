// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bike = [
  {
    name: "bike1",
    weight: 300,
  },
  {
    name: "bike2",
    weight: 274,
  },
  {
    name: "bike3",
    weight: 140,
  },
  {
    name: "bike4",
    weight: 463,
  },
];

console.log(bike[2].weight);

for (let i = 0; i < 1; i++) {
  const currentBike = bike[2];
  console.log(currentBike.weight);
}
