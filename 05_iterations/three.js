// // for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

const greetings = " Hello World !"
for(const c of greetings){
    console.log(`Each char is ${c}`);
}


// Maps

const map = new Map()
map.set('IN','India')
map.set('USA',"united states of amera=ic")
map.set('Fr',"France")

// console.log(map);

for (const [key,value] of map){
    console.log(key,':-',value);
}

const myObject = {
    'game1':'nFS',
    'game2':'spiderman'
}

// for(const [key,value] of myObject){
//     console.log(key,':-'),value;
    
// }