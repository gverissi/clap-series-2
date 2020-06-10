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

// var count = 0

function dealer() {
	// Create a deck of 52 cards
	let deck = VALUES.map(v => TYPES.map(t => v + t)).flat().shuffle()
	// let deck = shuffle(VALUES.map(v => TYPES.map(t => v + t)).flat())
	
	// Create arrays of id's and url's
	let imagesId = [heroCard1, vilainCard1, heroCard2, vilainCard2, card1, card2, card3, card4, card5]
	let imagesSrc = [
		getCardName(deck[0]), getCardName(deck[1]), getCardName(deck[2]),
		getCardName(deck[3]), getCardName(deck[4]), getCardName(deck[5]),
		getCardName(deck[6]), getCardName(deck[7]), getCardName(deck[8])
	]

	// Preload images
	function preloadImage(url)
	{
		var img=new Image()
		img.src=url;
	}
	for (let j = 0; j < imagesSrc.length; j++) {
		preloadImage(imagesSrc[j])
	}

	// Flip cards one by one
	let idSwitchCard = setInterval(switchCard, 800)
	let i = 0
	function switchCard() {
		if (i == 8) {
			clearInterval(idSwitchCard)
		}
		flipCard(imagesId[i], imagesSrc[i])
		i++
	}

}


function flipCard(elem, src) {
	cardFlip.play()
	let width = elem.width
	let height = elem.height
	let sign = 1
	let speed = 48
	let pos = 0
	let toggle = false

	// // Method 1
	// let id = setInterval(flip, 40)
	// function flip() {
	// 	if (pos >= width && !toggle) {
	// 		sign = -1
	// 		toggle = true
	// 		elem.src = src
	// 	}
	// 	else if (pos <= 0 && toggle) {
	// 		elem.style.width = "100%"
	// 		clearInterval(id)
	// 	}
	// 	else {
	// 		pos = pos + sign*speed
	// 		elem.style.width = width - pos + 'px'
	// 		elem.style.height = "100%"
	// 		elem.style.left = pos/2 + 'px'
	// 	}
	// }
	
	// Method 2
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