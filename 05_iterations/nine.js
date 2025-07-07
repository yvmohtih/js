const myNums = [1,2,3]


// const myTotal= myNums.reduce( function(acc,currval) {
//     console.log(`acc : ${acc} and curval : ${currval}`);
    
//     return acc+currval
// },0)

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName:"python course",
        price:1299
    },
    {
        itemName:"app dev course",
        price:1299
    },
    {
        itemName:"ruby course",
        price:1299
    },
    {
        itemName:"js course",
        price:1299
    },
]
const priceToPay = shoppingCart.reduce( ( acc,item) => acc+item.price , 0)
console.log(priceToPay);
