// //ARRAY DESTRUCTURING

// const char=[ 'a','b','c','d','e','f','g','h','i']
// const arr=[1,2,4,5,6,7,8,9]
// // const [a,b,...rest]=arr
// // console.log(a)
// // console.log(b)
// // console.log(rest)
// // const newArray=[...char,...arr]
// // const newArray1=char.concat(arr)
// // bath works as same way 
// //out put down below
// // console.log(newArray)
// /*(17) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 1, 2, 4, 5, 6, 7, 8, 9]
// 0
// : 
// "a"
// 1
// : 
// "b"
// 2
// : 
// "c"
// 3
// : 
// "d"
// 4
// : 
// "e"
// 5
// : 
// "f"
// 6
// : 
// "g"
// 7
// : 
// "h"
// 8
// : 
// "i"
// 9
// : 
// 1
// 10
// : 
// 2
// 11
// : 
// 4
// 12
// : 
// 5
// 13
// : 
// 6
// 14
// : 
// 7
// 15
// : 
// 8
// 16
// : 
// 9
// length
// : 
// 17
// [[Prototype]]
// : 
// Array(0)*/

// function addNmulti(a,b){
//     return [a+b,a*b,a/b] // returning an array 
// }
// const combine=addNmulti(2,4)
// console.log(combine)
// /*
// (2) [6, 8]
// 0
// : 
// 6
// 1
// : 
// 8
// length
// : 
// 2*/
// // destructuring 
// const [sumii,multiply,division="not division"]=addNmulti(2,3)
// console.log(multiply)//output 6 
// console.log(division)// default output is "not division"
// console.log(division)//0.6666666666666666 output from index three which array being returned from function 

//-----------------------------<<<<<<<<<<<<<>>>>>>>>>>>>>>-----------//
// const personOne={
//     name:'ali',
//     age:'21',
//     favrouteFodd:"corn bread ",
//     address:{
//         city:"malya wala",
//         state:"punjab",
//     }
// }
// const persontwo={
//     name:'usman',
//     age:'26',
    
//     address:{
//         city:"Okara",
//         state:"lahore",
//     }
// }
// for destructuring object we use curly braces instead of sequre brackets

// const {age,name}=personOne
// console.log(age)// output 21
// for changing object name in curly braces use prev:new
// const {age:firstage,name:firstname,favrouteFodd="black cofee"}=personOne
// console.log(firstage)// output 21
// console.log(firstname)// output ali
// console.log(favrouteFodd)// black cofee
// console.log(favrouteFodd)//corn bread
// const {address:{city}}=personOne
// console.log(city)// output malya wala 

//---------------<<<<<<<<<>>>>>>>>------//
// const{age:secondAge,...rest}=persontwo
// console.log(secondAge)// output 26
// console.log(persontwo)// output down below
/* 
{name: 'usman', age: '26', address: {…}}
address
: 
{city: 'Okara', state: 'lahore'}
age
: 
"26"
name
: 
"usman"
[[Prototype]]
: 
Object */

//-------------------<<<<<<<<<>>>>>>>>>>>.-------/
const personOne={
    name:'ali',
    age:'21',
    favrouteFodd:"corn bread ",
    address:{
        city:"malya wala",
        state:"punjab",
    }
}
const personTwo={
    name:'usman',
    age:'26',
    
    // address:{
    //     city:"Okara",
    //     state:"lahore",
    // }
}
// combining two objects 
// const objectThree={...personOne,...personTwo}
/* {name: 'usman', age: '26', favrouteFodd: 'corn bread ', address: {…}}
address
: 
{city: 'malya wala', state: 'punjab'}
age
: 
"26"
favrouteFodd
: 
"corn bread "
name
: 
"usman" */
// const objectThree={...personTwo,...personOne}
/*

{name: 'ali', age: '21', favrouteFodd: 'corn bread ', address: {…}}
address
: 
{city: 'malya wala', state: 'punjab'}
age
: 
"21"
favrouteFodd
: 
"corn bread "
name
: 
"ali" */
// second overwrite the values on object one position vise if we  change the position and put personOne as second it will behave same ,second position object will overwrite the first positin object 

// console.log(objectThree)
// this is functionality used in react 
//_____<<<<<<<<<>>>>>>>____//

const personOneO1={
    name:'ali',
    age:'21',
    favrouteFodd:"corn bread ",
    address:{
        city:"malya wala",
        state:"punjab",
    }
}
// function objTraverse({age,name})
// function objTraverse({age,address:{city}})
function objTraverse({age ="43",address:{city="akhtra baad",twon="green city"}}){
    // console.log(user)
    // console.log(`age is ${user.age} name  is : ${user.name}`)//age is 21 name  is : ali
    // console.log(`age is of  ${age} name is  of ${name}`)//age is of  21 name is  of al
    // console.log(city)// malya wala 
    // console.log(age)
    // console.log(`age${age} city${city}`)//age21 citymalya wala
    console.log(city)// output is malya wala instead of akhtra baad
    console.log(age)//ouput is 21 instead of 43
    // beacuse these properties are already set in object
    console.log(twon)// green city 

}
objTraverse(personOneO1) // output all about person 
