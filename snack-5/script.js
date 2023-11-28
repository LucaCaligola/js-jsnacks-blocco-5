// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti


const array = [

{   nome: 'Volley Club', punti: getRandomNumber(), falli: getRandomNumber()},
{   nome: 'Volley X', punti: getRandomNumber(), falli: getRandomNumber()},
{   nome: 'Volley Y', punti: getRandomNumber(), falli: getRandomNumber()},
{   nome: 'Volley Z', punti: getRandomNumber(), falli: getRandomNumber()}
]
console.log(array)

function getRandomNumber(min,max) {
    min = 1;
    max = 90;
    return Math.floor(Math.random() * (max - min) + min);
}
