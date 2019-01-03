// await is changing the order of the execution

//Using await
async function async_await() {

	//Creates a Promise that wil be resolved after 3 seconds
	//Initiali this is pending Promise - after resolving it - it will be come the value of the resolve
	var x = new Promise((resolve, reject) => setTimeout(() => {
		resolve(15)
	}, 3000));

	//At this line x is just a pending Promise

	console.log('After Promise x=>', x)

	//await will cause thsi function to stop and wait for the Promise to resolve
	//the diference from SYNC execution is that ONLY this function is stopped and waiting 
	//JS process will keep executing the lines after this functions
	await x.then(() => console.log('Then x=>', x))
	//now the promise is resolved

	//At this line x is now the result of the resolved Promise
	console.log('After await x=>', x)
}

async_await()

console.log('===== Line executed After the async_await function ============')

// The result from the above code is:

// After Promise x=> Promise { <pending> }
// ===== Line executed After the async_await function ============
// Then x=> Promise { 15 }
// After await x=> Promise { 15 }";





//NOT Using await
async function async () {

	//Creates a Promise that will be resolved after 3 seconds
	var x = new Promise((resolve, reject) => setTimeout(() => {
		resolve(15)
	}, 3000));

	//At this line x is just a pending Promise

	console.log('After Promise x=>', x)

	//There is no await and this line will be executed after the Promise is resolved - 
	//but the program will not wait for the promise to resolve and will keep going to the next line
	x.then(() => console.log('Then x=>', x))
	//the promise is NOT resolved

	//At this line x is now the result of the resolved parameter
	console.log('After await x=>', x)
}

async ()
console.log('===== Line executed After the async function ============')

// The result from the above code is:

// After Promise x=> Promise { <pending> }
// After await x=> Promise { <pending> }
// ===== Line executed After the async function ============
// Then x=> Promise { 15 }
