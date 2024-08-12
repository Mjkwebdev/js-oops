// Creating your own prototypical inheritance
function Shape(vertex){
    this.vertex= vertex;
}
Shape.prototype.duplicate = function(){
    console.log("duplicate");
}
// Shape is rooted to their ObjectBase


function Circle(radius){
    this.radius = radius;
}

Circle.prototype.draw = function(){
    console.log("draw");
}
// circle is rooted to their ObjectBase
// Using inheritance
// We can inherit the circle from Shape

// Circle.prototype = Object.create(Shape.prototype);//Main Point

const s = new Shape(4);
const c = new Circle(1);

