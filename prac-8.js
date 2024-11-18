const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}
  
const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}
  
let fName = person.fullName.bind(member);
console.log(fName());

setTimeout(fName,3000);


class Car{

  constructor(name, year, color){
     this.name = name;
     this.year = year;
     this.color = color;
  }

  age(condition){
      const d = new Date();
      return (d.getFullYear() - this.year) +" "+ condition;
  }
}

const c1 = new Car("Rord", 2010, "Red");
const c2 = new Car("BMW", 2003, "Black");

console.log(c1);
console.log(typeof(c1));
console.log(c2.age("Good"));





class Car2 {
  constructor(brand) {
    this.carname = brand;
    let color = "red";
    console.log(color);
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car2{
  constructor(brand, mod){
     super(brand);
     this.model = mod;
  }
  show(price) {
    console.log(price);
    console.log(this.carname);
    console.log(this.color);
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show(5000));




console.log(addition(50, 65));

function addition(a, b){
  return a+b;
}



