const name="hitesh"

const repocount = 60

// console.log(name+repocount+"Value")

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const getName = new String('hites-hc')
// console.log(getName[0]);
// console.log(getName.__proto__);
// console.log(getName.length);
// console.log(getName.toUpperCase());
// console.log(getName.charAt(2));
// console.log(getName.indexOf('t'));

const newString=getName.substring(0,4)
console.log(newString);

const anotherString = getName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(getName.split('-'));

