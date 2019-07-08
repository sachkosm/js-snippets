function Animal(name) {
	Animal.count = Animal.count + 1 || 1; // static variables, use function name "Animal"
	this.name = name; //instance variable, using "this"
}

Animal.showCount = function() { //static method
	console.log(Animal.count)
}

Animal.prototype.showName = function() { //instance method
	console.log(this.name);
}

var mouse = new Animal("Mickey");
var elephant = new Animal("Haddoop");
var elephant = new Animal("Haddoop2");

Animal.showCount(); // static method, count=2
mouse.showName(); //instance method, alert "Mickey"
mouse.showCount();//Error!! mouse.showCount is not a function, which is different from  Java

//==================

'use strict'

class Foo {
	static talk() {
		console.log('talk')
	};

	speak() {
		console.log('speak')
	};

};

var a = new Foo();
Foo.talk(); // 'talk'
a.talk(); // err 'is not a function'
a.speak(); // 'speak'
Foo.speak(); // err 'is not a function'
