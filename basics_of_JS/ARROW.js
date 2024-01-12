const one=(num1,num2)=>{
return num1+num2 
}
console.log(one(2,4))
// second method 
const two =(num,num3)=> num+num3
    console.log(two(4,5))

    const three =(num,num3)=>  (num+num3)
    console.log(three(1,2))

    // here we do not need to write return statement 
//  way to return object in js which is little bit different 
const four=(num4,num5)=> ({username:" usman "})
console.log(four(2,4))