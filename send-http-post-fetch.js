

const fetch = require("node-fetch");

const fetchByUrl = (url, data, headers) => {
	let options = {
		headers,
		method: 'GET'
	}

	if (data) {
		options.body = JSON.stringify(data)
		options.method = 'POST'
	}

	return fetch(url, options)
}

var data = {
	'first_name': 'Test',
	'last_name': 'Test',
	'email': 'test@test.com',
	'phone': '0011231234',
	'cover_letter': '',
	'urls': ''

}

//var url = 'https://app.close.com/hackwithus/'
var url = 'https://postman-echo.com/post'
//https://reqbin.com/

var headers = null

async function test() {
	try {

		const res = await fetchByUrl(url, data, headers)

		let resClone = res.clone()
		let resText = await resClone.text()
		let resJson = null

		try {
			resJson = await res.json()
		} catch (err) {
			resJson = null
		}

		if (res.ok) {

			let responsetext = resJson || resText
			console.log(responsetext)

		} else {
			let { status: code, statusText: message } = res,
			body = resJson, errorObj

			body && (message = body['error.message'] || '')

			errorObj = {
				code,
				message,
				body
			}
			console.log(errorObj)
		}

	} catch (err) {
		console.log(err)
		if (err.name === 'AbortError') {
			console.log('Fetch aborted');
		}
	}

}

test()
