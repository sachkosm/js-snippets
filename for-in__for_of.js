
//DIFFERENCE BETWEEN "for in" and "for of" loops
let arr = ['a', 'b', 'c'];

//i will be index
for (let i in arr) {
   console.log(i); // "0", "1", "2",
}

//i will be values
for (let i of arr) {
   console.log(i); // "a", "b", "c"
}


// 'for of' work wirh iterators
// 'for in' works with arrays

//  array.entries(); // returns an iterator

var array = ['a', 'b', 'c'];

var iterator = array.entries();

console.log(iterator.next().value);
// expected output: Array [0, "a"]

console.log(iterator.next().value);
// expected output: Array [1, "b"]

for (let e of iterator) {
  console.log(e);
}
