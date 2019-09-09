
function camelCaseDisplayName(name) {
	//1. Replace underscore at the begining of the string
	//2. Replace  any dot with space
	//3. Replace any other underscorre with space
	let _name = name.toLowerCase()
		.replace(/^_/, '')
		.replace(/\./g, ' ')
		.replace(/_/g, ' ');

	//The regular expression will return an array of matches
	//the regular expression matches all spaces and all characters having space in front
	//replace will loop the array returned by the regular expression and will, 
	//Execute a function with the following rulesh
	//rule 1 - if whitespace and then character: make starting character a Capital letter
	//rule 2 - if capital letter but no whitespace: make character a small letter
	return _name.replace(/(:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) { // match is a matched substring, index is matched character

		//Matched substring is composed only from spaces
		//If it is a space or multiple spaces - return one space
		//The following line compress multiple spaces in one space
		if (+match === 0) return " "; //using triple equals to test the type also as increment will convert space to a number

		//If matched character is a space - make the matched substring lowercase
		//If matched character is not a space - make the matched substring Uppercase
        return index == 0 ? match.toLowerCase() : match.toUpperCase(); //Using double equals because space is equal to 0 but it is not the same type
        
        //because we lower all characters in the first line and
        //we already filter fro all spaces
        //this line can be written as:
        return  match.toUpperCase(); // check for space is redundant here
	});
}

