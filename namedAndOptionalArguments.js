
//Acept object as argument
//Using desctructuring
let myFunc = function({x = 5,y = 8,z = 13} = {}) {

    //named, optional because have default values
    console.log(x,y,z);
};

myFunc({y:15,x:10,a:1}); //10 15 13
