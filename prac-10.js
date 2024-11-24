function myDisplay(total){
    console.log(total);
}

function myCalculator(num1, num2){
   let sum = num1+num2;
   myDisplay(sum);
}

myCalculator(10, 25);




function myDisplay2(p){
    console.log(p);
}

function myCalculator2(num1, num2, myCallBack){
    let result = num1 * num2;
    myCallBack(result);
}

myCalculator2(11, 20, myDisplay2);




const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function removeNeg(numbers, callback){
    const arr = [];
    for (const x of numbers){
        if(callback(x)){
            arr.push(x)
        }
    }
    return arr;
}

const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
console.log(posNumbers);





function myNameDisplay(){
    console.log("I am Shohanur");
}

setTimeout(myNameDisplay, 3000);

setTimeout(() => console.log("Wow Amazing"), 2000);





setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  let p = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  console.log(p);
}





