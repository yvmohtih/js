// const tindUser = new Object()

const tindUser = {}
tindUser.id = "123abc"
tindUser.name = "sammy"
tindUser.isLoggedIn=false

// console.log(tindUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudary"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}


// console.log(obj3);

// const users = {

// }

// users[1].email;
console.log(tindUser);
console.log(Object.keys(tindUser));
console.log(Object.values(tindUser));
console.log(Object.entries(tindUser));
console.log(tindUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

// course .courseInstructor

const {courseInstructor: instructor}= course

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ((company)) =>{

// }

// navbar(company = "hitesh")

//  {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
//  }

[
    {},
    {},
    {}
]

