// class user{

//     constructor(username,password,email){
//         this.email=email
//         this.password=password
//         this.username=username
//     };
//              getpassword(){
//                console.log(`${this.password}`)
//              }

//  }
//  const chai=new user('usman','1231','usman@gmail.com')
//  console.log(chai.getpassword())

 

// function user(username,password,email)
// {
//         this.email=email
//         this.password=password
//         this.username=username
// }
    
//  user.prototype.getpassword=function()
// {
//  console.log(`${this.password}`)

// }
    
//  const chai1 = new user('usman','1231','usman@gmail.com')
//  console.log(chai1.getpassword())
 
 //-------------------<<<<<<<<<<<>>>>>>>>>>>>>------------------//
 // inheritance 
 class  user{
     constructor(username){
         this.username=username
        }
        
        getLoggedId(){
            console.log(`${this.username}`)
        }
        
    }
    class secondUser extends user{
                constructor(username,password,email){
                    super(username)// resolve call method issue
                    this.email=email
                    this.password=password
                    
                    };

             getpassword(){
               console.log(`${this.password}`)
             }

 }
 const chai1=new secondUser('usamn','312','usman@gmail.com')
 console.log(chai1);
 