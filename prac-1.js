const student = {};
student.name = "Sajib";
student.roll = 5;
student.age = 20;
student.result = "A+";
// console.log(student);

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
// console.log(person);

function Employee(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const manager = new Employee("John", "Doe", 50, "blue");
const worker = new Employee("Sally", "Rally", 48, "green");
const labour = new Employee("Anna", "Rally", 18, "green");
// console.log(manager);
// console.log(worker);
// console.log(labour);

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
  }

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log(myFather);
console.log(myMother.nationality);