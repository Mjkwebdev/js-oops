// Abstraction

// dont want  to give full access to a our properties  
// use abstraction

function Employee(name, age, baseSalary){
   this.name = name;
   this.age= age;
   this.baseSalary=baseSalary;

//    make this to let so it cant be accessible from outside
   let monthlySales = 1000;


    let EmployeePackage= function(){
        // change this.baseSalary to baseSalary not use this
    let finalPackage = baseSalary + monthlySales;
    console.log("Final package is : " + finalPackage);
   }

   this.EmployeeDetails = function(){
    console.log("Name : "+ this.name + " | Age "+ this.age);
    EmployeePackage();
   }
}
const Employe = new Employee('MK', 16, 898);
Employe.EmployeeDetails();


