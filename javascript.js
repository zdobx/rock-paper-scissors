
function getComputerChoice () { //computer is supposed to generate random answer.
     
     const choices = ['Rock', 'Paper', 'Scissors'];
     const choice = Math.floor(Math.random() * choices.length);
     return finalChoice = choices[choice];


}

console.log(getComputerChoice());


function playerSelection() { //prompt player to select rock, paper or scissors.

     let selection = prompt("What would you like to choose? Paper, rock or scissors?");
     let computerChoice = getComputerChoice();

     //When the computer selects rock
     if (selection === 'rock' && computerChoice === 'Rock') {
     return alert("DRAW!"); 
     
     }  
     else if (selection === 'paper' && computerChoice === 'Rock') {
     return alert("WIN!"); 
     }
     else if (playerSelection === 'scissors' && computerChoice === 'Rock') {
     return alert("LOSER!");  
     }

     //When the computer selects paper
     if (selection=== 'rock' && computerChoice === 'Paper') {
          return alert("LOSER!"); }  
          
          else if (selection === 'paper' && computerChoice === 'Paper') {
          return alert("DRAW!"); }
          
          else if (selection=== 'scissors' && computerChoice === 'Paper') {
          return alert("WINNER!");  }

     //When the computer selects scissors
     if (selection === 'rock' && computerChoice === 'Scissors') {
     return alert("WINNER!"); }  
     
     else if (selection=== 'paper' && computerChoice === 'Scissors') {
     return alert("LOSER!"); }
     
     else if (selection === 'scissors' && computerChoice === 'Scissors') {
     return alert("DRAW!");  }

}

playerSelection();