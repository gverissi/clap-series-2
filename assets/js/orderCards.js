/*
 * /!\ À essayer seul, me mp si trop compliqué !
 * Le but de cette fonction est de réorganiser un tableau de cartes de la meilleur à la moins bonnes :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors orderCards(cards) retournera ["As", "Ad", "Qs", "8d", "7h"]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * On considère que la valeur de la carte prime sur le type de la carte
 */
function orderCards(cards) {
	
	let orderedCards = cards.slice(0, cards.length)
	return orderedCards.sort(compareCards)

}

function compareCards(card1, card2) {

	let val1 = getValuePower(card1)
	let val2 = getValuePower(card2)
	if (val1 > val2) return -1
	else if (val1 < val2) return 1
	else {
		let typ1 = getTypePower(card1)
		let typ2 = getTypePower(card2)
		if (typ1 > typ2) return -1
		else if (typ1 < typ2) return 1
		else return 0
	}

}