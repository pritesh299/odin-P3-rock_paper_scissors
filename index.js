let  intro=document.querySelector(".intro")
let game=document.querySelector(".game_container")
let challenge=document.querySelector("#challenge")
let play_again=document.querySelector(".play_again")
let useSkill=document.querySelector(".reset")
let Option1=document.querySelector(".rock")
let Option2=document.querySelector(".paper")
let Option3=document.querySelector(".scissors")
let playerChoiceImage= document.getElementById("choice_player_Image")
let playerChoiceText=document.getElementById("choice_player_text")
let computerChoiceImage= document.getElementById("choice_computer_Image")
let computerChoiceText=document.getElementById("choice_computer_text")
let ResultContainer=document.querySelector(".result_container")
let ResultText=document.getElementById("result_text")
let PScore=0 ,CScore=0 
let playerScore=document.getElementById("score_player")
let computerScore=document.getElementById("score_Computer")
let options=[
    {item:"rock",
    Image: "Rock.jpg"},
   { item:"paper",
    Image: "paper.jpg"},
   { item:"scissors",
    Image:"scissors.jpg"}
]

function greeting()
{
   intro.style.display="block"
    game.style.display="none"
}
function score(a,b){
       ResultContainer.style.display="block";
        
       if (a===b){
        ResultText.innerHTML="Tie"
        }
       else if ((a===0 && b===2)||(a===1 && b===0)||(a===2&&b===1)){
        ResultText.innerHTML="Win"
        PScore++
       }
       else {
        ResultText.innerHTML="Loss"
        CScore++
       }
     playerScore.innerHTML=` Traveller : ${PScore}`;
     computerScore.innerHTML= ` Villager : ${CScore}`
    
     
    
}
function ComputerChoice(x){
     y=Math.floor(Math.random()*3)
     
        computerChoiceImage.src=`images/${options[y].Image}`;
        computerChoiceText.innerText=options[y].item;
        score(x,y)
}
function PlayerChoice(x){
 ComputerChoice(x)
 playerChoiceImage.src= `images/${options[x].Image}`;
 playerChoiceText.innerText=options[x].item;
}


Option1.addEventListener("click",()=>{ PlayerChoice(0) })
Option2.addEventListener("click",()=>{ PlayerChoice(1) })
Option3.addEventListener("click",()=>{ PlayerChoice(2) })













challenge.addEventListener("click" , ()=>{
    intro.style.display="none"
    game.style.display="block"
})

useSkill.addEventListener("click", ()=>{
    console.log('hello')
    greeting()
})

