/*
 * /!\ À faire à la fin, seul ou en groupe!
 * Le tableau cards contient 7 cartes. L'objectif est de retourner les 5 cartes permettant de faire le 
 * meilleur combo possible :
 * 
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 * 
 * À savoir : une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * Attention, une hauteur doit comporter les 5 meilleures cartes possible en sachant que la valeur 
 * prime sur le type !
 * 
 */

function bestCombo(unorderedCards) {

	let cards = orderCards(unorderedCards)
	let cardsValue = getCardsValue(cards)
	let cardsType = getCardsType(cards)
	
	let hand = []

	if (isAFull(cards)) {
		let occur = occurences(cards)
		let isAThree = false
		let isATwo = false
		for (let [key, value] of Object.entries(occur)) {
			if (value > 2 && isAThree == false) {
				isAThree = true
				occur[key] = 0
				for (let i = 0; i < cards.length; i++) {
					if (cardsValue[i] == CARDS[key]) hand.push(cards[i])
				}
			}
		}
		for (let [key, value] of Object.entries(occur)) {
			if (value > 1 && isATwo == false) {
				isATwo = true
				occur[key] = 0
				for (let i = 0; i < cards.length; i++) {
					if (cardsValue[i] == CARDS[key]) hand.push(cards[i])
				}
			}
		}
		return hand
	}
	else if(isAFlush(cards)) {
		let nbOcc = 0
		for (let t = 0; t < TYPES.length; t++) {
			type = TYPES[t]
			nbOcc = nbOccurences(cardsType, type)
			if (nbOcc > 4) {
				let indexes = allIndexOf(cardsType, type)
				for (let i = 0; i < 5; i++) {
					hand.push(cards[indexes[i]])
				}
				return hand
			}
		}
	}
	else if(isAPair(cards)) {
		let nbOcc = 0
		let indexes = []
		let value = 0
		for (let v = 0; v < VALUES.length; v++) {
			value = VALUES[v]
			nbOcc = nbOccurences(cardsValue, value)
			if (nbOcc > 1) {
				indexes = allIndexOf(cardsValue, value)
				for (let i = 0; i < indexes.length; i++) {
					hand.push(cards[indexes[i]])
				}
				let k = 0
				let j = 0
				let lim = 5 - nbOcc
				while (j < lim) {
					if (!indexes.includes(k)) {
						hand.push(cards[k])
						j++
					}
					k++
				}
				return hand
			}
		}
	}
	else {
		return cards.slice(0, 5)
	}

}