function getComputerChoice () { //computer is supposed to generate random answer.
     
     const choices = ['Rock', 'Paper', 'Scissors'];
     const choice = Math.floor(Math.random() * choices.length);
     return finalChoice = choices[choice];


}

function playRound(playerSelection, computerChoice) {

     //When the computer selects rock
     if (playerSelection === 'rock' && computerChoice === 'Rock') {
     return alert("DRAW!"); 
     
     }  
     else if (playerSelection === 'paper' && computerChoice === 'Rock') {
     return alert("WIN!"); 
     }
     else if (playerSelection === 'scissors' && computerChoice === 'Rock') {
     return alert("LOSER!");  
     }

     //When the computer selects paper
     if (playerSelection=== 'rock' && computerChoice === 'Paper') {
          return alert("LOSER!"); }  
          
          else if (playerSelection === 'paper' && computerChoice === 'Paper') {
          return alert("DRAW!"); }
          
          else if (playerSelection=== 'scissors' && computerChoice === 'Paper') {
          return alert("WINNER!");  }

     //When the computer selects scissors
     if (playerSelection === 'rock' && computerChoice === 'Scissors') {
     return alert("WINNER!"); }  
     
     else if (playerSelection=== 'paper' && computerChoice === 'Scissors') {
     return alert("LOSER!"); }
     
     else if (playerSelection === 'scissors' && computerChoice === 'Scissors') {
     return alert("DRAW!");  }

}

function playerSelection() { //prompt player to select rock, paper or scissors.

     let selection = prompt("What would you like to choose? Paper, rock or scissors?").toLowerCase();
     let computerChoice = getComputerChoice();

     return playRound(selection, computerChoice);

}


   console.log(playerSelection());


   //The output is undefined because in the playerSelection function, you are logging the return value of the playRound function, but the playRound function does not return anything. 
   //The alert function does not return a value, so the playRound function returns undefined. 
   //To fix this, you can change the alert calls in the playRound function to return statements, and return a string that describes the result of the round.