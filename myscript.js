var surnameList = ["Lannister", "Stark", "Tyrell", "Greyjoy", "Martell", "Bolton", "Tully", "Targaryen", "Baratheon", "Arryn", "Frey", "Tarly", "Mormont"];


// Controllo dell'input dell'utente
var inputDetected = false
do {

    var userSurname = prompt("Il cognome che inserirai verrà inserito nell'elenco delle più prestigiose casate di Westeros.").trim();

    if (parseInt(userSurname)) {
        alert("Il tuo input non è valido. Prego inserire solo caratteri dell'alfabeto.")
    }
    else if (userSurname !== null && userSurname !== "") {

        surnameList.push(userSurname);
        inputDetected = true;

    }

} while (!inputDetected);


// trasformare i cognomi in uppercase
var surnameListUppercase = [];

for (var i = 0; i < surnameList.length; i++) {

    surnameListUppercase.push(surnameList[i].toUpperCase());

}


// ordinare i cognomi in ordine alfabetico
var alphabeticList = surnameListUppercase.sort();


//Determinare la posizione del cognome inserito in userSurname 

var listPosition = alphabeticList.indexOf(userSurname.toUpperCase());

console.log("Il tuo cognome si trova alla posizione " + (listPosition + 1) + ".");
console.log("Qui di seguito l'elenco dei cognomi in ordine alfabetico: " + alphabeticList.join(", "))

//stampare l'elenco dei cognomi con la numerazione
for (var j = 0; j < alphabeticList.length; j++) {

    console.log((j + 1) + " " + alphabeticList[j]);

}


























/* var surnameList = ["Bianchi", "Neri", "Rossi", "Gialli", "Verdi", "Marroni", "Grigio"];


var userSurname = prompt("Inserisci il tuo cognome").toLowerCase().trim();


surnameList.push(userSurname);


// trasforma in minuscolo tutte le parole contenute nell'array surnameList
var surnameListLower = [];

for (var i = 0; i < surnameList.length; i++) {
    surnameListLower.push(surnameList[i].toLowerCase());
}

var alphabeticList = surnameListLower.sort();
console.log("Ecco l'elenco dei cognomi in ordine alfabetico: " + alphabeticList.join(", "));

*/


/*
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
    while (j <= orderedList.length) {

        //listedSurname prende i elementi che sono stati pushati dentro orderedList
        var listedSurname = orderedList[j];

        //mettere a confronto le stringhe dei cognomi:
        // ovvero confronto tra revSurname e i cognomi già presenti in orderedList,
        // SE revSurname > listedSurname = true allora il cognome va pushato alla fine  array.push()
        // SE revSurname < listedSurname = true allora il cognome va pushato prima  array.unshift()

        if (orderedList !== "" || revSurname > listedSurname) {
            orderedList.push(revSurname);

        } else if (revSurname < listedSurname) {

            orderedList.unshift(revSurname);

        }

        j++
    }


    i++
}

console.log(orderedList); */