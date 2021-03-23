// What is this?
// Why do we need to bind things?
// Why is this a thing? Why do we need this in JavaScript?

// 1. this is always the object that is executing the function. 
// 2. this always refers to the context where the function is being called, 
// not the context where the function is defined.
// 3. use the bind, call and apply keywords to bind your objects to functions. 

console.log(this)

const sandwich = {
    filling: 'hummus',
    salad: ['tomatoes', 'lettuce', 'cucumber' ],
    assemble() {
      this.salad.map(function(saladItem) {
        console.log(this.filling, saladItem)
      }, this)
    },
    eat() {
      console.log('yum, ', this.filling)
    }
}
sandwich.eat()
sandwich.assemble()

// let eatFunction = sandwich.eat
// eatFunction = eatFunction.bind(sandwich)

let eatFunction = function(item1, item2, item3) {
    console.log('yum, ', this.filling, item1, item2, item3)
}
eatFunction()
// eatFunction = eatFunction.bind(sandwich)

// eatFunction.call(sandwich)

const salad = ['tomatoes', 'lettuce', 'cucumber']

eatFunction.apply(sandwich, salad)

function Sandwich(filling) {
    this.filling = filling
    console.log(this)
}
const hotDog = new Sandwich('sausage')