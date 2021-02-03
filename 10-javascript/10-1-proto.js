const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeMachine(beans){
    this.beans = beans;
    // this.makeCoffee = (shots) => {
    //     console.log('making...')
    // }
}

//Prototype member level
CoffeMachine.prototype.makeCoffee = (shots) => {
    console.log('making...')
}
const machine1 = new CoffeMachine(10);
const machine2 = new CoffeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk){
    this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);

latteMachine.makeCoffee();