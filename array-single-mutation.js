
var original = 'abcd'
var testStrings = {
	'removal': 'abd', // removal
	'insertion': 'abcfd', //insertion
	'modification': 'agcd', //modification
	'moreTheOne': 'd', //more then one
	'null': '',
	'veryLong': 'adfrtgabcdkuii'
}

const testForOneMutation = (original, mutated) => {
	let mutations = 0

	for (let i = 0, j = 0; i < original.length || j < mutated.length; i++, j++) {

		console.log(original[i], " : ", mutated[j])

		if (original[i] !== mutated[j]) {
			mutations++;
			if (mutations > 1) {
				return false
			}

			if (original.length > mutated.length) { // removal
				j--;
			} else if (original.length < mutated.length) { //insertion
				i--;
			}

		}

	}

	return true;
}

//Testing
Object.keys(testStrings)
	.map((key) => {
		let result = testForOneMutation(original, testStrings[key])
		console.log(key, ' result', result)
	})
