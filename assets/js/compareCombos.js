/*
 * /!\ À faire à la fin, seul ou en groupe !
 * Les tableaux cards1 et cards2 contiennent 5 cartes. L'objectif est de retourner le tableau contenant le 
 * meilleur combos :
 * 
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 * 
 */

function compareCombos(cards1, cards2) {
	
	let tri = [cards1, cards2].sort(compareHands)
	return tri[0]

}


function compareHands(hand1, hand2) {

	let pow1 = getHandPower(hand1)
	let pow2 = getHandPower(hand2)

	console.log(pow1)
	console.log(pow2)

	if (pow1 > pow2) return -1
	else if (pow1 < pow2) return 1
	else {
		let typePow1 = getTypePower(hand1[0])
		let typePow2 = getTypePower(hand2[0])
		if (typePow1 > typePow2) return -1
		else if (typePow1 < typePow2) return 1
		else {
			let i = 1
			let eq = 0
			while (eq == 0) {
				eq = compareCards(hand1[i], hand2[i])
				i++
				if (i > 4) return 0
			}
			return eq
		}
	}

}