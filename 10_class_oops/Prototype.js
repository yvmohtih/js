// let myName = "hitesh.   "
// let myChannel = " chaii.        "

// console.log(myName.trim().length);


let myHeroes =["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpider:function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}


Object.prototype.hitesh = function(){
    console.log("hitesh is present in all subject");   
}

Array.prototype.heyHitesh = function(){
    console.log("Say Hello");
}

// heroPower.hitesh()
// myHeroes.hitesh()
// myHeroes.heyHitesh()
// heroPower.heyHitesh()

// inheritance 
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment:'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherName = "chaiaurcode.  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length}`)
}

anotherName.trueLength()
"hitesh".trueLength()
"icetea".trueLength()