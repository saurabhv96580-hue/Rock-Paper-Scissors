let userScore = 0;
let compScore = 0;
const reset=document.getElementById("but")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const lastdiv = document.querySelector(".game-over")
const para = document.querySelector(".lastpara")
const bodys = document.querySelector(".content")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const latest = document.querySelector("#ba")

const recall = reset.addEventListener("click",()=>{
 
 resetgame()

  lastdiv.classList.add("hide")
  bodys.style.opacity="1"
  
})


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};


const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
  if(userScore===10||compScore==10){
    
    choices.forEach(choice=>choice.style.pointerEvents="none")
      para.innerText=msg.innerText=userScore===10?"user win":"computer win"
      lastdiv.classList.remove("hide")
      bodys.style.opacity="0.25"
    
  }
  
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }


};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
  const resetgame =()=>{
     userScore=0
  compScore=0
     userScorePara.innerText=0;
  compScorePara.innerText=0;
  msg.innerText="play your move"
  msg.style.backgroundColor = "#081b31";
    choices.forEach((choice)=>{
    choice.style.pointerEvents="auto"})
  }
 latest.addEventListener("click",()=>{
  resetgame()
 })