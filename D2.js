/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 590;
const num2 = 9098;
if (num1 > num2) {
  console.log("num1 è maggiore");
} else if (num1 < num2) {
  console.log("num2 è maggiore");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("num1 = 5:", num1 === 5); /* false */
//oppure
if (num1 !== 5) {
  console.log("num1 = 5? ", "not equal");
} else {
  console.log("num1 = 5? ", "equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const divBy5 = num1 % 5;
console.log("num1 è divisibile per 5?", divBy5 === 0); /* true */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = 8;
const num4 = 24;
if (num3 === 8 || num3 + num4 === 8 || num3 - num4 === 8) {
  console.log(
    "O uno dei valori dei due numeri o il risultato della loro somma/sottrazione è uguale a 8"
  );
} else {
  ("Nessuno dei valori è = 8, nessun risultato della loro somma/sottrazione è = 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 49;
if (totalShoppingCart >= 50) {
  console.log(
    "Hai diritto alla spedizione gratuita! Il tuo totale è di: ",
    totalShoppingCart
  );
} else {
  console.log(
    "Il costo di spedizione al tuo indirizzo è di 10 euro. Il tuo totale è di: ",
    totalShoppingCart + 10 + " euro"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const sconto = (totalShoppingCart * 20) / 100;
console.log("sconto: ", sconto);
const newTotal20 = totalShoppingCart - sconto;
console.log("Totale scontato:", newTotal20 + " euro");

if (newTotal20 >= 50) {
  console.log(
    "Hai diritto alla spedizione gratuita! Il tuo totale è di: ",
    newTotal20
  );
} else {
  console.log(
    "Il costo di spedizione al tuo indirizzo è di 10 euro. Il tuo totale è di: ",
    newTotal20 + 10 + " euro"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let max;
let mid;
let min;
if (num1 > num2 && num1 > num3) {
  max = num1;
  if (num2 > num3) {
    mid = num2;
    min = num3;
  } else {
    mid = num3;
    min = num2;
  }
} else if (num2 > num1 && num2 > num3) {
  max = num2;
  if (num1 > num3) {
    mid = num1;
    min = num3;
  } else {
    mid = num3;
    min = num1;
  }
} else {
  max = num3;
  if (num1 > num2) {
    mid = num1;
    min = num2;
  } else {
    mid = num2;
    min = num3;
  }
}
console.log(
  "Numeri in ordine decrescente: ",
  max,
  mid,
  min
); /* In questo caso si rivela vera la seconda condizione (if else)
      quindi il risultato in console è 9098 590 8 */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("num1 è un numero?", !isNaN(num1)); /* Risposta console: true */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 % 2 === 0) {
  console.log(num1 + " " + "è un numero pari!");
} else {
  console.log(num1 + " " + "è un numero dispari!");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
//me.push({ city: "Toronto" }); non è un array
//me.city = "Toronto"; funziona ma non so perchè
const newMe = structuredClone(me);

newMe.city = "Toronto";
console.log("Es.11", newMe);
//?? come faccio a metterlo in fondo?

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete newMe.lastName;
console.log("Es.12", newMe);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
newMe.skills.pop();
console.log("Es.13", newMe);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [];
array.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "10");
console.log("Es.14", array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.splice(9, 1, "100");
console.log("Es.15", array);
