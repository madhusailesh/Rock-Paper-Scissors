let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const userScr=document.querySelector("#user-score");
const comptScr=document.querySelector("#computer-score");

const ComputerChoice=()=>{
  const option=["rock","paper","scissors"];
  const randomIdx=Math.floor(Math.random()*3);
  return option[randomIdx];

  
}
const msg=document.querySelector("#msg");

const showWinner=(userWin,userchoice,comptchoice)=>{
    if (userWin) {
      userScore++;
      userScr.innerHTML=userScore;
      console.log("You Win🏆");
      msg.innerHTML=`You Win🏆 your ${userchoice} Beate ${comptchoice}`;
      msg.style.backgroundColor = "green";
    } else {
      computerScore++;
      comptScr.innerHTML=computerScore;
      console.log("You Lose 🤣");
      msg.innerHTML=`You Lose 🤣 
      ${comptchoice} Beat your ${userchoice}`;;
      msg.style.backgroundColor = "red";
    }


}

const drawGame=()=>{

  console.log("Game Was Draw");
  msg.innerHTML="Game Was Draw 🫡";
  msg.style.backgroundColor = "black";

}
const playGame=(userchoice)=>{
  console.log("User Choice Is=",userchoice);
  const comptchoice=ComputerChoice();
  console.log("Computer Choice Is=",comptchoice);
  if (userchoice === comptchoice) {
    drawGame();
  } else {
    let userWin=true;
    if (userchoice==="paper") {
      userWin=comptchoice==="scissors"?false:true;
      
    }else if (userchoice==="rock") {
      userWin=comptchoice==="paper"?false:true;
    
    
    }else{
      //  user have seassor

      userWin=comptchoice==="rock"?false:true;
    }
    
    showWinner(userWin,userchoice,comptchoice); 
    
  }
};



choices.forEach((choice)=>{
  const userchoice=choice.getAttribute("id");
  choice.addEventListener("click",()=>{
   playGame(userchoice);

  });
});
