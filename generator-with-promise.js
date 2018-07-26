//Async is executed and then the result of the async is provided to the next yield
//Next yield is called in the ".then" of the previouse yield(promise)


function* genFunc() {
  var data = 0;
  yield new Promise((resolve, reject) => setTimeout(function() {
    data = 17;
    resolve(25);
  }, 3000)) //async)

  yield data; //data has been modified by the previouse yield
}

var it = genFunc();

var promise = it.next().value //returns a Promise

console.log(promise);

promise.then(data => {
  console.info(1);
  console.log(it.next().value)

  console.log(data)
  //we could exceute another async and then call next yield
  //setTimeout(() => console.log( it.next().value ), 2000);

})
