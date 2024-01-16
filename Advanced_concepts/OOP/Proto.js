// function multiplybyfive(num){
//     return num*5
// }
// multiplybyfive.two=2 // function behaving like object eventually  everything comes from the root of object object 
//   console.log(multiplybyfive(5))
//   console.log(multiplybyfive.two)
//   console.log(multiplybyfive.prototype)// prototype is this of multiplybyfive which is {} in this case 
  
  
  // injecting my own function in prototype list that we seen console of the browser
  // function createUser(name,loggedId){
  //          this.name=name;
  //          this.loggedId=loggedId;
  // }
  // createUser.prototype.increament=function (){
  //  console.log(this.loggedId++); //jisny call kya usko ++ kar do this matlab jis ---- > so jisny bhi bulaya usky pass jao
  // }
  // createUser.prototype.printme=function(){
  //   console.log(`logged Id : ${this.loggedId}`)// jis object ny bhi bulaya osko bheej dooo jisny loggedId pochii oska score bta do 
  // }


  // const chai=new createUser('Usman','23')
  // const tea=new createUser('ali','34')
  // // access case  instead of Array.prototype.map() we use Array.map() 
  // // so in this way 
  // chai.increament()
  // chai.printme()
  // tea.increament()
  // tea.printme()
  //----------------------MMMM-------------------//
//   let array=['hukman','spiderman']
//   Array.prototype.inject=function(){
//     console.log('added array')
//   }
 //   array.inject()
//
//                       const heroPower={
//                         thor:'hammer',
//                         spiderMan:'sling',
//                         getSpiderPower  : function(){ 
//                           console.log(`spider power is ${this.spiderMan}`);
//                          }

//                            }
//                            heroPower.truelength()
//                            "ali".truelength() 
//                            Object.prototype.Usman=function(){
//                             console.log('Usman is available for all objects ')
//                            }
// heroPower.Usman()
// array.Usman() // array can access object according to hiteesh sir pictorial presentation according to inheritance child can access parent
// but object can't access ARRAY like parent can't access child although child can access parent 
 //---------------------------------<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>-------------------------//
 // inheritance
//  const Teacher={
//                 teacherName:'usman',
//                 teacheID:'1234'
//  }
//  const TAsupport={
//          makeAssignment:'JS',
//          fulltime:'yes',
//          password:'0312',
//         //  __proto__:Teacher// bad practice 
//  }
// //  TAsupport.__proto__=Teacher// other bad practice
// Object.setPrototypeOf(TAsupport,Teacher)
//  console.log(TAsupport.teacherName);
//  console.log(TAsupport.teacheID);
//------------------------<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>---------------------//

let newname="shuja     "
 
  String.prototype.truelength=function(){   //  injected in main object proto type it will available for all objects 
        console.log(this)
        console.log(`${this.trim().length}`);
  }
  "ali".truelength()
  newname.truelength()// created new method to find length