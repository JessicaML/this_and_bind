const sandwich = {
  filling: 'humous',
  salad: ['tomatoes', 'lettuce', 'cucumber' ],
  assemble() {
    this.salad.map(function(saladItem) {
      console.log(this.filling, saladItem)
    })
  },
  eat() {
    console.log('yum, ', this.filling)
  }
}

sandwich.eat() 

// new keyword

function Sandwich(filling) {
  this.filling = filling;
  console.log(this)
}

const hotDog = new Sandwich('sausage')

// BUT....

sandwich.assemble()

// BINDING!



let eatFunction = sandwich.eat

eatFunction();

let boundFunction = eatFunction.bind(sandwich); // this is explicit binding

boundFunction();

// call 

let eat = function(){
  console.log(this.filling)
}

let ploughmans = {
  filling: 'cheese'
}

eat.call(ploughmans)


// apply


let eaty = function(item1, item2, item3){
  console.log(this.filling)
  console.log(`Also includes some salad: , ${item1}, ${item2}, ${item3}`)
}

let ploughmansy = {
  filling: 'cheese',
}
let salad = ['tomatoes', 'lettuce', 'cucumber' ];

eaty.call(ploughmansy, salad[0], salad[1], salad[2] )




let eatyy = function(item1, item2, item3){
  console.log(this.filling)
  console.log(`Also includes some salad: , ${item1}, ${item2}, ${item3}`)
}

let ploughmansyy = {
  filling: 'cheese',
}
// let salad = ['tomatoes', 'lettuce', 'cucumber' ];

eatyy.apply(ploughmansyy, salad )


// another example



ploughmans.make = eat.bind(ploughmans)

// ploughmans.make()
// eat();



