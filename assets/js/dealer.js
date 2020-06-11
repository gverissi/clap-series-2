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


var heroHandIndexes = []
var vilainHandIndexes = []
var winnerHandIndexes = []

function dealer() {
	id_chipSound.play()

	id_play_btn.disabled = true

	// Create a shuffled deck of 52 cards
	let deck = DECK_52.shuffle()
	
	// Create arrays of all cards (9) and url's for the images id
	let allCards = deck.slice(0, 9)
	let imagesSrc = allCards.map(card => getCardName(card))

	// Set of cards
	let comonCards = allCards.slice(4, 9)
	let heroCards = [deck[0], deck[2], comonCards].flat()
	let vilainCards = [deck[1], deck[3], comonCards].flat()

	// Hands
	let heroHand = bestCombo(heroCards)
	let vilainHand = bestCombo(vilainCards)

	// Hand name
	let heroHandName = ""
	if (isAFull(heroHand)) heroHandName = "Full !"
	else if(isAFlush(heroHand)) heroHandName = "Flush !"
	else if(isAPair(heroHand)) heroHandName = "Pair !"
	else heroHandName = "Hauteur !"
	let vilainHandName = ""
	if (isAFull(vilainHand)) vilainHandName = "Full !"
	else if(isAFlush(vilainHand)) vilainHandName = "Flush !"
	else if(isAPair(vilainHand)) vilainHandName = "Pair !"
	else vilainHandName = "Hauteur !"
	
	// Winner
	let winnerHand = compareCombos(heroHand, vilainHand)
	let isHeroWin = winnerHand.isEqualTo(heroHand)
	let isVilainWin = winnerHand.isEqualTo(vilainHand)

	// Indexes hand
	heroHandIndexes = []
	heroHand.forEach(card => {
		heroHandIndexes.push(allCards.indexOf(card))
	})
	vilainHandIndexes = []
	vilainHand.forEach(card => {
		vilainHandIndexes.push(allCards.indexOf(card))
	})
	winnerHandIndexes = []
	winnerHand.forEach(card => {
		winnerHandIndexes.push(allCards.indexOf(card))
	})

	// Store the winner
	localStorage.isHeroWin = isHeroWin
	localStorage.isVilainWin = isVilainWin

	// Flip cards one by one
	let idSwitchCard = setInterval(switchCard, 200)
	let i = 0
	function switchCard() {
		if (i == 9) {
			funMessage(isHeroWin, isVilainWin, heroHandName, vilainHandName)
			clearInterval(idSwitchCard)
		}
		else {
			flipCard(IMAGES_ID[i], imagesSrc[i])
			i++
		}
	}

	// // Display all cards at once
	// for (let k = 0; k < 9; k++) {
	// 	IMAGES_ID[k].src = imagesSrc[k]
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


// Message win, loose or duce
function funMessage(isHeroWin, isVilainWin, heroHandName, vilainHandName) {
	if (isHeroWin && isVilainWin) {
		id_index_text1.innerText = "Egalité !"
		id_message.style.backgroundColor = "#f0ad4e"
		id_text_hero_res.innerText = "Gagnant :"
		id_text_hero.style.backgroundColor = "#f0ad4e"
		id_text_vilain_res.innerText = "Gagnant :"
		id_text_vilain.style.backgroundColor = "#f0ad4e"
	}
	else if (isHeroWin) {
		id_index_text1.innerText = "Vous avez gagné !"
		id_message.style.backgroundColor = "#5cb85c"
		id_text_hero_res.innerText = "Gagnant :"
		id_text_hero.style.backgroundColor = "#5cb85c"
		id_text_vilain_res.innerText = "Perdant :"
		id_text_vilain.style.backgroundColor = "#d9534f"
	}
	else {
		id_index_text1.innerText = "Vous avez perdu !"
		id_message.style.backgroundColor = "#d9534f"
		id_text_hero_res.innerText = "Perdant :"
		id_text_hero.style.backgroundColor = "#d9534f"
		id_text_vilain_res.innerText = "Gagnant :"
		id_text_vilain.style.backgroundColor = "#5cb85c"
	}
	id_text_hero_hand.innerText = heroHandName
	id_text_vilain_hand.innerText = vilainHandName
	id_message.style.visibility = "visible"
	id_text_hero.style.visibility = "visible"
	id_text_vilain.style.visibility = "visible"
	winnerHandIndexes.forEach(ind => {
		IMAGES_ID[ind].classList.add("highlight")
	});
}


// Function to flip the cards
function flipCard(elem, src) {
	// id_flipSound.play()
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