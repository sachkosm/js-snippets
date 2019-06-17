
function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const lydia = new person("Lydia", "Hallie"); //using 'new' -> 'this' is set to the function context
  const sarah = person("Sarah", "Smith"); // 'this' here is the global context
  
  console.log(lydia); // person { firstName: 'Lydia', lastName: 'Hallie' }
  console.log(sarah); // undefined

  console.log(firstName, lastName); // Sarah Smith
