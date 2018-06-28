

merge = (oldState, newState){

// if name collision - right will win, otherwise will add the right to the left
   return {...oldState, ...newState };

}
