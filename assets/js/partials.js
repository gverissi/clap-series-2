
// CONSTANTES
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"].reverse()
const TYPES = ["d", "c", "h", "s"].reverse()
const VALUES_NAME = {
	"2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10",
	"J": "jack", "Q": "queen", "K": "king", "A": "ace"
}
const TYPES_NAME = {"d": "diamonds", "c": "clubs", "h": "hearts", "s": "spades"}
const CARDS = {
	as: "A", king: "K", queen: "Q", jack: "J",
	ten: "10", nine: "9", height: "8",
	seven: "7", six: "6", five: "5",
	four: "4", three: "3", two: "2"
}
const DECK_52 = VALUES.map(v => TYPES.map(t => v + t)).flat()

// Monkey Patching to shuffle the deck
Array.prototype.shuffle = function() {
	let deck = this.slice(0, this.length)
	let shufDeck = []
	let index = 0
	let size = deck.length
	for (var j = 0; j < size; j++) {
		index = Math.floor(Math.random() * deck.length)
		shufDeck.push(deck[index])
		deck.splice(index, 1);
	}
	return shufDeck
}

// Get the file name of a card: c = "Ac" => return "ace_of_clubs.png"
function getCardName(c) {
	let v = c.slice(0, c.length - 1)
	let t = c.charAt(c.length-1)
	return `assets/images/cards/${[VALUES_NAME[v], TYPES_NAME[t]].join('_of_')}.png`
}

// Get the value of multiple cards: cards = ["9s", "2h"] => type = ["9", "2"]
function getCardsValue(cards) {
	return cards.map(card => card.slice(0, card.length - 1))
}

// Get the type of multiple cards: cards = ["9s", "2h"] => type = ["s", "h"]
function getCardsType(cards) {
	return cards.map(card => card.charAt(card.length - 1))
}

// Get all indexes of an occurence in an array (return false if none)
function allIndexOf(arr, value) {
	if (arr.indexOf(value) >= 0) {
		let res = []
		for( let i = arr.indexOf(value); i >= 0; i = arr.indexOf(value,i+1) ) {
			res.push(i);
		}
		return res
	}
	else return false
}

// Get the number of occurences
function nbOccurences(arr, value) {
	let indexes = allIndexOf(arr, value)
	if (indexes != false) return indexes.length
	else return false
}

// Get the power of a hand
function getHandPower(hand) {

	if (isAFull(hand)) {
		return 267 * getValuePower(hand[0]) // [534 3738]
	}
	else if (isAFlush(hand)) {
		return 38 * getValuePower(hand[0]) // [114 532]
	}
	else if (isAPair(hand)) {
		return 8 * getValuePower(hand[0]) // [16 112]
	}
	else {
		return getValuePower(hand[0]) // [2 14]
	}

}

// Get the power of a card (range = [2 14])
function getValuePower(card) {
	let value = card.charAt(0)
	if (value == "1") value = value + "0"
	switch (value) {
		case "J":
			return 11
		case "Q":
			return 12
		case 'K':
			return 13
		case 'A':
			return 14
		default:
			return Number(value)
	}
}

// Get the power of a type (range = [1 4])
function getTypePower(card) {
	let type = card.charAt(card.length-1)
	switch (type) {
		case "d":
			return 1
		case "c":
			return 2
		case 'h':
			return 3
		case 's':
			return 4
	}
}

// Monkey Patching to compare 2 arrays
Array.prototype.isEqualTo = function(arr) {
	return this.length === arr.length && this.every((value, index) => value === arr[index])
}