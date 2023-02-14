
function playRound() {

     const playerSelectionFinal = playerSelection();
     const getComputerChoiceFinal = getComputerChoice();

     //When the computer selects rock
     if (playerSelectionFinal === 'rock' && getComputerChoiceFinal === 'Rock') {
          alert("DRAW!"); 
          
          }  
          else if (playerSelectionFinal === 'paper' && getComputerChoiceFinal === 'Rock') {
          alert("WIN!"); 
          }
          else if (playerSelectionFinal === 'scissors' && getComputerChoiceFinal === 'Rock') {
          alert("LOSER!");  
          }
     
          //When the computer selects paper
          if (playerSelectionFinal === 'rock' && getComputerChoiceFinal === 'Paper') {
               alert("LOSER!"); }  
               
               else if (playerSelectionFinal === 'paper' && getComputerChoiceFinal === 'Paper') {
               alert("DRAW!"); }
               
               else if (playerSelectionFinal === 'scissors' && getComputerChoiceFinal === 'Paper') {
               alert("WINNER!");  }
     
          //When the computer selects scissors
          if (playerSelectionFinal === 'rock' && getComputerChoiceFinal === 'Scissors') {
          alert("WINNER!"); }  
          
          else if (playerSelectionFinal === 'paper' && getComputerChoiceFinal === 'Scissors') {
          alert("LOSER!"); }
          
          else if (playerSelectionFinal === 'scissors' && getComputerChoiceFinal === 'Scissors') {
          alert("DRAW!");  }

     return `${playerSelectionFinal} vs ${getComputerChoiceFinal}`;

}

function getComputerChoice () { //computer is supposed to generate random answer.
     
     const choices = ['Rock', 'Paper', 'Scissors'];
     const choice = Math.floor(Math.random() * choices.length);
     return choices[choice];

}

function playerSelection() { //prompt player to select rock, paper or scissors.

     let selection = prompt("What would you like to choose? Paper, rock or scissors?").toLowerCase();
     return selection;
}

console.log(playRound());