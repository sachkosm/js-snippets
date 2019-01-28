


const test = first => second => third => {
  return third
};


//equivalent to:

function test2(first) {
    return function(second){
        return function (third){
            return third
        }
    }
} 

console.log(test(1)(2)(3))
console.log(test2(1)(2)(3))
