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

// Scissor button
const scissorButton = document.createElement('button');
scissorButton.textContent = 'Scissors';
scissorButton.style.padding = '50px';
scissorButton.style.borderRadius = '40px'; 
scissorButton.style.fontSize = '30px';
btnContainer.appendChild(scissorButton);


// Include event listener to the buttons that call playRound and playerSelection


function playRound() {

     const playerSelectionFinal = playerSelection();
     const getComputerChoiceFinal = getComputerChoice();

     //When the computer selects rock
     if (playerSelectionFinal === rockButton && getComputerChoiceFinal === 'Rock') {
          console.log("DRAW!"); 
          
          }  
          else if (playerSelectionFinal === paperButton && getComputerChoiceFinal === 'Rock') {
          console.log("WIN!"); 
          }
          else if (playerSelectionFinal === scissorButton && getComputerChoiceFinal === 'Rock') {
          console.log("LOSER!");  
          }
     
          //When the computer selects paper
          if (playerSelectionFinal === rockButton && getComputerChoiceFinal === 'Paper') {
                    console.log("LOSER!"); }  
               
               else if (playerSelectionFinal === paperButton && getComputerChoiceFinal === 'Paper') {
                    console.log("DRAW!"); }
               
               else if (playerSelectionFinal === scissorButton && getComputerChoiceFinal === 'Paper') {
                    console.log("WINNER!");  }
     
          //When the computer selects scissors
          if (playerSelectionFinal === rockButton && getComputerChoiceFinal === 'Scissors') {
               console.log("WINNER!"); }  
          
          else if (playerSelectionFinal === paperButton && getComputerChoiceFinal === 'Scissors') {
               console.log("LOSER!"); }
          
          else if (playerSelectionFinal === scissorButton && getComputerChoiceFinal === 'Scissors') {
               console.log("DRAW!");  }

     return `${playerSelectionFinal} vs ${getComputerChoiceFinal}`;

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


function game () {   //Play a 5 round game of paper scissors rock. 

     for (let i = 1; i <= 5; i++) {
          const result = playRound();
          console.log(`Round ${i}: ${result}`);
     }

}

console.log(game());



