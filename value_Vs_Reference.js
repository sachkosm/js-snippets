//We can modify on object passed as parameter
//If we reassign the object - then the reference to the previouse object is lost

function changeAgeAndReference(person) {

	//person is a local variable that points to the object provided

	//act on the reference
	person.age = 25;

	//reassignment to new object
	//now the local varuable does not point to the previouse object
	person = {
		name: 'John',
		age: 50
	};

	//does not afect the old referenced object
	person.b = 0

	return person;
}

var personObj1 = {
	name: 'Alex',
	age: 30,
	b: 10
};

var personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ? //{ name: 'Alex', age: 25, b: 10 }

console.log(personObj2); // -> ? //{ name: 'John', age: 50, b: 0 }

function changeAgeDoNotChangeReference(person) {
	//person is a local variable that points to the object provided

	//act on the reference
	person.age = 30;

	//no reassignment to new object

	//afect the old referenced object
	person.b = 100

	return person;
}

personObj2 = changeAgeDoNotChangeReference(personObj1);

console.log(personObj1); // -> ? //{ name: 'Alex', age: 30, b: 100 }

console.log(personObj2); // -> ? //{ name: 'Alex', age: 30, b: 100 }
