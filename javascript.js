
function getComputerChoice () { //computer is supposed to generate random answer.
     
     const choices = ['Rock', 'Paper', 'Scissors'];
     const choice = Math.floor(Math.random() * choices.length);
     return finalChoice = choices[choice];


}

console.log(getComputerChoice());


function playerSelection () { //prompt player to select rock, paper or scissors.

     let selection = prompt("What would you like to choose? Paper, rock or scissors?");
     
     //When the computer selects rock
     if (playerSelection === 'rock' && getComputerChoice === 'Rock') {
     return alert("DRAW!") }  
     
     else if (playerSelection === 'paper' && getComputerChoice === 'Rock') {
     return alert("WIN!") }
     
     else if (playerSelection === 'scissors' && getComputerChoice === 'Rock') {
     return alert("LOSER!")  }

     //When the computer selects paper
     if (playerSelection === 'rock' && getComputerChoice === 'Paper') {
          return alert("LOSER!") }  
          
          else if (playerSelection === 'paper' && getComputerChoice === 'Paper') {
          return alert("DRAW!") }
          
          else if (playerSelection === 'scissors' && getComputerChoice === 'Paper') {
          return alert("WINNER!")  }

}    //When the computer selects scissors
     if (playerSelection === 'rock' && getComputerChoice === 'Scissors') {
     return alert("WINNER!") }  
     
     else if (playerSelection === 'paper' && getComputerChoice === 'Scissors') {
     return alert("LOSER!") }
     
     else if (playerSelection === 'scissors' && getComputerChoice === 'Scissors') {
     return alert("DRAW!")  }

prompt(playerSelection())