let x = myFunction();            // x will be the window object

function myFunction() {
  return this;
}
// console.log(x);


console.log(this);


const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this;
    }
  }
  
  // This will return [object Object] (the owner object)
console.log(myObject.fullName());




const person = {
    fullName: function() {
      return this;
    }
}
const person1 = {
    firstName:"monir",
    lastName: "khan"
}
const person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
// This will return "John Doe":
console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));




const employee = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const employee1 = {
    firstName:"John",
    lastName: "Doe"
}
console.log(employee.fullName.call(employee1, "Oslo", "Norway"));
console.log(employee.fullName.apply(employee1, ["Rasid", "Rahman"] ));



const person5 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}
  



