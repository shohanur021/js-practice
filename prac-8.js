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


