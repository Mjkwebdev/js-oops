// Mixins
// is a composition of multiple objects 

function Mixin(target, ...sources)  //... is rest operator that takes all the parameters and return them in an array
{
    Object.assign(target, ...sources) // ... spread operator

}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log("eating");
    }
}
const canWalk = {
    walk: function () {
        console.log("walk");
    }
}
const canSwim = {
    swim: function () {
        console.log("swim");
    }
}
function Person() {
    this.sleep = function () {
        console.log("sleep");
    }
}

function Goldfish() {
    this.animal = function () {
        console.log("watery animal");
    }
}
// Better way in ES6
//Object.assign() 

Mixin(Goldfish.prototype, canSwim, canEat);
Mixin(Person.prototype, canEat, canWalk);
const person = new Person();
const goldfish = new Goldfish();
console.log(person);
console.log(goldfish);