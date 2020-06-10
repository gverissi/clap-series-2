
function isAFull(cards) {

	let occur = occurences(orderCards(cards))
	let isAThree = false
	let isATwo = false
	for (let [key, value] of Object.entries(occur)) {
		if (value > 2 && isAThree == false) {
			isAThree = true
			occur[key] = 0
		}
	}
	for (let [key, value] of Object.entries(occur)) {
		if (value > 1 && isATwo == false) {
			isATwo = true
			occur[key] = 0
		}
	}
	if (isAThree && isATwo) {
		return true
	}
	return false

}