//resolve(takes call back)
// prosmise will complete in future
// promise will run after async completion to notify async completion   successful or failure 
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// const promise=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('async task is completed')
//         resolve()
//     }, 1000);
// })
// promise.then(()=>{
//     console.log('promise is notified')
// })
// console.log(promise)
//------------------------<<<<<<<<<<<>>>>>>>-------------//
// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('async task 1 is completed')
//    resolve( { username: 'mu554024@gmail.com', password: '123123' });
// }, 1000);
// })
// promise1.then((user)=>{
//     console.log(user)
// })
//------------------<<<<<<<<<<>>>>>>------------------//
// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('async task is completed')
//         let error=false
//         if (!error) {
            
//             resolve( { username: 'mu554024@gmail.com', password: '123123' });
//         }
//         else{
//             reject({error:'something went wrong'})
//         }
// }, 1000);
// }).then((user)=>{
//       return user.password

// }).then((password)=>{
//     console.log(password)
//     // we have to add catch() due to reject method
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=> console.log('promise is rejected or completed'))
//----------------------<<<<<<<<>>>>>>>>>----------------------//


// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task is completed');
//         let error = true;

//         if (!error) {
//             resolve({ username: 'mu554024@gmail.com', password: '123123' });
//         } else {
//             reject({ error: 'Something went wrong' });
//         }
//     }, 1000);
// });
// // it awaits untill async taks completes and then notify like promise in error case we have to wrap uup try catch 

// async function consumePromiseThree() {
//     try {
//         const result = await promise3;
//         console.log('Resolved:', result);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// consumePromiseThree();
//-------------------<<<<<<<>>>>>--------------//
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task is completed');
//         let error = false;
//         // error false case we do not need try catch like this expriment

//         if (!error) {
//             resolve({ username: 'mu554024@gmail.com', password: '123123' });
//         } else {
//             reject({ error: 'Something went wrong' });
//         }
//     }, 1000);
// });
// // it awaits untill async taks completes and then notify like promise in error case we have to wrap uup try catch 

// async function consumePromisefour() {
//     const v=await promise4
//            console.log(v)
// }
// consumePromisefour();
//-----------------<<<<<<<<<<<<>>>>>>>>>-----------------//
async function apifetch(){
    try {
        const reponse= await fetch('https://jsonplaceholder.typicode.com/users')
        // according to hiteesh sir diagram fectch putted in stack as very first priority and axecuted 
        // then async task runs 
        // console.log(reponse)
        // const resp=reponse.json() not working it took time to convert in jason file so we have to use 
        // await to wait josn conversion
        const resp= await reponse.json()
       console.log(resp )
    } catch (error) {
        console.log('error',error)
    }

}
apifetch()


//------------------------------------------//
// (fetch('https://jsonplaceholder.typicode.com/users'))
// .then((user)=>{
//     return user.json() 
//     // works like await 
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//  console.log(error)
// })

//-----------------------<<<<<<<<<<>>>>>>>>>>>----------------//

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
  
//     stringReturn: function () {
//       const name = 'ali';
//       return name;
//     }
//   };
//   console.log(person.stringReturn())
//   console.log(person.lastName)
//   // CONVERT INTO JASON IT IS UNDERSTOOD BY ALL LANGUAGES 
//   const jsonString = JSON.stringify(person);
//   console.log(jsonString);
// // CONVERTS BACK  INTO NORMAL STRING
//   const jsonString1 = JSON.parse(JSON.stringify(person))
//   console.log(jsonString1);
  //----------------------<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>--------------------//

  
