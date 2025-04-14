//Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function generateRandomNumber(max, min) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

const squad = [
  {
    name: "squadra1",
    pointsScored: 0,
    foulsSuffered: 0,
  },
  {
    name: "squadra2",
    pointsScored: 0,
    foulsSuffered: 0,
  },
  {
    name: "squadra3",
    pointsScored: 0,
    foulsSuffered: 0,
  },
  {
    name: "squadra4",
    pointsScored: 0,
    foulsSuffered: 0,
  },
];

for (let i = 0; i < squad.length; i++) {
  const currentSquad = squad[i];
  currentSquad.pointsScored = generateRandomNumber(20, 1);
  currentSquad.foulsSuffered = generateRandomNumber(20, 1);
}

console.log(squad);
