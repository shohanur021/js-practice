const car = {type:"Fiat", model:"500", color:"white"};

Object.preventExtensions(car);
// This will throw an error:
// car.push = 350;
delete car.color;
console.log(car);



const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruits);
// This will throw an error:
// fruits.push("Kiwi");
console.log(Object.isExtensible(car));
console.log(Object.isExtensible(fruits));



const person = {firstName:"John", lastName:"Doe"};
Object.seal(person);
console.log(Object.isSealed(person));



const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
Object.freeze(fruits2);
// This will trow an error:
// fruits.push("Kiwi");
console.log(Object.isFrozen(fruits2));