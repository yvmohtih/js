// Singleton
// object literals 

// Object.create
const mySym = Symbol("key1")


const JsUser = {
    name:"Hitesh",
    "full name":"Hitesh Choudary",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
 // console.log(JsUser[email]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

//  console.log(JsUser);

JsUser.greeting = function(){
    console.log("heloo js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
