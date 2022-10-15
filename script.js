let pOne = [];
let pTwo = [];
let discardPile = []
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

let cards = [];
let round = 1;

const rawBtn = document.getElementsByClassName('draw');
const playBtn = document.getElementsByClassName('play-cards')
const discard = document.getElementsByClassName('discard');
const playerContainer = document.getElementById('playerContainer')



function repeat(n, action) {
     for (let i = 0; i < n; i++) {
          action(i);
     }
}

repeat(8, i => {
     cards.push(`On round ${i + 1}, you get ${i + 3} cards`);
     while (alphabet.length) {
          pOne = alphabet.splice(alphabet.length * Math.random(), 3);

          pTwo = alphabet.splice(alphabet.length * Math.random(), 3);
     }

});



// console.log(cards);
// pOne = alphabet.splice(0, 3);
// pTwo = alphabet.splice(0, 3);


// pOne = alphabet.splice(0, 3);
// pTwo = alphabet.splice(0, 3)
// console.log(pOne);
// console.log(pTwo);



// while loop as a counter
// function calculateHand(rounds) {
//           let cards = 0;
//      for (rounds = rounds; rounds < 9; rounds++) {
//           cards = rounds.value += 2
//           rounds += 1
//           const newMessage = () => {`
// <h3>Round : ${rounds}</h3>`
// }
//           divEl = document.querySelector('#divOne').value
//        }
//      console.log(cards)
// }

// Quiddlr
/*
  Rules:
    - You can only hold that rounds' min cards in hand (Ex: round 1 is 3 cards in hand)
    - you have to have rounds' min cards to go out and get points
    - option to draw on each turn
    - you have to discard on each turn
    - player has option to pick up previous players' discard
   
  Notes:
    - Submit button to indicate player going out
    - variable for the min cards each round: Number
    - variable to keep track on round: Number
    - variable for discard letter
    - deck of alphabet: Array of objects
    - p1 cards: Array
    - p2 cards: Array
    
   Classes {
       player class
        props:
          - hand
          - points: 0
        methods:
          - drawCard
          - discard
          - submit
          
      computer (inherits from player)
      
       game class
        methods:
          - dealCards
          - shuffle
          - validate
          - tallyScore
   }
  
*/

const buttonEl = document.querySelector('.button')

const minCards = 3

class Player {
     constructor() {
          this.hand = []
     }
}

const P1 = new Player()
const P2 = new Player()


class Deck {
     constructor() {
          this.deck = "abcdefghijklmnopqrstuvwxyz".split('')
     }

     dealCards(p1, p2) {
          for (let i = 0; i < minCards; i++) {
               const random1 = this.deck[Math.floor(Math.random() * this.deck.length)]
               p1.hand.push(random1)
               this.deck.splice(random1, 1)
               



               const random2 = this.deck[Math.floor(Math.random() * this.deck.length)]
               console.log(random2)
               p2.hand.push(random2)
               this.deck.splice(random2, 1)

          }
          console.log("player1: ", p1.hand.join(' '))
          let p1Hand = p1.hand.join(' ')
          console.log("player2: ", p2.hand.join(' '))
          let p2Hand = p2.hand.join(' ')
          
     }
}

const deck = new Deck()

const newDeck = ()=> {
     deck.dealCards(P1, P2)}

class Game {
     constructor() {
          this.round = 0
          this.minCards = 3
     }

     deal(round, minCards){
          for (round = 1; round <=8; round ++){
               this.round +=1
               this.minCards = this.round + 2
          }
          //console.log("round: ", repeat(pOne))
          console.log("cards: ", game.minCards)
     } 
     // decision(bool) {
     //      let booleanValue = console.log(Math.random() < 0.5); 
     //      if (booleanValue === true){
     //           console.log('yes')
     //      } 
     //           else {console.log('no')}
     //      //50% probability of getting true)
     // }
     // reset()
}
const game = new Game()
//------------------------------

//look at players cards atm and put them on screen
function displayCards() {
     playerContainer.innerHTML =   P1.hand.map((card)=> {
          return (
               `<h1>${card}</h1>`
          )

     })
}


newDeck()
displayCards()
