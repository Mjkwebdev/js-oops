// Calling Super Constructor 

function Shape(color){//Parent constructor function
    this.color = color;
}
Shape.prototype.duplicate = function(){
    console.log("duplicate");
}
function Circle(radius){
    Shape.call(this, "white");  
    // calling constructor and using {this} whereas it is  pointing to current object
    //Calling Super Constructor
    this.radius = radius;
}
Circle.prototype.draw = function(){
    console.log("draw");
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const s = new Shape(4);
const c = new Circle(1);
