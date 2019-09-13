

//temporary reassign function

function showMessage(number) { 
    console.log('I am original: ' , number);
  }

function newFunction (){
    console.log('I am reassigned');
}


var obj = {
    v1: 1,
    v2: showMessage
}
  
//Original
obj.v2(1) // I am original: 1

//Save the original in a
var a = obj.v2 

//Assign new function
obj.v2 = newFunction
//Execute new function
obj.v2() // I am reassigned

//Restore the original function
obj.v2 = a
//Execute the restored function
obj.v2(2) //I am original: 2
