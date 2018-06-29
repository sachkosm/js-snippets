//Define a functional object to hold persons in javascript
var Person = function (name) {
    this.name = name;
};

//Add dynamically to the already defined object a new getter
Person.prototype.getName = function () {
    return this.name;
};

//Create a new object of type Person
var john = new Person("John");

//Try the getter
alert(john.getName());

//If now I modify person, also John gets the updates
Person.prototype.sayMyName = function () {
    alert('Hello, my name is ' + this.getName());
};

//Call the new method on john
john.sayMyName();
