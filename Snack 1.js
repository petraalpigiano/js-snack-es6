// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// 1° iterare gli oggetti con un for of, element.weight
// 2°crei array vuoto
// 4° if currentValue e > array[0]
// 3° push dentro array
// 5° stampare array
const bikes = [
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
    weight: 460,
  },
];
let lighterBike = bikes[1].weight;
let lighterBike2 = 0;
// LA BICI CON PESO MINORE
for (const bike of bikes) {
  const currentWeight = bike.weight;
  if (currentWeight < lighterBike) {
    lighterBike = currentWeight;
  }
}
console.log(lighterBike);
// LA BICI CON PESO MAGGIORE
for (const bike of bikes) {
  const currentWeight = bike.weight;
  if (currentWeight > lighterBike2) {
    lighterBike2 = currentWeight;
  }
}
console.log(lighterBike2);

console.log(bikes[2].weight);

for (let i = 0; i < 1; i++) {
  const currentBike = bikes[2];
  console.log(currentBike.weight);
}
