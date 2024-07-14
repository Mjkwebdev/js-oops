// Getters and setters

function Employee(name, age, baseSalary){
    this.name = name;
    this.age= age;
    this.baseSalary=baseSalary;

    let monthlySales = 1000;

    let EmployeePackage= function(){
         // change this.baseSalary to baseSalary  convert this to let 
    let finalPackage = baseSalary + monthlySales;
     console.log("Final package is : " + finalPackage);
    }

    this.EmployeeDetails = function(){
     console.log("Name : "+ this.name + " | Age "+ this.age);
     EmployeePackage();
    }

    Object.defineProperty(this, "monthlySales", {
        get: function(){
            return monthlySales;
        }, 
        set: function(value){
            // setter we can apply some validations
            monthlySales= value;
        }

    })
 }
 const Employe = new Employee('MK', 16, 898);
 Employe.monthlySales;
 Employe.EmployeeDetails();
 Employe.monthlySales= 19;