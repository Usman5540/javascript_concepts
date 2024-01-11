// for in loop 
const object= {
    cpp:' c ++',
    js:'javascript',
    rb:'ruby',
    p :'python',
}
for (const key in object) {

    console.log( `${key} shorter from is object${object[key]}`)
}
const arr=['ali','waleed','baqi sb']
for (const key in arr) {
 
    console.log(key)
}
// for in loop gives keys and for of loop simple loop like for loop
// for of loop 
const arr2=['usman','usama']
for (const val of arr) {
    console.log(val)
}
// key value pair as we learnt in java they store unique value don't duplicates 
// and stores patterns you can say tarteep bhi 
const m= new Map()
m.set('29',"usman")
m.set('13',"waleed")
for (const [key,value] of m) {
    console.log(key,value)
    
}
// for of loop

//--------------------------------------------------------------------//


// for each loop 
const now=['ali','usamn','wali','jali']
now.forEach(  function (item){console.log(item)})
now.forEach( (item) =>{console.log(item)})
//() =>{}
// function name(){}
//call back do not use name
function newone(item){console.log(item)}
now.forEach(newone) 

// all about for each loop
now.forEach((item,index,now)=>{console.log(item,index,now)})
//------------------------<<<<<>>>>>------------------//

//special case of for each loop 
const array=[
    {
        phone:'nokia',
        price:'10000',
    },
    {
        phone:'samsung',
        price:'134243',
    },
    {
        phone:'oppo',
        price:'134666',
    },
    {
        phone:'huawei',
        price:'1005555',
    }
]
array.forEach((item)=>{
console.log(item.phone)
console.log(item.price)
})