// var c = 300
let a = 300

if (true){
    let a = 10
    let b = 20
    c = 30
    console.log("Inner a:",a);
    
}

// console.log(a);
// console.log(b);
// console.log(a);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        console.log((username+website));
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++ interesting ++++++++++++
function addone(num){
    return num +1
}
console.log(addone(5));
// addTwo(5)
const addTwo = function(num){
    return num+2
}

