// for

for(let i=0;i<10 ; i++){
    const element = i
    console.log(element);
    if(element == 5){
        console.log("5 is best number");
    }
}
// console.log(element);

// for (let i=0;i<=10;i++){
//     // console.log(`inner loop ${i}`);
    
//     for(let j=0;j<=10;j++){
//         // console.log(`Inner loop${i} and outer loop ${j}`);
//         console.log(i + '*' + j ,i*j);
        
//     }
// }
let myArray = ["fla","bat","sup"]

console.log(myArray);

for(let i=0;i<myArray.length ;i++){
    const element = myArray[i]
    console.log(element);
}
// break and continue

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];    
// }

for (let i=0;i<=20;i++){
    
    if (i == 5){
        console.log(" detected");
        continue
    }
    console.log("Index of ",i);
    
}