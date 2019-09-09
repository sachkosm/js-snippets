var crypto = require('crypto');

var userStore = []

function hashPassword(user, pass) {

	return new Promise((resolve, reject) => {

		if (user && pass) {

			crypto.randomBytes(128, function(err, salt) {

				if (err) { throw err; }

				salt = new Buffer(salt)
					.toString('hex');

				crypto.pbkdf2(pass, salt, 7000, 256, 'sha512', function(err, hash) {

					if (err) { throw err; }

					userStore[user] = {
						salt: salt,
						hash: (new Buffer(hash)
							.toString('hex'))
					};
					resolve(userStore)
				});

			})
		}
	})
}

hashPassword('user', 'veryStrongPassword45')
	.then((userStore) => {
		console.log(userStore)
	})


const result = async()=>{
    const r = await hashPassword('user', 'veryStrongPassword45')
    console.log(r)
}

result()
