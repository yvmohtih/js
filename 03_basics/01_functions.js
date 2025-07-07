// console.log("H");
// console.log("I");
// console.log("H");
// console.log("H");
// console.log("H");

// function sayName(){
//     console.log("H");
//     console.log("I");
//     console.log("H");
//     console.log("H");
//     console.log("H");

// }
// sayName()
function addTwoNumbers(number1,number2){
    let res = number1+number2
    console.log("hitesh");
    return res
    console.log("hitesh");
    
    
}
const res = addTwoNumbers(3,5)

// console.log("Result: ",res);

function loginUserMessage(username){
    if (!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));


const user={
    username:"hitesh",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
