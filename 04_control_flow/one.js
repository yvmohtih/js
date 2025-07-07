// if


// const isUserLoggedIn = true
const temperature= 41
if(temperature > 50){
    console.log("less than 50");
}else{
    console.log("temperatue greate than 50");
}
// 2 < 2
// >,<,<=,>=,==,!=,===


const score = 200
if(score > 100){
    var power = "fly"
    console.log(`user power :${power}`);
}
console.log(`user power :${power}`);

// const balance = 100
// // if(balance > 500) console.log("test"),console.log("tes2");

// if(balance < 500){
//     console.log("less than 50");
// }else if(balance < 750){
//     console.log("less than 750");
// }else{
//     console.log('less than 1000');
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFRomGoogle = false
const loggedInFromMail = false
if(isUserLoggedIn && debitCard && 2==3){
    console.log("allow to buy course");
}
if(loggedInFRomGoogle || loggedInFromMail){
    console.log('user logged in');
    
}
