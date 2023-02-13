
function getComputerChoice () { //computer is supposed to generate random answer.
     
     const choices = ['Rock', 'Paper', 'Scissors'];
     const choice = Math.floor(Math.random() * choices.length);
     return finalChoice = choices[choice];


}

console.log(getComputerChoice());


function playerSelection () { //prompt player to select rock, paper or scissors.

     let selection = prompt("What would you like to choose? Paper, rock or scissors?");
     if (playerSelection === 'rock' && getComputerChoice === 'Rock') {
     return alert("DRAW!") }  
     
     else if (playerSelection === 'paper' && getComputerChoice === 'Rock') {
     return alert("WIN!") }

     
     else if (playerSelection === 'scissors' && getComputerChoice === 'Rock') {
     return alert("LOSER!")  }

}

prompt(playerSelection())