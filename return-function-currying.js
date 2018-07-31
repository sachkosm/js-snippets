// In users.find(curriedFunc)
// Find wwill call our function as follow:
//curriedFunc(item, index, arr) -> but we need to add additional parameter 'name'

const users = ['a', 'b', 'c']

//1. Create Function that returs a function and take parameter "name"
const matchName = (name) => (item) => item === name;

//Seed the returning function with the first parameter - name
const curriedFunc = matchName('a') 

//curriedFunc will be called for each element like this : curriedFunc(item, index, arr)
// but the function already has closure on 'a'
const result = users.find(curriedFunc) 

console.log(result)

//We can also use it like this directly
const result2 = users.find(matchName('b'))
// It wil be called like this: users.find(matchName('b')(item, index, arr))

console.log(result2)

