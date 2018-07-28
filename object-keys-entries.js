

// The Object.keys() method returns an array of a given object's
// property names, in the same order as we get with a normal loop.

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]


//=============================================================

// The Object.entries() method returns an array of a given object's
// own enumerable property [key, value] pairs, in the same order as
// that provided by a for...in loop (the difference being that a for-in loop
//   enumerates properties in the prototype chain as well).

const object = { foo: 'bar', baz: 42 };
console.log(Object.entries(object));
// expected output: Array [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]


//Iterating through an Object
const obj = { foo: 'bar', baz: 42 };

Object
.entries(obj)
.forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
