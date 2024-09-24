let num=Math.floor((Math.random()*100)+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]

let numGuess=1
let playGames=true
if(playGames){
    console.log(num)
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }
    else if(guess<1 || guess>100){
        alert("please enter number between 1 and 100")
    }
    else{
        
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over . Ramdom number was ${num}`)
            endGame()
            
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===num){
        displayMessage(`you guessed it right`)
        endGame()
    }else if(guess<num){
        displayMessage(`number is low`)
    }
    else if(guess>num){
        displayMessage(`number is high`)
    }
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML=`${prevGuess}`
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}
function newGame(){
    const newGamebutton=document.querySelector('#newGame')
    newGamebutton.addEventListener('click',function(e){
        num=Math.floor((Math.random()*100)+1)
        console.log(num)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGames=true;
    })
}
function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game<h2>`
    startOver.appendChild(p);
    playGames=false;
    newGame()
}
