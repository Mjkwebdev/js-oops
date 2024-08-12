// 2. Practice Example of Polymorphism
function extend(Child,Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
function Super() {

}
Super.prototype.property = function () {
    console.log("Person using his forefathers name");
}
function Sub() {

}
extend(Sub, Super);
Sub.prototype.property = function () {
    console.log("Its first one");
}

function sub1() {

}
extend(sub1, Super);
sub1.prototype.property = function () {
    console.log("its second one")
}

const people = [
    new Sub(),
    new sub1(),
];

for (let over of people)
    over.property();

// Polymorphism 
// Same methods with differnt forms


