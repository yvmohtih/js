// Immediately invoked function expressions (IIFE)
(
function chai(){
    console.log("DB conected");
})();
// chai()


( (name) => {
    console.log(`DB conected Two ${name}`);
})("hitesh")