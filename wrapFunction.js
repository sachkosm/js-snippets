function functionToWrap(one, two) {

	return one + two
}

function wraperFunction(func) {
	const origFunction = func

	//Return a function that execute the original function to wrap
	return ((one, two) => {
		//Do some extra work her
		console.log('log1')
		//Execute the original function and return the value from the original function
		const returnValue = func(one, two)
		return returnValue
	})
}

functionToWrap = wraperFunction(functionToWrap)

let one = 1
let two = 2

console.log(functionToWrap(one, two))
