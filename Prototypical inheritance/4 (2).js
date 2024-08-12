// Resetting constuctor

function Shape(vertex){
    this.vertex= vertex;
}
Shape.prototype.duplicate = function(){
    console.log("duplicate");
}
function Circle(radius){
    this.radius = radius;
}

Circle.prototype.draw = function(){
    console.log("draw");
}
// Whenever you are changing your prototype
// you should also change its constructor

Circle.prototype = Object.create(Shape.prototype);
 Circle.prototype.constructor = Circle;

const s = new Shape(4);
const c = new Circle(1);

// If we dont create inheritance then 
// new Circle.prototype.constructor(2)
// and 
// new Circle(1); are same  