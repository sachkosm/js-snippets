//Patterns

//Public
function Constructor(...) {
	this.membername = value;
}
Constructor.prototype.membername = value;


//Private
function Constructor(...) {
	var that = this;
	var membername = value;
	function membername(...) { ... }
}



//Privileged
function Constructor(...) {
	this.membername = function(...) { ... };
}

var f = new Constructor(...)
f.membername(...)
