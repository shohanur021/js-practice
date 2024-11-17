function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
  }

const friend_1 = new Person("John", "Doe", 50, "blue");

Person.prototype.hair = "brown";

const friend_2 = new Person("Sally", "Rally", 48, "green");

console.log(friend_1.hair);
console.log(friend_2.hair);


function Employee(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
Employee.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

const manager = new Employee("John", "Doe", 50, "blue");
console.log(manager.name());

