// Enumerate over properties

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    } 
}

const circle = new Circle(1);

for (let key in circle){
    console.log(key );
}

//  Another way 
const key = Object.keys(circle);
console.log(key);

// check property in object
if ('radius' in circle){
    console.log("circle has a radius");
}

