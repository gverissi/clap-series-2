/*
 * /!\ À essayer seul, me mp si trop compliqué !
 *
 * Le but de cette fonction est de déterminer le nombre de cartes ayant la même valeur dans un tableau :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors occurences(cards) 
 * retournera { as: 2, seven: 1, height: 1, queen: 1 }
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 */

function occurences(cards) {
	
	let cardsValue = getCardsValue(cards)
	let count = new Object()
	let nbOcc = 0
	for (let [key, value] of Object.entries(CARDS)) {
		nbOcc = nbOccurences(cardsValue, value)
		if (nbOcc > 0) count[key] = nbOcc
	}
	return count

}