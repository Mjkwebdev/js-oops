// Every object has a constructor property  
// that refer to function that was use to create that object

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    } 
}
const another = new  Circle(2);
console.log(another);
// print out another object

console.log(another.constructor);
// it implies to circle object, that was use to create the another object

console.log(Circle.constructor);
// shows built-in function
 
