//Variable declarations with the same name and same scope are processed as one declaration
//If a variable is already declared – re-declaring the same name will be ignored!!!
//If we only declare but do not assign new value - the declaration of 'undefined' is not considered an assignment
var a = '1'; //Global scope declaration
function checkScope(a) { //Variable "a" is declared here in local scope
	var a // Duplicate declaration. Declaration without assignment will be ignored!!!
	this.a = '2'
	console.log('local: ', a); // 1
	console.log('local this.a: ', this.a); // 2
}
checkScope(a);
console.log('without new: ', checkScope.a) //undefined - without new is just local variable

//var newcheckScope = checkScope(a) 
//console.log('This new variable, no new, executed with argument: ', newcheckScope.a) // returns error as it does not return a function or object having "a"

// var newcheckScope = checkScope(a)
// 	.bind(this)
// console.log('This new variable, no new, executed with argument, bind this: ', newcheckScope.a) //bind can be applied only if it return a function

console.log('========')
var newcheckScope = new checkScope(a)
console.log('using - new: ', newcheckScope.a) // 2
