const fetch = require("node-fetch"); // Tested on Node side

// fetch('https://randomuser.me/api/')
//   .then(function(response) {
//     var s = response.json(); // json retuns a promise, use then to read the result
//     return s;
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });


// Example how to run async in order by using generators
var displayFunc = (data)=> console.log(data);

function* genFunc() {
  const response = yield fetch('https://randomuser.me/api/');
  yield displayFunc(response) //data has been provided by the previouse yield
}

var it = genFunc();
var promise = it.next().value //returns a Promise

promise.then(data => {

  let nextPromise = data.json() //json() return promise - otherwise we aill just call it.next(..)
  nextPromise.then((t) => {
    it.next(t); // call the next yield - provide the response as json text
  })

  //data.json().then((json) => console.log(json) ) // without calling next yield
})
