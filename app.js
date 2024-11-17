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
    console.log(`not enough money - you still owe ${difference * -1} dollars`)
}


/* PRACTICE */

let cash = 50
let price = 40 
let isStoreOpen = true

if (cash >= price && !isStoreOpen) {
    console.log('print the receipt')
}

/* TERNARY OPERATORS */

let hot = true

hot ? console.log('weather is hot outside') : console.log('weather is cold')

/* TERNARY 2 */

let subscribed = true
let loggedIn = true 

let str = subscribed && loggedIn ? 'show the video' : 'hide the video'
console.log(str);

/* PRACTICE STORE 2 */

let cash = 50
let price = 40
let isStoreOpen = true

let str = cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt'
console.log(str);

/* LOOPS */

let count = 1;
console.log(count);
count = count + 1;
console.log(count);

/* LOOPS (DRY) */

let count =1;

while(count <= 100) {
    console.log(count)
        count = count + 1;
}



for (let i = 0; i < 100; i++) {
    console.log(i + 1);
}

/** Write a for-loop that loops 1 to 20
 * If the number is divisble by 3, print "Frontend"
 * If the number is divisble by 5, print "Simplified"
 * If the number is divisible by 3 and 5, print "Frontend Simplified"
 * If the number is not disible by 3 or 5, print the number
 */

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`)
} 
    else if (i % 3 === 0) {
        console.log(`${i} -> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`)
    }
    else {
        console.log(`${i} -> ${i}`)
    }
}