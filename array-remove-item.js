//Removing Elements from End of a JavaScript Array

//Any element whose index is greater than or equal to the new length will be removed.
var ar = [1, 2, 3, 4, 5, 6];
ar.length = 4; // set length to remove elements
console.log( ar ); //  [1, 2, 3, 4]



//The pop method removes the last element of the array, returns that element, and updates the length property. 
//The pop method modifies the array on which it is invoked, 
//This means unlike using delete the last element is removed completely and the array length reduced
var ar = [1, 2, 3, 4, 5, 6];
ar.pop(); // returns 6
console.log( ar ); // [1, 2, 3, 4, 5]


//Removing Elements from Beginning of a JavaScript Array

//The shift method works much like the pop method except it removes the first element of a JavaScript array instead of the last.
//There are no parameters since the shift method only removed the first array element. 
//When the element is removed the remaining elements are shifted down.
//The shift method returns the element that has been removed, updates the indexes of remaining elements, and updates the length property. 
//It modifies the array on which it is invoked.

If there are no elements, or the array length is 0, the method returns undefined
var ar = ['zero', 'one', 'two', 'three'];
ar.shift(); // returns "zero"
console.log( ar ); // ["one", "two", "three"]



//Using Splice to Remove Array Elements

//The splice method can be used to add or remove elements from an array. 
//The first argument specifies the location at which to begin adding or removing elements. 
//The second argument specifies the number of elements to remove. 
//The third and subsequent arguments are optional; they specify elements to be added to the array.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = array.splice(2,2);

/*
removed === [3, 4]
array === [1, 2, 5, 6, 7, 8, 9, 0]
*/
//An array containing the removed elements is returned by the splice method. 
//You can see the removed array contains [3, 4] and the original array contains the remaining values.



//Removing Array Items By Value Using Splice

//If you know the value you want to remove from an array you can use the splice method. 
//First you must identify the index of the target item. 
//You then use the index as the start element and remove just one element.
    arrRemove =(arr, value) =>{
        const index = arr.indexOf(value);
        if (index >= 0) {
            arr.splice(index, 1);
        }
    }
    


//Using the Array filter Method to Remove Items By Value

//Unlike the splice method, filter creates a new array. 
//filter() does not mutate the array on which it is called, but returns a new array.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var filtered = array.filter(function(value, index, arr){

    return value > 5;

});

//filtered => [6, 7, 8, 9]
//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function arrayRemove(arr, value) {

   return arr.filter(function(ele){
       return ele != value;
   });

}

var result = arrayRemove(array, 6);

//Explicitly Remove Array Elements Using the Delete Operator

//Using the delete operator does not affect the length property. Nor does it affect the indexes of subsequent elements. 
//The array becomes sparse, which is a fancy way of saying the deleted item is not removed but becomes undefined.
//The delete operator is designed to remove properties from JavaScript objects, which arrays are objects












