const buttons= document.querySelectorAll('.buton')
const body=document.querySelector('body')
// buttons.forEach((button)=>{ // it works without using forEach this is another story for other time
    addEventListener('click',(e)=>{
        console.log(e);//event type
        console.log(e.target)//where from this event happend
        if(e.target.id==="one")
          {
            body.style.backgroundColor='yellow'
          }
          if(e.target.id==="two")
          {
            body.style.backgroundColor='green'
          }
          if(e.target.id==="three")
          {
            body.style.backgroundColor='red'
          }
          if(e.target.id==="four")
          {
            body.style.backgroundColor='blue'
          }
      });


// });