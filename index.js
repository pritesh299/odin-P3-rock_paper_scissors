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
let ResultFinalText=document.getElementById("result_Final_text")
let PScore,CScore
let playerScore=document.getElementById("score_player")
let computerScore=document.getElementById("score_Computer")
let RESET=document.querySelector(".Reset")
let options=[
    {item:"rock",
    Image: "rock.png"},
   { item:"paper",
    Image: "paper.png"},
   { item:"scissors",
    Image:"scissors.png"}
]
function animate (id, s1){
    document.querySelector(id).style.innerHTML=""
    var typed = new Typed(id, {
              strings: [s1],
              typeSpeed: 50,});
              var x=document.getElementsByClassName("typed-cursor")
              for (var i=0;i<x.length-1;i++)
              {
                  x[i].style.display="none"
              }  
  }

function greeting()
{
   intro.style.display="flex"
    game.style.display="none"
    animate(".greeting", `Hello Mr.Traveller, welcome to our village.do you think you can deafeat <br> <h5 style="display:inline;">THE UNDEAFEATABLE VILLAGER</h5> `)
    PScore=0;
    CScore=0;
    playerScore.innerHTML=` Traveller : ${PScore}`;
    computerScore.innerHTML= ` Villager : ${CScore}`;
    ResultContainer.style.display="none";
    playerChoiceText.innerText="none choosen"
    computerChoiceText.innerText="none choosen"
    optionAccess(1)
}

function optionAccess(x){
    if (x===1){
         Option1.addEventListener("click",f=()=>{ PlayerChoice(0) })
         Option2.addEventListener("click",p=()=>{ PlayerChoice(1) })
         Option3.addEventListener("click",q=()=>{ PlayerChoice(2) })
       }
    else if(x===0){
        Option1.removeEventListener("click",f)
        Option2.removeEventListener("click",p)
        Option3.removeEventListener("click",q)
       }

}

    function DeclareResult(){
        
      
        if ((PScore===5)&& !(CScore===5)){ 
            ResultText.style.display="none"
            ResultFinalText.style.display="block"
            animate("#result_Final_text_ani",`Congratulation Mr.traveller you have deafeated <br> <h5 style="display:inline;">THE UNDEAFEATABLE VILLAGER</h5>`)
            optionAccess(0)
            console.log(PScore,CScore)
        }
            else  if(!(PScore===5)&&(CScore===5)){
                ResultText.style.display="none"
                ResultFinalText.style.display="block"
                animate("#result_Final_text_ani",`Oh no,Mr.traveller looks like even you cannot deafeat<br> <h5 style="display:inline;">THE UNDEAFEATABLE VILLAGER</h5> `)
                optionAccess(0)    
            }
        }
   function score(a,b){
       ResultContainer.style.display="block";
       ResultFinalText.style.display="none"
       ResultText.style.display="block"
     if (a===b){
         animate("#result_text_ani","Tie")
            }
       else if ((a===0 && b===2)||(a===1 && b===0)||(a===2&&b===1)){
        animate("#result_text_ani","Win")
                PScore++
       }
       else {
        animate("#result_text_ani","Loss")

        CScore++
       }
      playerScore.innerHTML=` Traveller : ${PScore}`;
      computerScore.innerHTML= ` Villager : ${CScore}`;
      DeclareResult()
    
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



 challenge.addEventListener("click" ,  challenge=()=>{
    intro.style.display="none"
    game.style.display="block"
})
RESET.addEventListener("click",()=>{
   location.reload()
})

