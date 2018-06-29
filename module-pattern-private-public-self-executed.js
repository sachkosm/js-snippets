var app = function () {
    var privateVar = "privateVar";
    var publicVar = "publicVar";

    function privateFunc() {
        return "privateFunc";
    } // no semicolons here

    var privateFuncExecuted = function () {
        return "privateFunc";
    }(); // no semicolons here

    function publicFuncNotExecuted() {
        return "publicFuncNotExecuted";
    } // no semicolons here

    var publicFuncAsVarNotExecuted = function () {
        return "publicFuncAsVarNotExecuted";
    }; // semicolons must be here

    var publicFuncAsVarExecuted = function () {
        return "publicFuncAsVar";
    }(); //Executed already.  semicoons must be here

    vm = {
        publicVar: publicVar,
        publicFuncNotExecuted: publicFuncNotExecuted,
        publicFuncAsVarNotExecuted: publicFuncAsVarNotExecuted,
        publicFuncAsVarExecuted: publicFuncAsVarExecuted,
        publicInLineFunction: function () {
            return "publicInLineFunction";
        }, // no semicolons here, not executed
        publicInLineFunctionExecuted: function () {
            return "publicInLineFunction";
        }() // executed , no semicolons here

    };

    return vm;
}();  //  self execution here is a MUST, otherwise we just get the soruce code of the function

alert(app.publicVar);
alert(app.publicFuncNotExecuted); // just a pointer to the code fo the function
alert(app.publicFuncNotExecuted()); // we are executing the function here
alert(app.publicFuncAsVarNotExecuted); // just a pointer to the code fo the function
alert(app.publicFuncAsVarNotExecuted()); // we are executing the function here
alert(app.publicFuncAsVarExecuted); //the valuse of already executed function
//alert(app.publicFuncAsVarExecuted()); //invalid because it is already excuted and has value but no code
alert(app.publicInLineFunction); // just a pointer to the code
alert(app.publicInLineFunction()); // we are executing the function here
alert(app.publicInLineFunctionExecuted); // result of the executions
