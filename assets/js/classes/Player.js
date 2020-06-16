
class Player {

	constructor(cards) {
		this.valueOcc = {}
		this.typeOcc = {}
		this.cards = cards
		this.valueOccurences()
		this.typeOccurences()
	}

	valueOccurences() {
		this.cards.map(card => new Card(card)).forEach(cardObj => {
			if (this.valueOcc[cardObj.value()]) {
				this.valueOcc[cardObj.value()].push(cardObj.label)
			}
			else {
				this.valueOcc[cardObj.value()] = [cardObj.label]
			}
		})
	}

	typeOccurences() {
		this.cards.map(card => new Card(card)).forEach(cardObj => {
			if (this.typeOcc[cardObj.type()]) {
				this.typeOcc[cardObj.type()].push(cardObj.label)
			}
			else {
				this.typeOcc[cardObj.type()] = [cardObj.label]
			}
		})
	}

	allIndexOf(arry, value) {
		if (arry.indexOf(value) >= 0) {
			let indexes = []
			for( let i = arry.indexOf(value); i >= 0; i = arry.indexOf(value,i+1) ) {
				indexes.push(i)
			}
			return indexes
		}
		else return []
	}

	hasAFour() {
		let nbOcc = Object.values(this.valueOcc).map(cards => cards.length)
		return nbOcc.includes(4)
	}

	hasAFull() {
		let nbOcc = Object.values(this.valueOcc).map(cards => cards.length)
		return (nbOcc.includes(3) && nbOcc.includes(2)) || this.allIndexOf(nbOcc, 3).length == 2
	}

	hasAFlush() {
		let nbOcc = Object.values(this.typeOcc).map(cards => cards.length)
		return nbOcc.includes(5) || nbOcc.includes(6) || nbOcc.includes(7)
	}

	hasAThree() {
		let nbOcc = Object.values(this.valueOcc).map(cards => cards.length)
		return nbOcc.includes(3)
	}

	hasADoublePair() {
		let nbOcc = Object.values(this.valueOcc).map(cards => cards.length)
		return this.allIndexOf(nbOcc, 2).length >= 2
	}

	hasAPair() {
		let nbOcc = Object.values(this.valueOcc).map(cards => cards.length)
		return nbOcc.includes(2)
	}

}
