// Primitive

// 7 types : String, Number , Boolean , null , undefined,Symbol
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id == anotherId);

const bigNumber = 34567898585934785939653

// Reference type(Non primitive)

// Array,Objects,Functions

const heros = ["shaktiman","nagraj","moh"]
let myObj = {
    name:"hitesh",
    age:18,
}

const myFunction = function () {
    console.log("heloo world")
}
console.log(typeof heros);


// read all the datatypes