// constant object
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function() {
        console.log('draw');
    }
};

// object with multiple methods == objects with behaviour

circle.draw();


// factory function:
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circleTwo = createCircle(1)

circleTwo.draw();

// constructor function:
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);

// --> without new --> global variables that can be
// modified from everywhere. Remember: Dont do this! 

// constructor similar to C
// both patterns are used

// constructor vs literals
// new String() - '', "", ``
// new Boolean() - true, false
// new Number() - 1, 2, 3, ...
// cleaner to use literals

// functions are objects in js!!!

// in console
// function.name -> name of function
// function.length -> length of arguments
// function.constructor -> Function-Constructor!
// Circle.constructor;

const Circle1 = new Function('radius', `this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`);

const circle1 = new Circle1(1);

// referencing this by the empty object {}
Circle.call({}, 1);

Circle.apply({}, [1,2,3]);

// when using objects:
// let y = x
// copied by reference instead of copying value into memory space

 // primitives are copied by value instead

 // in JS adding a property to an object like a function
 // can be done after construction of the object:
 circle.location = {x:1};
 // same:
 circle['location'] = {x:1};

 delete circle.location;

 // for loop:
 for (let key in circle) {
     if (typeof circle[key] !== 'function')
     console.log(key, circle[key]);
 }

 const keys = Object.keys(circle);
 console.log(keys);

if ('radius' in circle)
    console.log('Circle has radius')


// In OPP: hide details and only show essentials!

// Abstraction example:

function Circle3(radius) {
    let color = 'red';
    this.radius = radius;
    // defaultLocation and computeOptimum are in closure
    // closure stays after the draw function call
    // they will still be accessible in memory
    let defaultLocation = {x:0, y:0};
    
    // to read private members of Circle3 by a method:
    this.getDefaultLocation = function() {
        return defaultLocation;
    };
    this.draw = function() {
        // x and y are local variables
        // they can only be accessed inside this function
        // this.draw can only access variables
        // inside the function and its parent funtion
        // x and y are in scope. scope is temporary
        let x, y;

        console.log('draw');
    };
    // read only property defaultLocation can be read by get
    // changing a read only property by using set method:
    // get and set are special keywords in JS
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            // simple value check logic
            if (!value.x || !value.y)
                // throwing an error message
                throw new Error('Invalid Location');
            defaultLocation = value;
        }
    });
}
const circle3 = new Circle3(10);
circle3.draw();

// this can prevent more workload and issues in more complicated tasks

