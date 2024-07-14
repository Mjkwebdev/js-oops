// Constructor function

function Circle(radius){
    console.log("this", this);
    //this is referencing a circle object due to new operator 
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    } 
}
const another = new  Circle(2);
// removing new is refrencing to global (window)object

