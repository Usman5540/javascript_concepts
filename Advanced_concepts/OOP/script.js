// object literal means literally an object {}
// const obj={  properties:   
//fun:function(){}}  
//  console.log(reference obj)
//console.log(complete function ---> fun())

// const obj={
//     name: 'usman',
//     age:'25',
//     fun:function(){
//         let name='father of the gate'
//         // return name
//         //current context this shows
//         // console.log(this)
//         // return this.name 
//         // this return property name which is usman
//         // return name
//         // it returns local name 
//         // return age ; // generates an error becaues compiler don't know which age we are taking about
//         return this.age;
//     }
// }
// console.log(this)// current context {} empty  
// console.log(obj)
// console.log(obj.fun())
// console.log(obj.name)
//-------------------------------------------<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>---------------------//
// constructor function------> or ---------->>>>>factory function???????

function user(username,password,loggedId ){
    this.username=username
    this.password=password
    this.loggedId=loggedId
return this  // implicitly this will returned we do not need to return explicitly
}
// let user1=user('usman@gmail.com','231231',true)
// let user2=user('ali@gmail.com','231',false)
// console.log(user1);// crypto: [Getter],username: 'ali@gmail.com',password: '231',loggedId: fals ----->> values are overwritten
// in the absence of new key word beacuse we do not create new  separate objects for both users 
let user1=new user('usman@gmail.com','231231',true)  // no 2 copy-->>separte copy of above constructor function
let user2= new user('ali@gmail.com','231',false)// no 2 copy-->>separte copy of above constructor function 
 console.log(user1)
 // using new key word an empty object like console.log(this)-->{} will creates each time 