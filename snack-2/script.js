// Crea un array di oggetti che rappresentino delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, 
// una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.


const persone = [

{nome: 'Gino', cognome:'Rossi', eta:'75'},
{nome: 'Mario', cognome:'Rossini', eta:'15'},
{nome: 'Gina', cognome:'Paoli', eta:'34'},
{nome: 'Maria', cognome:'Benedetti', eta:'23'},
{nome: 'Fab', cognome:'Martinelli', eta:'17'},
{nome: 'Luca', cognome:'Rossi', eta:'52'},
{nome: 'Jhon', cognome:'Kabe', eta:'69'},
{nome: 'Pino', cognome:'Sala', eta:'88'},
]

const newArray = persone.map((frase)=> {

    if (frase.eta > 18){
    return frase.nome + ' ' + frase.cognome + ' può guidare'
    }
    else 
    {return frase.nome + ' ' + frase.cognome + ' non può guidare'}
})
console.log(newArray)