// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione 
// (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, 
// nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.


const automobili = [

{marca: 'BMW', modello: '18D', alimentazione: 'diesel'},
{marca: 'Mercedes', modello: 'Classe H', alimentazione: 'benzina'},
{marca: 'Ford', modello: 'mustang', alimentazione: 'Elettrico'},
{marca: 'Fiat', modello:'fiorino', alimentazione:'metano'},
{marca: 'BMW', modello: '38D', alimentazione: 'diesel'},
{marca: 'Mercedes', modello: 'Classe Y', alimentazione: 'benzina'},
{marca: 'Ford', modello: 'focus', alimentazione: 'Elettrico'},
{marca: 'Fiat', modello:'panda', alimentazione:'gpl'},
{marca: 'Ferrari', modello:'Roma', alimentazione:'benzina'},
{marca: 'Lambo', modello:'Urus', alimentazione:'benzina'}
]

const benzina = automobili.filter((Engine) => {
    if (Engine.alimentazione == 'benzina') {
        return true;
    }
    return false;
});
console.log(benzina)

const diesel = automobili.filter((Engine) => {
    if (Engine.alimentazione == 'diesel') {
        return true;
    }
    return false;
});
console.log(diesel)

const diverse = automobili.filter((Engine) => {
    if (Engine.alimentazione !== 'diesel' && Engine.alimentazione !== 'benzina') {
        return true;
    }
    return false;
});

console.log(diverse)