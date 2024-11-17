const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
const person2 = {firstName: "Anne",lastName: "Smith",hair: "brown"};
  
Object.assign(person1, person2);

// console.log(person1);
// console.log(person2);

const arr = Object.entries(person2);
// console.log(arr);


const fruits = {Bananas:300, Oranges:200, Apples:500};
let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "\t";
}
// console.log(text);


const myMap = new Map(Object.entries(fruits));
// console.log(myMap);
// console.log(typeof(myMap));


const fruits2 = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];
const myObj = Object.fromEntries(fruits2);
console.log(myObj);



const person3 = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
};
const arr3 = Object.values(person3);
console.log(arr3);
const arr4 = Object.keys(person3);
console.log(arr4);



const fruits5 = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
];

function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
const result = Object.groupBy(fruits5,myCallback);
console.log(result);