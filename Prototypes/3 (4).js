// Property descriptor : 
// object that describes characteristics of property
// like we use setters and getters 
// also we can use some other properties 

let person = {name : "mosh"};

let objectBase = Object.getPrototypeOf(person);
console.log(objectBase);
console.log(Object.getOwnPropertyDescriptor(objectBase, "toString"));

Object.defineProperty(person, "name",{
    enumerable: true, //iterate 
    writable: false, // change or modify it
    configurable: true // delete it 

})
console.log(person);
console.log(Object.keys(person)); //enumerating over property
 

