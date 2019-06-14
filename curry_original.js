

// Functions are values, and we can manipulate function values in interesting ways. Currying allows us to
// produce a new function by combining a function and an argument:

var add1 = add.curry(1);
document.writeln(add1(6)); // 7

// add1 is a function that was created by passing 1 to add 's curry method. The add1 function adds 1 to its
// argument. JavaScript does not have a curry method, but we can fix that by augmenting
//Function.prototype:

Function.method('curry', function () {
    var args = arguments, that = this;
    return function () {
        return that.apply(null, args.concat(arguments));
    };
}); 

// Something isn't right...
// The curry method works by creating a closure that holds that original function and the arguments to curry. It
// returns a function that, when invoked, returns the result of calling that original function, passing it all of the
// arguments from the invocation of curry and the current invocation. It uses the Array concat method to
// concatenate the two arrays of arguments together.
// Unfortunately, as we saw earlier, the arguments array is not an array, so it does not have the concat
// method. To work around that, we will apply the array slice method on both of the arguments arrays.
// This produces arrays that behave correctly with the concat method:

Function.method('curry', function () {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});
