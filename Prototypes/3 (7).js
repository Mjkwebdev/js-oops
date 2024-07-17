// Iterating over instances and prototypes
function Circle (radius){
//instance property
    this.radius = radius;
}


const c1 = new Circle(2);
const c2 = new Circle(4);
Circle.prototype.draw = function(){
// prototypical properties
    console.log("draw");
}

Circle.prototype.toString = function(){
    return "circle with radius "+ this.radius;
}
// Only instances/own 
console.log(Object.keys(c1));

// prototype property 
for (let key in c1){
    console.log(key);
}
