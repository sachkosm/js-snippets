var it = function* gentest(){

   yield 5+7;
   yield 3;
   yield 15;
}() // excute the generator function to return iterator

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

//==================

function* genloop() {
  var index =0;
  while(true){
    yield index++;
  }
}

var iterator = genloop(); //return iterator

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
