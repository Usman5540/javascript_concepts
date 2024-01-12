//let try to check for each returen values or not 
// const coding1=['java','python ','c++','ruby ','javascript']
// const values1=coding.forEach((item)=>{return console.log(item)})
// console.log(values)
// const coding2=['java','python ','c++','ruby ','javascript']
// const values2=coding2.forEach((item)=> console.log(item))
// console.log(values2)
// const coding3=['java','python ','c++','ruby ','javascript']
// const values3=coding3.forEach((item)=>{ console.log(item)
//   return item  })
// console.log(values3)
// const coding=['java','python ','c++','ruby ','javascript']
// const values=coding.forEach((item)=>{
//     //  console.log(item)
//   return item       })
// console.log(values)
// by using multiple ways it is next to impossible to returnn values through for each loop everthing returning ****undefined 

//---------------------------------------------<<<<<<<<<<<<<>>>>>>>>>>>>>>------------------------------------------//
//cases in loop

//1 print each value
// 2 return some values
// 3 or check conditionally 


// take an other example 
// const array1=[1,2,3,4,5,6,7,,8,9]
// array.forEach((item)=> {      // simple for each loop the syntax given by code editor which is array.forEach( item =>{})
//     console.log(item)
    
// });
// in case of large array database we want to fetch or want to perform specific returns it could not happanded in case of for each loop
// to do this we will use filter(()=>{conditions})
// const retur=array.filter((item)=> item>5)  // if we want to return values or want to print out  of scope then we need to stor loop in varible okkkkkkkk
// console.log(retur) 
// point to be noted it does  not returns undefined values let check 
// array.filter( (item)=>  item > 5 ) 
//-----------------------------------------<<<<<<<<<>>>>>>>>---------------------------------------//
// const array=[1,2,3,4,5,6,7,,8,9]
// way to return values using for eahc loop 

// const newarray=[];

// array.forEach((item)=>{

// if(item>4)
//            newarray.push(item);

// })
// console.log(newarray)
//-------------------------------<<<<<<<<<<<<<<<<>>>>>>>>>>------------------------------------//
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
// // let value=books.filter((book)=> book.genre > 'Non-Fiction' && book.publish > '1992') 
// let value=books.filter((Book)=>{
//   return Book.genre ==='History' ;
// });
// console.log(value)
//-------------------------------<<<<<<<<<<<<<>>>>>>>>>>>-------------------------//
// map()
// const array=[1,2,3,4,5,6,7,8,9]

// const v=array.map((item)=> item *5).map((item)=> item+1).filter((item)=> item >20)
// console.log(v)

//-----------------------------------<<<<<<<<<<<<<>>>>>>>>>>>--------------------------//
//reduce used in shopping cart 
const array=[1,2,3,4,5,6,7,8,9]
// const  r=array.reduce((acc,currval)=> {
//     console.log(`acc:${acc} current value  ${currval}`)

// return acc+currval
// },0)

const realReturn=array.reduce((acc,currval) => acc+currval,0)
console.log(realReturn)