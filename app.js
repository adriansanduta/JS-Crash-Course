/* CONVERTING TEMPERATURES */

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;
console.log (fahrenheit);

/* If else */

let subscribed = false
let loggedIn = true
if (subscribed === true ) {
    console.log('show the video')
}
else if (loggedIn === true) {
    console.log('tell the user to upgrade their subscription')
}
else {
    console.log('tell user to log into account')
}

/* Amount practice */

let cash = 50
let price = 40
let difference = cash - price 
if (cash > price) {
    console.log(`You paid extra here's ${difference} dollars change`)
}
else if (cash === price) {
    console.log ("you paid the exact amount, have a nice day!")
}
else {
    console.log(`not enough money - you still owe ${difference} dollars`)
}
