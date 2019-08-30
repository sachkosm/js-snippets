var cache = [];

// -> the object you want to mock by copy actual values when executing the program

//This is to avoid circular referencing
console.log(JSON.stringify(objectVariable, function (key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Duplicate reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
}))
cache = null;


1. Add this to log the object in the main code
2. Run the program and then look int Dev Tools
2. Copy the logged result from Dev Tools
3. Past the copied object to the Mock Variable in the unit test 
