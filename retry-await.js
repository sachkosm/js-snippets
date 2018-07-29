const fetch = require("node-fetch"); // Tested on Node side
const R = require("ramda");

const NUM_RETRIES = 3;

test();

async function test() {
    let i;
    for (i = 0; i < NUM_RETRIES; ++i) {
        try {
            await fetch('https://randomuser.me/api/')
            .then((result)=>console.log(result));
            break;
        } catch (err) { console.log('err') }
    }
    console.log(i); // 3
}