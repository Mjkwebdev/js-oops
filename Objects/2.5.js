// functions are objects

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    } 
}
const another = new  Circle(2);

console.log(Circle);
//function

// as we have many built-in function constructor in JS like 
// Internally code will look like
// const circle1 = new Function('radius', `
    //  this.radius = radius;
    // this.draw = function(){
    //     console.log("draw");}
    // `)

    
Circle.call({},1);
Circle.apply({},[1,2,3]);
// all these methods applied on functions as well as object too
