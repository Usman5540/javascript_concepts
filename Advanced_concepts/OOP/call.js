function upperfun(username){
     //conplex db implementation out source in usa
     this.username=username
     console.log('clicked')// call too ho raha hai yaar bind ki trah
}//without using this in lowfun funtion this will take username as input and get executed and removed from stack 
// out put lowfun { password: '123112', email: 'usman@gmial.com' } before this 
function lowfun(username,email,password){
     // in pakistan it will be understood by console.log chai
    upperfun.call(this,username)
    // by using this it will hold the reference of the calling function 
    // tum apna this mat use kro wo execution k baad gaib hoo jaye ga tum mera wala use kro 
        upperfun(username)// call ho nahi raha hai in bind nadleClick will atleast calls and print clicked
          this.password=password
          this.email=email
          // {har 1 bracket ka this hota hai scope ka }
          

}
let chai= new lowfun('usman','usman@gmial.com','123112')
console.log(chai);

//----------------<<<<<<<<<<<<<<<>>>>>>>>>>>>------------------//
// inheritance 
// class  user{
//     constructor(username){
//         this.username=username
//        }
       
//        getLoggedId(){
//            console.log(`${this.username}`)
//        }
       
//    }
//    class secondUser extends user{
//                constructor(username,password,email){
//                    super(username)// resolve call method issue
//                    this.email=email
//                    this.password=password
                   
//                    };

//             getpassword(){
//               console.log(`${this.password}`)
//             }

// }
// const tea=new user()
// const chai1=new secondUser('usamn','312','usman@gmail.com')
// // console.log(chai1);
// console.log(chai1.getLoggedId())
// // console.log(chai1===secondUser)
// console.log(chai1 instanceof secondUser)
// console.log(tea instanceof secondUser)
// console.log(tea instanceof user)
