// Un oggetto rappresenta una finestra di un browser e contiene due campi: 
// un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:
// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.


const window =
{
   tab : ["Facebook", "GitHub", "Gmail","YouTube","X","Corriere"],
    activeTab: 0
}

const social = ["Afacebook", "GitHub", "YouTube", "X", "Corriere"];


window.tab = window.tab.filter((element)=> {

    if (social.includes(element)) {
        return true;
    }
    return false
})

console.log(newTab)