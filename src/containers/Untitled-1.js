
//Mutability & Immutability 
//Primitive Type
let name = 'sumit';
let name2 = name;

name2 = 'Evonne';

console.log(name);
console.log(name2)

//Refrence type

var pokemon = {
    name:'pikachu',
    power:'electricity'
}

let pokemon2 = {...pokemon};

pokemon2.power = 'water';

console.log(pokemon);
console.log(pokemon2);

// const person = {
//     name: 'Sumit',
//     address: 'London'
// }

// const newPerson = {...person};
// newPerson.address = "Leeds"

// console.log(person)

// sayHello()
// // newfunction()
// console.log(name)
// console.log(add)
// // sayBye()


// function sayHello () {
//     console.log('Hello')
// }

// let newfunction = function(){
//  let x = 5;
//     if(n <= 8){
//         x 
//     }
//     console.log('newfunction')
// }

// var name = 'Sumeet'
// var add = 'London'

// var sayBye = () => {
//     console.log('Bye')
// }

