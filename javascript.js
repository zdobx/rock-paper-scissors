
function playRound() {

     const playerSelectionFinal = playerSelection();
     const getComputerChoiceFinal = getComputerChoice();

     //When the computer selects rock
     if (playerSelectionFinal === 'rock' && getComputerChoiceFinal === 'Rock') {
          console.log("DRAW!"); 
          
          }  
          else if (playerSelectionFinal === 'paper' && getComputerChoiceFinal === 'Rock') {
          console.log("WIN!"); 
          }
          else if (playerSelectionFinal === 'scissors' && getComputerChoiceFinal === 'Rock') {
          console.log("LOSER!");  
          }
     
          //When the computer selects paper
          if (playerSelectionFinal === 'rock' && getComputerChoiceFinal === 'Paper') {
                    console.log("LOSER!"); }  
               
               else if (playerSelectionFinal === 'paper' && getComputerChoiceFinal === 'Paper') {
                    console.log("DRAW!"); }
               
               else if (playerSelectionFinal === 'scissors' && getComputerChoiceFinal === 'Paper') {
                    console.log("WINNER!");  }
     
          //When the computer selects scissors
          if (playerSelectionFinal === 'rock' && getComputerChoiceFinal === 'Scissors') {
               console.log("WINNER!"); }  
          
          else if (playerSelectionFinal === 'paper' && getComputerChoiceFinal === 'Scissors') {
               console.log("LOSER!"); }
          
          else if (playerSelectionFinal === 'scissors' && getComputerChoiceFinal === 'Scissors') {
               console.log("DRAW!");  }

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


function game () {   //Play a 5 round game of paper scissors rock. 

     for (let i = 1; i <= 5; i++) {
          const result = playRound();
          console.log(`Round ${i}: ${result}`);
     }

}

console.log(game());