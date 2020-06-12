
describe('compareCombos', () => {
	it('return expected full vs flush', () => {
		let cards1 = ["7s", "7h", "7d", "8s", "8d"]
		let cards2 = ["8h", "7h", "5h", "3h", "2h"]
		expect(compareCombos(cards1, cards2)).toEqual(["7s", "7h", "7d", "8s", "8d"])
	})

	it('return expected full vs pair', () => {
		let cards1 = ["8s", "8h", "Ad", "7h", "5d"]
		let cards2 = ["7s", "7h", "7d", "8s", "8d"]
		expect(compareCombos(cards1, cards2)).toEqual(["7s", "7h", "7d", "8s", "8d"])
	})

	it('return expected flush vs pair', () => {
		let cards1 = ["8s", "8h", "Ad", "7h", "5d"]
		let cards2 = ["8h", "7h", "5h", "3h", "2h"]
		expect(compareCombos(cards1, cards2)).toEqual(["8h", "7h", "5h", "3h", "2h"])
	})

	it('return expected flush vs high', () => {
		let cards1 = ["8h", "7h", "5h", "3h", "2h"]
		let cards2 = ["Ad", "Qs", "8h", "7h", "5d"]
		expect(compareCombos(cards1, cards2)).toEqual(["8h", "7h", "5h", "3h", "2h"])
	})

	it('return expected pair vs high', () => {
		let cards1 = ["8s", "8h", "Ad", "7h", "5d"]
		let cards2 = ["Ad", "Qs", "8h", "7h", "5d"]
		expect(compareCombos(cards1, cards2)).toEqual(["8s", "8h", "Ad", "7h", "5d"])
	})

	it('return expected high vs high', () => {
		let cards1 = ["Ad", "Ks", "8h", "7h", "5d"]
		let cards2 = ["Ad", "Qs", "8h", "7h", "5d"]
		expect(compareCombos(cards1, cards2)).toEqual(["Ad", "Ks", "8h", "7h", "5d"])
	})
})