// Code your solutions in this file

function writeCards(names, events) {
    let cards = [];
    for(let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        debugger;
    }
    return cards;
}


function countDown(positiveNumber) {
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
        debugger;
    }
}