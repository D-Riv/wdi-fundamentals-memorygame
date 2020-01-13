let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if (cardsInPlay === 2) {
    
}else if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
}else {
    alert("Sorry, try again");
}

console.log("User flipped" + " " + cardOne);
console.log("User flipped" + " " + cardTwo);



