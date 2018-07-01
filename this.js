Why is binding necessary at all?
In JavaScript, these two code snippets are not equivalent:

-----------------------
obj.method();

---------------------

var method = obj.method;
method();

-------------------------------
1. Example:
function hello(thing) {
  console.log(this + " says hello " + thing);
}

hello.call("Yehuda", "world") //=> Yehuda says hello world

-------------------------------
2. Example without "call()"

hello("world")  is equal to ====>   hello.call(window, "world");

-------------------------------
3. Example - when "using strict "

hello("world")  is equal to ====>  hello.call(undefined, "world");

-------------------------------
4. Example when Member Functions
var person = {
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this + " says hello " + thing);
  }

---- OR -----
function hello(thing) {
  console.log(this + " says hello " + thing);
}

person = { name: "Brendan Eich" }
person.hello = hello


person.hello("world")    is equal to ====>   person.hello.call(person, "world");

-------------------------------
