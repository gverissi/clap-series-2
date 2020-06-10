
function playAgain() {
	
	// Create arrays of id's and url's
	let imagesId = [heroCard1, vilainCard1, heroCard2, vilainCard2, card1, card2, card3, card4, card5]

	// Display all cards at once
	for (let k = 0; k < 9; k++) {
		imagesId[k].src = "assets/images/cards/back_scale.png"
	}

	message.style.visibility = "hidden"
	play_btn.disabled = false
}