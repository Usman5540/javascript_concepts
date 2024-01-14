    let randomNumber= parseInt(Math.random()*100+1);
    const button=document.querySelector('.submit')
    const input=document.querySelector('.input')
    const preGuess=document.querySelector('.previous')
    const Remaining=document.querySelector('.Remaining')
    const result=document.querySelector('.lowOrHigh')
    const startOver=document.querySelector('.resultdiv')
    let PrevGuessArray=[]
    let PlayGame=true;
    const p=document.createElement('p')
    let numGuess=1;
    if(PlayGame){
    button.addEventListener('click',function(e){
            (e.preventDefault()); 
        const guess=parseInt(input.value);
        // console.log(guess);
        validateGuess(guess)
        
    })
    }
    function validateGuess(guess){
            if (isNaN(guess)||guess<1 ||guess>50) {
                alert(`enter valid number`)}
                else {
                PrevGuessArray.push(guess)
            if (numGuess==11) {
                displayGuess(guess)
                displayMessage(`Game is over your randomNumer ${randomNumber}` )
                endGame()
            }
            else {
            displayGuess(guess)
            checkGuess(guess)
            }
            }

    }

    function checkGuess(guess){
            if (guess==randomNumber) {
                displayMessage(`you won`)
                endGame()
            }
            else if(guess<randomNumber){
                displayMessage(`your tooo low`)
    }
        else if(guess>randomNumber)
    {
        displayMessage(`your toOOO high`)
    }
    }
    function displayGuess(guess){
    input.value='';// it frees the input field
    preGuess.innerHTML +=`${guess}, `//first time it is 1
    numGuess++;// here becomes two first time
    Remaining.innerHTML =`${10-numGuess}`// so that is way here is 11
    }
    function displayMessage(message){
      result.innerHTML=`<h2>${message}</h2>`
    }
    function endGame(){
      input.value='';
      input.setAttribute('disabled','')
      p.classList.add('button')
      p.innerHTML='<h2 class="newGame">Start NewGame</h2>'
      startOver.appendChild(p)
      console.log(p)
      PlayGame=false

    }
    function newGame(){
     const v=document.querySelector('.newGame')
      v.addEventListener('click', function(e){
     randomNumber=parseInt(Math.random()*100+1);
      numGuess=1;
      PrevGuessArray=[]
      preGuess.innerHTML=''
      input.value=''
      input.removeAttribute('disabled')
      startOver.removeChild(p)
      PlayGame=true
      });// bugg remaining
      
    }
