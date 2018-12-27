//Simulate slow async response

async function stall(stallTime = 2000) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}

  
  
//  example:
  
var doSomething = async () => {

  var data = await someRemoteOperation();

  await stall(); // stalls for the default 3 seconds
  await stall(500); // stalls for 1/2 a second

  await doSomethingElse(data);

}
