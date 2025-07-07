const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (item) {
//     console.log(item);
    
// } )

coding.forEach( (item) => {
    // console.log(item);
    
})

// coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
    
})

const mycoding = [
    {
        languageName :"javascript",
        languageFieldName:"js"
    },
    {
        languageName :"python",
        languageFieldName:"py"
    },
    {
        languageName :"c++",
        languageFieldName:"cpp"
    },
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
    
})