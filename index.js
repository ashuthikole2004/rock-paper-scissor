let choice=document.querySelectorAll(".img");
let move=document.querySelector("#msg");
let your_count=document.querySelector("#you-count");
let comp_count=document.querySelector("#comp-count");
let your_score=0
let comp_score=0


const computerChoice=()=>{
    let option=["rock","paper","scissor"]
    let randomIndexChoice=Math.random(option)*3;
    return option[Math.floor(randomIndexChoice)]
}

const drawGame=()=>
{
    console.log("Game draw")
    move.innerText="Game draw"
    move.style.backgroundColor="blue"
}

const palyGame=(userChoice)=>{
    console.log("user choice is: ",userChoice)
    const compChoice=computerChoice()
    console.log("computer choice is: ",compChoice)

    if(userChoice===compChoice)
    {
        drawGame()
    }
    else if(userChoice=="rock" && compChoice=="paper")
    {
        move.style.backgroundColor="red"
        move.innerText="You lose,paper beat's rock"
        comp_score++
        comp_count.innerText=comp_score
    }
    else if(userChoice=="paper" && compChoice=="scissor"){
        move.style.backgroundColor="red"
        move.innerText="You lose,scissor cut's paper"
        comp_score++
        comp_count.innerText=comp_score
    }
    else if(userChoice=="scissor" && compChoice=="rock"){
        move.style.backgroundColor="red"
        move.innerText="You lose,rock beat's scissor"
        comp_score++
        comp_count.innerText=comp_score
    }
    else if(userChoice=="paper" && compChoice=="rock")
        {
            move.style.backgroundColor="green"
            move.innerText="You win,paper beat's rock"
            your_score++
            your_count.innerText=your_score
        }

    else if(userChoice=="scissor" && compChoice=="paper")
        {
            move.style.backgroundColor="green"
            move.innerText="You win,scissor cut's paper"
            your_score++
            your_count.innerText=your_score
        }

    else if(userChoice=="rock" && compChoice=="scissor")
        {
            move.style.backgroundColor="green"
            move.innerText="You win,rock beat's scissor"
            your_score++
            your_count.innerText=your_score
        }
}

choice.forEach((img)=>{

    img.addEventListener("click",()=>{
        let userChoice=img.getAttribute("id")
        palyGame(userChoice)
    })
})