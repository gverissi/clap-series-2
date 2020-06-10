
// CONSTANTES
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const TYPES = ["d", "c", "h", "s"]
const VALUES_NAME = {
	"2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10",
	"J": "jack", "Q": "queen", "K": "king", "A": "ace"
}
const TYPES_NAME = {"d": "diamonds", "c": "clubs", "h": "hearts", "s": "spades"}

// // Preload images
// var images = []
// function preload() {
//     for (var i = 0; i < arguments.length; i++) {
//         images[i] = new Image()
//         images[i].src = preload.arguments[i]
//     }
// }
// let deck = VALUES.map(v => TYPES.map(t => v + t)).flat()
// preload(deck.map(c => getCardName(c)))

// Shuffle the deck
// ================

// Method 1: Monkey Patching
Array.prototype.shuffle = function() {
	let shufDeck = []
	let index = 0
	let size = this.length
	for (var j = 0; j < size; j++) {
		index = Math.floor(Math.random() * this.length)
		shufDeck.push(this[index])
		this.splice(index, 1);
	}
	return shufDeck
}

// Method 2: function
// function shuffle(deck) {
// 	let shufDeck = []
// 	let index = 0
// 	let size = deck.length
// 	for (var j = 0; j < size; j++) {
// 		index = Math.floor(Math.random() * deck.length)
// 		shufDeck.push(deck[index])
// 		deck.splice(index, 1);
// 	}
// 	return shufDeck
// }
// ============================================================================

// Get the file name of a card: c = "Ac" => return "ace_of_clubs.png"
function getCardName(c) {
	let v = c.slice(0, c.length - 1)
	let t = c.charAt(c.length-1)
	return `assets/images/cards/${[VALUES_NAME[v], TYPES_NAME[t]].join('_of_')}.png`
}

// Get the value of multiple cards: cards = ["9s", "2h"] => type = ["9", "2"]
function getCardsValue(cards) {
	//TODO
}

// Get the type of multiple cards: cards = ["9s", "2h"] => type = ["s", "h"]
function getCardsType(cards) {
	//TODO
}