// function chai (){
//     console.log(`db connectd`)
// }
// chai()
// an other way 
(function chai(){
    console.log(`db connect`)
})() ; // to prevent error we have to add semi colon to stop panicing 
// second way of iife smae as chai-----------> execution call()
// to prevent global scope plution 
(function chai2 (){
    console.log(`db connected 2 `)
})();
// second way by using arrow function 
( () => {
    console.log(`db connected 3 `)
})()