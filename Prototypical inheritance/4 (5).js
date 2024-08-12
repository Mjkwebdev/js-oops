// Method OverRiding

// OverRide a method based on parent object
//re-implementing a method in a child object 

function extend(Child , Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}
function Circle(){
}
extend(Circle, Shape);
     // You have to put this implementation after resetting constructor
Circle.prototype.duplicate = function(){ 

    Shape.prototype.duplicate.call(this); // here {this} is pointing to another prototype
    console.log("duplicated Circle");

}
    
const c = new Circle(1);


