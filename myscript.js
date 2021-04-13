var userSurname = prompt("Inserisci il tuo cognome").toLowerCase().trim();

var surnameList = ["Bianchi", "Neri", "Rossi", "Gialli", "Verdi", "Marroni", "Grigio"];

surnameList.push(userSurname);


// trasforma in minuscolo tutte le parole contenute nell'array surnameList
var surnameListLower = [];

for (var i = 0; i < surnameList.length; i++) {
    surnameListLower.push(surnameList[i].toLowerCase());
}

console.log(surnameListLower)
console.log(surnameList)


// array che contiene i cognomi ordinati 
var orderedList = []

var i = 0;

// ciclo while per prendere in analisi un cognome alla volta
while (i < surnameListLower.length) {

    // variabile che contiene il cognome preso in visione
    var revSurname = surnameListLower[i]


    // ciclo for per confrontare revSurname con listedSurname 
    // devo mettere a confronto il cognome preso in analisi "revSurname" con quelli già inseriti nell'array orderedList
    


    var j = 0
    do {

        //listedSurname prende i elementi che sono stati pushati dentro orderedList
        var listedSurname = orderedList[j]; 

        //mettere a confronto le stringhe dei cognomi:
        // ovvero confronto tra revSurname e i cognomi già presenti in orderedList, 
        // SE revSurname > listedSurname = true allora il cognome va pushato alla fine  array.push()
        // SE revSurname < listedSurname = true allora il cognome va pushato prima  array.unshift()
        
        if (orderedList !== "" || revSurname > listedSurname) {
            orderedList.push(listedSurname);
            
        } else if (revSurname < listedSurname) {

            orderedList.unshift(listedSurname);

        }
    
        j++
    } while (j < orderedList.length)

   

    i++
}

console.log(orderedList);