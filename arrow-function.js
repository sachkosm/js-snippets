
//Simpple arrow function
const arrowFunc = (n1, n2) => n1 + n2;

//=============================
var c = 3;
var d = 4;

function namedfunc(a,b){
  return a+ b;
}

//Arrow function that executes a function that takes as params variables
const funcVar = () => namedfunc(c, d);

//=============================
function a() { return 1;}
function b() { return 2;}

function namedfunc2(a,b){
  return a()+ b();
}

//Arrow function that executes a function that takes as params functions
const funcFunc = () => namedfunc2(a, b);


//============================
console.log(arrowFunc(1,1))
console.log(funcVar())
console.log(funcFunc())
