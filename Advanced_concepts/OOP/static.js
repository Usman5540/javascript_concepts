class  user{
    constructor(username){
        this.username=username
       }
       
       static getLoggedId(){
           console.log(`${this.username}`)
       }
       
   }
   class secondUser extends user{
               constructor(username,password,email){
                   super(username)// resolve call method 
                   this.email=email
                   this.password=password
                   
                   };

            getpassword(){
              console.log(`${this.password}`)
            }

}
const chai=new secondUser('usman','1231','usman@gmail.com')
const chai1=new user('usman')
// chai.getLoggedId()
console.log(chai1)
chai.getLoggedId()// static can't be accessed any case outside the class
