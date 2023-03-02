// Create three buttons, one for paper, one for rock, and one for scissors
const btnContainer = document.getElementById('btnContainer');

btnContainer.style.display = 'flex';
btnContainer.style.justifyContent = 'space-around';
btnContainer.style.alignItems = 'center';
btnContainer.style.background = 'green';

// // Header for selections
const headerContainer = document.getElementById('headerContainer');
const h1 = headerContainer.querySelector('h1');
h1.style.textAlign = 'center';

// Header for results
const resultHeader = document.getElementById('resultHeader');
const h3 = resultHeader.querySelector('h1');
h3.style.textAlign = 'center';

// Results
const results = document.getElementById('results');
const h2 = results.querySelector('h1');
h2.style.textAlign = 'center';

// playerScore
const playerScore = document.getElementById('playerScore');
const countPlayerScore = playerScore.querySelector('h2');
playerScore.style.display = 'flex';
playerScore.style.justifyContent = 'space-around';
playerScore.style.background = 'orange';

// computerScore
const computerScore = document.getElementById('computerScore');
const countComputerScore = computerScore.querySelector('h2');
computerScore.style.display = 'flex';
computerScore.style.justifyContent = 'space-around';
computerScore.style.background = 'blue';

//Score counter
const tally = document.getElementById('playerResult');
const playerTally = tally.querySelector('a');
tally.style.textAlign = 'center';

const secondTally = document.getElementById('computerResult');
const computerTally = secondTally.querySelector('a');
secondTally.style.textAlign = 'center';

let count = 0;
tally.innerHTML = count;
secondTally.innerHTML = count;


// Rock button
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.style.padding = '50px';
rockButton.style.borderRadius = '40px'; 
rockButton.style.fontSize = '30px';
btnContainer.appendChild(rockButton);
// Add event listener for 'click' of rock button
rockButton.addEventListener("click", playRound);

// Paper button
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.style.padding = '50px';
paperButton.style.borderRadius = '40px'; 
paperButton.style.fontSize = '30px';
btnContainer.appendChild(paperButton);
// Add event listener for 'click' of paper button
paperButton.addEventListener("click", playRound);

// Scissor button
const scissorButton = document.createElement('button');
scissorButton.textContent = 'Scissors';
scissorButton.style.padding = '50px';
scissorButton.style.borderRadius = '40px'; 
scissorButton.style.fontSize = '30px';
btnContainer.appendChild(scissorButton);
// Add event listener for 'scissor' of rock button
scissorButton.addEventListener("click", playRound);





// Include event listener to the buttons that call playRound and playerSelection




function playRound() {

     const playerSelectionFinal = playerSelection();
     const getComputerChoiceFinal = getComputerChoice();

     //When the computer selects rock
     if (playerSelectionFinal === rockButton && getComputerChoiceFinal === 'Rock') {
            h2.innerHTML = "DRAW!"; 
          }  
          else if (playerSelectionFinal === paperButton && getComputerChoiceFinal === 'Rock') {
            count+=1;
            document.getElementById("tally").innerHTML= count;
            h2.innerHTML= "WIN!"; 
          }
          else if (playerSelectionFinal === scissorButton && getComputerChoiceFinal === 'Rock') {
            h2.innerHTML = "LOSER!";  
          }
     
          //When the computer selects paper
          if (playerSelectionFinal === rockButton && getComputerChoiceFinal === 'Paper') {
            h2.innerHTML = "LOSER!"; }  
               
               else if (playerSelectionFinal === paperButton && getComputerChoiceFinal === 'Paper') {
                h2.innerHTML= "DRAW!"; }
               
               else if (playerSelectionFinal === scissorButton && getComputerChoiceFinal === 'Paper') {
                h2.innerHTML= "WINNER!";  }
     
          //When the computer selects scissors
          if (playerSelectionFinal === rockButton && getComputerChoiceFinal === 'Scissors') {
            h2.innerHTML = "WINNER!"; }  
          
          else if (playerSelectionFinal === paperButton && getComputerChoiceFinal === 'Scissors') {
            h2.innerHTML= "LOSER!"; }
          
          else if (playerSelectionFinal === scissorButton && getComputerChoiceFinal === 'Scissors') {
            h2.innerHTML = "DRAW!";  }

            console.log(h2.innerHTML);

    //  return `${playerSelectionFinal} vs ${getComputerChoiceFinal}`;

}

function getComputerChoice () { //computer is supposed to generate random answer.
     
     const choices = ['Rock', 'Paper', 'Scissors'];
     const choice = Math.floor(Math.random() * choices.length);
     return choices[choice];

}

function playerSelection() { //prompt player to select rock, paper or scissors.

  let selection = (rockButton, paperButton, scissorButton);
  return selection;
}

console.log(playRound());





// function game () {   //Play a 5 round game of paper scissors rock. 

//      for (let i = 1; i <= 5; i++) {
//           const result = playRound();
//           console.log(`Round ${i}: ${result}`);
//      }

// }

// console.log(game());



