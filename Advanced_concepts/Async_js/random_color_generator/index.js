const randomColor=function(){
    
    const hex='0123456789ABCDEF'// hex values
    let color='#'
    for (let index = 0; index < 6; index++) {
        color += hex[Math.round(Math.random()*16)];//hex[index 0 to 5 and koi si  bhi value  0 toooo F ]
    }
    return color
    // with out return console.log gives undefined in case of console.log(randomColor())
}
// console.log(randomColor)//gives all about function has in randomColor
console.log(randomColor());
// console.log(Math.round(Math.random()*16))
let stop;
const body = document.querySelector('body')
let startChangeColor=function(){
    let chaangeColor=function(){body.style.backgroundColor=randomColor()}
   if (stop==null) {  // chek applied
    stop= setInterval(chaangeColor,2000)
   } 
  

}
let stopColorChange=function(){
    clearTimeout(stop)
    stop=null// to prevent overwrite issue in color genarator 
}
document.querySelector('.start').addEventListener('click',startChangeColor)
document.querySelector('.stop').addEventListener('click',stopColorChange)




