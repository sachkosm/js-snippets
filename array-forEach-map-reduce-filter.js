
//Returns
//Does not return anything
arr.forEach(function(currentValue, currentIndex, arr) {
    //your iterator
}, this);


//Returns
//A new array with each element being the result of the callback function.
var newArray = arr.map(function(currentValue, currentIndex, arr) {
    // Return element for new_array
}, this)


//Returns
//Accumulator
//Accumulator can be value , array, object etc...
var result = arr.reduce(function(accumulator, currentValue, currentIndex, arr) {
  //return accumulator + some logic;
}), initialValue);


//Returns
//A new array with each element being the result of the callback function.
var newArray = arr.filter(function(currentValue, index, arr){
  //return currentValue -> if pass the test here
}, thisArg)
