function getArgs(func) {
    // First match everything inside the function argument parens.
    var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];

    // Split the arguments string into an array comma delimited.
    return args.split(',').map(function (arg) {
        // Ensure no inline comments are parsed and trim the whitespace.
        return arg.replace(/\/\*.*\*\//, '').trim();
    }).filter(function (arg) {
        // Ensure no undefined values are added.
        return arg;
    });
}

function compareArraysValues(arr1, arr2) {
    if(arr1.length !== arr2.length ){ return false }
    for (let i = 0; i < arr1.length ; i++) {
        if (arr1[i] != arr2[i]) { return false }
    }
    return true
}

function createRule(operators, field = '', dataType = '', value = '', value2 = '') {
    return {
        id: `r-${uniqueId()}`,
        field,
        dataType,
        value,
        value2,
        operator: operators[0].name,
        operandSize: operators[0].operandSize
    };
}

const interfaceArg = ["operators", "field = ''", "dataType = ''", "value = ''", "value2 = ''"]

function testInterface(){
    if (!compareArraysValues(getArgs(createRule), interfaceArg)) {
        return false
    } 
    return true 
}

