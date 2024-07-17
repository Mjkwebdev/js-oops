function Circle (radius){
    this.radius = radius;
}

const c1 = new Circle(2);
const c2 = new Circle(4);
Circle.prototype.draw = function(){
    console.log("draw");
}

//both are using same methods so we should change same properties to prototypical properties
// what does the js engine do 
// it will first find out certain propety and then in prototypes part
// due to prototypical inheritance we can still have acces to our methods

Circle.prototype.toString = function(){
    return "circle with radius "+ this.radius;
}