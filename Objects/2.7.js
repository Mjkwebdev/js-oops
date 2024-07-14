// Adding or Deleting property

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    } 
}
const another = new  Circle(2);
// Adding property
another.location= {x:1};
console.log(another);
another['locate']= "center location";
console.log([another]);
//use bracket notation to access value of member

// Deleting property
delete another.location;
console.log(another);