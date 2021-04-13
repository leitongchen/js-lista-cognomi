var surnameList = [ "Stark", "Baratheon", "Lannister", "Tyrell", "Tully", "Greyjoy", "Martell", "Arryn", "Bolton", "Umber", "Karstark", "Reed", "Glover", "Mormont", "Flint", "Hornwood", "Manderly", "Dustin", "Tallhart", "Cerwyn", "Ryswell", "Mallister", "Frey", "Whent", "Bracken", "Blackwood", "Vance", "Piper", "Mooton", "Darry", "Smallwood", "Westerling", "Payne", "Clegane", "Swyft", "Crakehall", "Marbrand", "Greenfield", "Lorch", "Yarwyck", "Hetherspoon", "Lefford", "Royce", "Waynwood", "Corbray", "Egen", "Hunter", "Lynderly", "Templeton", "Baelish", "Hightower", "Redwyne", "Tarly", "Oakheart", "Peake", "Fossoway", "Florent", "Merryweather", "Rowan", "Uller", "Yronwood", "Dayne", "Allyrion", "Blackmont", "Jordayne", "Gargalen", "Qorgyle", "Santagar", "Manwoody", "Dalt", "Selmy", "Dondarrion", "Swann", "Caron", "Tarth", "Errol", "Estermont", "Morrigen", "Trant", "Wylde", "Musgood", "Grandison", "Peasebury", "Harlaw", "Goodbrother", "Drumm", "Blacktyde", "Botley", "Merlyn", "Sparr", "Humble", "Rosby", "Massey", "Rykker", "Stokeworth", "Celtigar", "Velaryon", "Gaunt", "Chelsted", "Blount", "Thorne", "Targaryen"];


// trasformare i cognomi in uppercase
var surnameListUppercase = [];
for (var i = 0; i < surnameList.length; i++) {

    surnameListUppercase.push(surnameList[i].toUpperCase());

}

// Controllo dell'input dell'utente
var inputDetected = false
do {

    var userSurname = prompt("Il cognome che inserirai verrà inserito nell'elenco delle più prestigiose casate di Westeros.").trim().toUpperCase();

    if (parseInt(userSurname)) {
        alert("Il tuo input non è valido. Prego inserire solo caratteri dell'alfabeto.")

    } else if (userSurname !== null && userSurname !== "") {


        inputDetected = true;

    }

} while (!inputDetected);

//controllo se il cognome esiste già nell'array surnameList
var n = 0;
var existingSurname = false;
while (n < surnameListUppercase.length) {

    var watchedSurname = surnameListUppercase[n];

    if (userSurname === watchedSurname) {

        existingSurname = true;
        alert("Il cognome " + userSurname + " che hai inserito è già presente nel nostro indice.")

    }

    n++
}

if (!existingSurname) {

    surnameListUppercase.push(userSurname);

}


var surnamesContainer = document.getElementById("surnames-list-container");
var infoAContainer = document.getElementById("info-A-container");
var infoBContainer = document.getElementById("info-B-container");

// ordinare i cognomi in ordine alfabetico
var alphabeticList = surnameListUppercase.sort();

//Determinare la posizione del cognome inserito in userSurname 
var listPosition = alphabeticList.indexOf(userSurname.toUpperCase());



//console.log("Il tuo cognome " + (userSurname.toUpperCase()) + " si trova alla posizione " + (listPosition + 1) + ".");
//console.log("Qui di seguito l'elenco delle casate di Westeros in ordine alfabetico:")


infoAContainer.innerHTML = "Il cognome <span class='selected_name'> <strong>" + (userSurname.toUpperCase()) + "</strong></span> <br> si trova alla posizione <span class='selected_name'><strong>" + (listPosition + 1) + "</strong></span>.";
infoBContainer.innerHTML = "Consulta l'elenco delle casate di Westeros in ordine alfabetico: "
//stampare l'elenco dei cognomi con la numerazione
for (var j = 0; j < alphabeticList.length; j++) {

    if (userSurname === alphabeticList[j]) {
        surnamesContainer.innerHTML += "<li><span class='selected_name'>" + (j+1) + " " + alphabeticList[j] + "</span></li>";

        
    } else {
        surnamesContainer.innerHTML += "<li>" + (j+1) + " " + alphabeticList[j] + "</li>";

    }

    //console.log((j + 1) + " " + alphabeticList[j]);


}




/* var i = 0;
while (i < surnameList.length) {

    var watchedSurname = surnameList[i];
    var existingSurname = false;

    if (userSurname === watchedSurname) {

        alert("Il cognome che vuoi inserire è già presente nel nostro indice.")

    } else {

        surnameList.push(userSurname);
        inputDetected = true;

    }
    i++
} */







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