const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
};
Object.defineProperty(person,"year",{value:2024});
// console.log(person.year);



const person2 = {
    firstName: "Shohan",
    lastName : "Khan",
    language : "BN"
};
Object.defineProperty(person2,"language",{value:"DN"});
// console.log(person2);



const person3 = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
};
let text = Object.getOwnPropertyNames(person3);
console.log(text);
console.log(Array.isArray(text));



const person4 = {
    firstName: "John",
    lastName : "Doe",
    language : "CN"
};
Object.defineProperty(person4, "language", {enumerable:false});
console.log(person4);
console.log(person4.language);



const person5 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
};
console.log(person5.fullName);



const person6 = {
    firstName: "John",
    lastName: "Doe",
    language: "PN",
    set lang(lang) {
      return this.language = lang;
    }
  };

person6.lang="en";
console.log(person6.language);