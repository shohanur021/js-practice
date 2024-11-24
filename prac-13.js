// const fruits = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
// ];

// function myCallback( {quantity} ){
//     return quantity>200 ? "OK" : "Low";
// }

// const result = Object.groupBy(fruits, myCallback);

// console.log(result);




const temp = [27, 28, 30, 40, 42, 35, 30];
const r2 = temp.findLast( x => x>35 );
console.log(r2);

let pos = temp.findLastIndex(x => x > 30);
console.log(pos);

const sorted = temp.toSorted();
console.log(sorted);

const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
console.log(reversed);

const spliced = months.toSpliced(0, 1);
console.log(spliced);


const months2 = ["Januar", "Februar", "Mar", "April"];
const new2 = months2.with(2, "March");
console.log(months2);
console.log(new2);