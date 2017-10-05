
//define a class 
const makeCounter = () => {
    // private item
    let privateCounter = 0;
    
    function plus(val) {
        privateCounter += val;
    }
    function multiply(val) {
        privateCounter *= val;
    }
    return {
        increment: () => plus(1),
        decrement: () => plus(-1),
        double: () => multiply(2),
        half: () => multiply(0.5),
        value: () => privateCounter,
    }
}

const a = makeCounter(); // a is closure
const b = makeCounter(); // b is closure
const c = makeCounter(); // c is closure
const d = makeCounter(); // d is closure
a.increment();
a.increment();
console.log('a = ' + a.value());
b.decrement();
console.log('b = ' + b.value());
c.increment();
c.double();
console.log('c = ' + c.value());

