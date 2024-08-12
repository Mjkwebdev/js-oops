// Intermediate Function inheritance
 function extend(Child , Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
 }
function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}
function Circle(radius){
    Shape.call(this, "white");  
    this.radius = radius;
}
Circle.prototype.draw = function(){
    console.log("draw");
}
function Square(size){
    this.size = size;
}

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;


//Repeatition 
// we can make a new function
extend(Circle, Shape);
extend(Square, Shape);

const s = new Shape(4);
const c = new Circle(1);
