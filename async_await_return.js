// This returns a promise that waits a second, then has a 50/50 chance of 
// fulfilling with "yay" or rejecting with an error. Let's use it in a few subtlety different ways:
async function waitAndMaybeReject() {
	// Wait one second
	await new Promise(r => setTimeout(r, 1000));
	// Toss a coin
	const isHeads = Boolean(Math.round(Math.random()));

	if (isHeads) return 'yay';
	throw Error('Boo!');
}

console.log(waitAndMaybeReject())

//============ Just calling ===========================

//   Here, if you call foo, the returned promise will always fulfill with undefined, without waiting.
//   Since we don't await or return the result of waitAndMaybeReject(), 
// we don't react to it in any way. Code like this is usually a mistake.
async function foo() {
	try {
		waitAndMaybeReject();
	} catch (e) {
		return 'caught';
	}
}

console.log(foo())

//=============== Awaiting ==============

//   Here, if you call foo, the returned promise will always wait one second, then either fulfill with 
//   undefined, or fulfill with "caught".
//   Because we await the result of waitAndMaybeReject(), its rejection will be turned into a throw, 
//   and our catch block will execute. However, if waitAndMaybeReject() fulfills, 
//   we don't do anything with the value.
async function foo1() {
	try {
		await waitAndMaybeReject();
	} catch (e) {
		return 'caught';
	}
}

console.log(foo1())

//================= Returning =========================
// Here, if you call foo, the returned promise will always wait one second, then either fulfill 
// with "yay", or reject with Error('Boo!').
// By returning waitAndMaybeReject(), we're deferring to its result, so our catch block never runs.
async function foo2() {
	try {
		return waitAndMaybeReject();
	} catch (e) {
		return 'caught';
	}
}

console.log(foo2())

//====================  Return-awaiting  =================
//The thing you want in try/catch blocks, is return await:
// Here, if you call foo, the returned promise will always wait one second, then either fulfill 
// with "yay", or fulfill with "caught".
// Because we await the result of waitAndMaybeReject(), its rejection will be turned into a throw, 
// and our catch block will execute. If waitAndMaybeReject() fulfills, we return its result.
// If the above seems confusing, it might be easier to think of it as two separate steps:
async function foo3() {
	try {
		return await waitAndMaybeReject();
	} catch (e) {
		return 'caught';
	}
}

async function foo4() {
	try {
		// Wait for the result of waitAndMaybeReject() to settle,
		// and assign the fulfilled value to fulfilledValue:
		const fulfilledValue = await waitAndMaybeReject();
		// If the result of waitAndMaybeReject() rejects, our code
		// throws, and we jump to the catch block.
		// Otherwise, this block continues to run:
		return fulfilledValue;
	} catch (e) {
		return 'caught';
	}
}

console.log(foo4())

// Note: Outside of try/catch blocks, return await is redundant. 
// There's even an ESLint rule to detect it, but it allows it in try/catch.
