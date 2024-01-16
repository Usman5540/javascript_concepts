class React{

       constructor(){
        this.library='React';
        this.Server="https://localhost:2999";
        document.querySelector('button').addEventListener('click',this.handleClick.bind(this)) 
        // is class ka handleclick
    // pehal this ye batany k liye k React ka handleClick aur dosra properties ko accessable bna raha hai 
    // handleClick k liye bind kr bheej raha hai  
       }

       
       handleClick(){
        console.log('clicked');
        console.log(this.Server)// will print jisny call kya isko current reference deta hai 
        //   <button>Button clicked</button>

       }

}
const chai=new React() 
// after creating an object consturctor will set the values then it will be available for eventlistener
