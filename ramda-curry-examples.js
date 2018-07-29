const R = require("ramda");
const assert = require('assert');

const arr =[5,9,-34,100,-567,90,7,3456]


//Multiply every element by ...
console.log(arr.map(R.multiply(2)))

//Find the max number in an array
console.log(arr.reduce(R.max()))
assert.equal(3456, arr.reduce(R.max()),"Max test Fail")

//Find the min number in an array
console.log(arr.reduce(R.min()))
assert.equal(-567, arr.reduce(R.min()), "Min test Fail")

//Ramda functions are already curryed
//Can be used in any of the following way
const splitBySpace = R.split(' ')
console.log(splitBySpace("As drth hbn"))

console.log(R.split(' ')("Ads drffth hbfn"))

console.log(R.split(' ',"3455 dr7767ffth 7677 hbfn"))