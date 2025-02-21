const resetBox=document.querySelector("#reset-div")
const reset=document.querySelector("#reset")

reset.addEventListener("click",()=>{
    resetBox.classList.add("hide");
    console.log("game reset")
    userScore=0;
    compScore=0;
    userScr.innerText="0"
    compScr.innerText="0"
    msg.innerText="Play Your Move"
    msg.style.backgroundColor="#081b31"
})



let userScore=0;
let compScore=0;

let userScr=document.querySelector("#user-score")
let compScr=document.querySelector("#comp-score")

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const choices=document.querySelectorAll(".choice")

const drawGame=(userChoice)=>{
    //console.log("game was draw");
    msg.innerText=`Its a Tie! Both chose ${userChoice}`
    msg.style.backgroundColor="#081b31";
}

showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        //console.log("you win")
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
        userScore++;
        userScr.innerText=`${userScore}`

    }
    else{
        //console.log("you lose")
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="red";
        compScore++;
        compScr.innerText=`${compScore}`
    }
}

const playGame = (userChoice)=>{
    //console.log("user choice = ",userChoice)
    const compChoice=genCompChoice();
    //console.log("Comp choice = ",compChoice)
    
    if(userChoice===compChoice){
        drawGame(userChoice);
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissors"?false:true;
        }
        else{
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}


choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        resetBox.classList.remove("hide")
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})

