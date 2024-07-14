// 2 tpes of values 
// primitive type: string , symbol , number, boolean undefined null
// Reference type: arrays , objects , functions 

let x= [10];
// this value is not stored in variable  its on somewhere on memory and address is stored on variable 
    // they are dependent on each other

 let y = x;
 console.log(x[0]);
x[0]= 19;
console.log(y[0]);



//  x and y are two independent variable 
let h= 7;
 let g = h;
 console.log(g);
h= 12;
console.log(h);