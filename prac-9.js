class Car {
    constructor(b) {
      this.backside = b;
      this.color = "red";
    }
    present() {
      return 'I have a ' + this.backside;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super();
      this.model = mod;
    }
    show() {
      return this.color;
    }
  }

const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());





class Bus{
    constructor(n){
        this._busName = n;
    }

    get bName(){
        return this._busName;
    }

    set bName(x){
        this._busName = x;
    }

    static hello(name){
        return "hello "+name ;
    }
}

const myBus = new Bus("Titas");
console.log(myBus._busName);
myBus.bName = "hanif";
console.log(myBus._busName);


console.log(Bus.hello("Programmer"));