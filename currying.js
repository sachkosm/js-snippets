
//Currying is the process of taking a function with multiple 
//arguments and returning a series of functions that take one argument and eventually resolve to a value


function volume(length) {
  return function(width) {
    return function(height) {
      return height * width * length;
    }
  }
}

volume(2)(3)(4); // 24
