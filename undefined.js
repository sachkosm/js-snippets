

if(typeof a === 'undefined'){
  console.log('Variable (a) is Undeclared OR Unassigned')
}

var b;
if (b === undefined){
  console.log('Variable (b) is Declared but it\'s value is not assigned')
}

var c;
if(!c){ // Variable value translates to "false"
  console.log('Variable (c) is Declared and it\s Value is one of the following:')
  console.log('false')
  console.log('0')
  console.log('""')
  console.log('NaN')
  console.log('null')
  console.log('undefined')
}

//=======================


//Find if variable is Declared
try{
  if(f === undefined ){
    console.log('Variable (f) is Declared but has no Value')}
}catch(e) {
    if(e.name == "ReferenceError") {
        console.log('Variable (f) is NOT Declared')
    }
}

//Variable is either Undeclared or Unassigned
if(typeof f === 'undefined'){
  console.log('Variable (f) is NOT Declared OR Unassigned')
}else{

//Variable is Declared
   if(f){
     console.log('Variable (f) is Declared and it has a Value')
     console.log('Variable\'s value is NOT one of the following:')
     console.log('false')
     console.log('0')
     console.log('""')
     console.log('NaN')
     console.log('null')
     console.log('undefined')
   }
   
//Variable is Declared
   if(!f){
     console.log('Variable (f) is Declared and it has a Value')
     console.log('Variable\'s value IS one of the following:')
     console.log('false')
     console.log('0')
     console.log('""')
     console.log('NaN')
     console.log('null')
     console.log('undefined')
   }

}
