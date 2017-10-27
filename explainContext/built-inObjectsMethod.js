function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.apply(this, [name, price]);
    this.category = 'food';
}	

function Toy(name, price) {
    Product.apply(this, [name, price]);
    this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log(cheese)
console.log(fun)






// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Fail' }
// ];

// // let displayAnimals = function (anii) {

// //     console.log('#' + i + ' ' + animals[i].species
// //         + ': ' + animals[i].name)
// // }
// animals.map((animal, j) => {
//     // displayAnimals()
//     // .call(animal, j)
//     console.log('#' + j + ' ' + animal.species
//             + ': ' + animal.name)
// })
//   // #0 Lion: King
//   // #1 Whale: Fail





this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();   
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
console.log(boundGetX())//81
// var boundGetX = retrieveX.call(module);
// console.log(boundGetX); // 81