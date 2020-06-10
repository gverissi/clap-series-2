/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 * 
 * Exemple dealer() => [["As", "3s", "2h", "8d", "8s"], ["As", "3s", "2h", "8d", "8s"]]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 */

function dealer() {

	play_btn.disabled = true

	// Create a shuffled deck of 52 cards
	let deck = DECK_52.shuffle()
	
	// Create arrays of id's and url's
	let imagesId = [heroCard1, vilainCard1, heroCard2, vilainCard2, card1, card2, card3, card4, card5]
	let allCards = deck.slice(0, 9)
	let imagesSrc = allCards.map(card => getCardName(card))

	// Set of cards
	let comonCards = allCards.slice(4, 9)
	let heroCards = [deck[0], deck[2], comonCards].flat()
	let vilainCards = [deck[1], deck[3], comonCards].flat()

	// Hands
	let heroHand = bestCombo(heroCards)
	let vilainHand = bestCombo(vilainCards)
	
	// Winner
	let winnerHand = compareCombos(heroHand, vilainHand)
	let isHeroWin = winnerHand.isEqualTo(heroHand)
	let isVilainWin = winnerHand.isEqualTo(vilainHand)

	// if (isHeroWin && isVilainWin) {
	// 	text_message.innerText = "Egalité"
	// 	message.style.backgroundColor = "#f0ad4e"
	// 	message.style.visibility = "visible"
	// }
	// else if (isHeroWin) {
	// 	text_message.innerText = "Vous avez gagné"
	// 	message.style.backgroundColor = "#5cb85c"
	// 	message.style.visibility = "visible"
	// }
	// else {
	// 	text_message.innerText = "Vous avez perdu"
	// 	message.style.backgroundColor = "#d9534f"
	// 	message.style.visibility = "visible"
	// }

	// Flip cards one by one
	let idSwitchCard = setInterval(switchCard, 200)
	let i = 0
	function switchCard() {
		if (i == 9) {
			funMessage(isHeroWin, isVilainWin)
			clearInterval(idSwitchCard)
		}
		else {
			flipCard(imagesId[i], imagesSrc[i])
			i++
		}
	}

	// // Display all cards at once
	// for (let k = 0; k < 9; k++) {
	// 	imagesId[k].src = imagesSrc[k]
	// }

	console.log("Pour le hero :")
	console.log("isAPair = ", isAPair(heroCards))
	console.log("isAFlush = ", isAFlush(heroCards))
	console.log("isAFull = ", isAFull(heroCards))
	console.log("heroHand = ", heroHand)

	console.log("Pour le vilain :")
	console.log("isAPair = ", isAPair(vilainCards))
	console.log("isAFlush = ", isAFlush(vilainCards))
	console.log("isAFull = ", isAFull(vilainCards))
	console.log("vilainHand = ", vilainHand)

	console.log("Winner :")
	console.log("bestCombo = ", winnerHand)
	
	console.log("==================")

}


function funMessage(isHeroWin, isVilainWin) {
	if (isHeroWin && isVilainWin) {
		text_message.innerText = "Egalité"
		message.style.backgroundColor = "#f0ad4e"
		message.style.visibility = "visible"
	}
	else if (isHeroWin) {
		text_message.innerText = "Vous avez gagné"
		message.style.backgroundColor = "#5cb85c"
		message.style.visibility = "visible"
	}
	else {
		text_message.innerText = "Vous avez perdu"
		message.style.backgroundColor = "#d9534f"
		message.style.visibility = "visible"
	}
}


function flipCard(elem, src) {
	// cardFlip.play()
	let width = elem.width
	let sign = 1
	let speed = 48
	let pos = 0
	let toggle = false

	function flip() {
		if (pos >= width && !toggle) {
			sign = -1
			toggle = true
			elem.src = src
			window.requestAnimationFrame(flip)
		}
		else if (pos <= 0 && toggle) {
			elem.style.width = "100%"
			return
		}
		else {
			pos = pos + sign*speed
			elem.style.width = width - pos + 'px'
			elem.style.height = "100%"
			elem.style.left = pos/2 + 'px'
			window.requestAnimationFrame(flip)
		}
	}
	window.requestAnimationFrame(flip)

}