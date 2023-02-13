
function getComputerChoice () { //computer is supposed to generate random answer.
     
     const choices = ['Rock', 'Paper', 'Scissors'];
     const choice = Math.floor(Math.random() * choices.length);
     return finalChoice = choices[choice];


}

console.log(getComputerChoice());