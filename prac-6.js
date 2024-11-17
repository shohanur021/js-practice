function addition(x,y,z){
     return x+y+z;
}
result1 = addition(20,45,30);
// console.log(result1);



const a = function multiplication(x,y){ return x*y}
// console.log(a(5,30));



const myFunction = new Function("a", "b","c", "return a * b * c");
let result2 = myFunction(4, 3, 2);
// console.log(result2);



// console.log(myFunction2(5));

function myFunction2(y) {
  return y * y;
}



const i = myFunction2(10) * 7;
// console.log(i);



(function(y){
    let x = "Pi poo";
    x = "Sorry";
    console.log(x, y);
})(50)



function myFunction3(a, b, c) {
    return arguments.length;
}
const l = myFunction3(10,20,30,4,40);
// console.log(l);



const d = (x, y) => {
    console.log("Yoo");
    return x/y;
}
// console.log(50,5);



function myFunction4(x, y = 10) {
    return x + y;
}
// console.log(myFunction4(5));



function sum(...args) {
    console.log(args)
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sum(4, 9, 16, 25, 29, 100, 66, 77)); 