// we need to make object to call function
// let date=new Date();
// const button=document.querySelector('.orange')
// button.innerHTML= date.toLocaleDateString();

const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


