


const users = ['a', 'b', 'c']

const matchName = (name) => (item) => item === name; //Function returning a function

const curriedFunc = matchName('a') //Seed the returning function with the first parameter - name

const result = users.find(curriedFunc) //curriedFunc will be called fro each element like this : curriedFunc(item, index, arr)

console.log(result)