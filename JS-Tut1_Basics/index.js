// This is my hello world js
console.log('Hello World!');

let name = 'Mosh';
console.log(name);

// cannot be a reserved keyword
// should be meaningful
// cannot contain space or hyphen

let firstName;
// camel notation (should be used, not the latter one)
// variable labels are case sensitive
let FirstName;

let secondName = 'Mosh';
let lastName = 'Hamedani';

let interestRate= 0.3;
interestRate= 1;

// variable can be changed constant not

const interestRateTwo = 0.3;

// primitive / value types and reference types
// primitive: string number boolean undefined null

let age = 30;
let isApproved= true;
lastName=null;

// dynamic language!
// string can change to any other primitive type
// declaration at runtime

typeof isApproved;


// objects arrays functions are reference types
// {} = object literal
let person = {
    name: 'Mosh',
    age: 30
};

console.log(person);

// Dot notation
person.name = 'John';

console.log(person.name);

//bracket notation
person['name'] = 'Mary';

// dot notation shorter, but:
// advantage of bracket notation:
let selection = 'name';
person['selection'] = 'Mary';

console.log(person.name);

//arrays

let selectedColors = ['red', 'blue'];
console.log(selectedColors[1]); 

// arrays size is dynamic, items / types too
selectedColors[2] = 'green';

// functions perfom a task

function greet() {
    console.log('Hello World');
}

greet();

// functions can have inputs:

function greettwo(name, lastName) {
    console.log('Hello' + name + ' ' + lastName)
}

greettwo('John', 'Smith');
greettwo('Mary', 'Smith');

// calculating a value

function square(number){
    return number * number;
}


let number = square(2);

console.log(number);
console.log(square(2));

// object oriented programming:

// 4 pillars:

//-----------------------

// encapsulation:

// objects are consisting of:
// methods == functions
// and properties == variables

// example:

let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();

// important quote:
// the best functions are those without parameters!

//-----------------------

// abstraction:

// simpler interface
// reducing impact of change!

// inheritance:

// eliminating redundant code!

//-----------------------

// polymorphism:

// "many forms"