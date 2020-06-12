
describe('bestCombo', () => {
	it('return expected full', () => {
		let cards = ["7h", "8d", "7d", "7s", "8s", "3s", "3h"]
		expect(bestCombo(cards)).toEqual(["7s", "7h", "7d", "8s", "8d"])
	})

	it('return expected flush', () => {
		let cards = ["7h", "8h", "7d", "5h", "8s", "2h", "3h"]
		expect(bestCombo(cards)).toEqual(["8h", "7h", "5h", "3h", "2h"])
	})

	it('return expected pair', () => {
		let cards = ["7h", "8h", "Ad", "5d", "8s", "2h", "3h"]
		expect(bestCombo(cards)).toEqual(["8s", "8h", "Ad", "7h", "5d"])
	})

	it('return expected high', () => {
		let cards = ["7h", "8h", "Ad", "5d", "Qs", "2h", "3h"]
		expect(bestCombo(cards)).toEqual(["Ad", "Qs", "8h", "7h", "5d"])
	})
})