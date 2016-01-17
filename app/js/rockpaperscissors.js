////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    move = getInput();
    if (move === undefined || move === null) {
      console.log("Invalid entry. Try again.")
      return getInput();
    }
    else {
      return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = randomPlay();
    if (move === undefined || move === null) {
      console.log("Invalid computer entry.")
      return getComputerMove();
    }
    else {
      return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var player;
    var computer;
    var tie;

    switch (playerMove) {
      case "rock":
        if (computerMove ===  "rock") {
          winner = "tie";
        }
        else if (computerMove === "paper") {
          winner = "player";
        }
        else {
          winner = "computer";
        }
        break;

      case "paper":
          if (computerMove ===  "rock") {
            winner = "player";
          }
          else if (computerMove === "paper") {
            winner = "tie";
          }
          else {
            winner = "computer";
          }
          break;

      case "scissors":
          if (computerMove ===  "rock") {
            winner = "computer";
          }
          else if (computerMove === "paper") {
            winner = "player";
          }
          else {
            winner = "tie";
          }
          break;

      default:
        winner = "tie";
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = getWinner(getPlayerMove(), getComputerMove());
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

    while (playerWins != 5 || computerWins != 5) {
      if (getWinner(getPlayerMove(), getComputerMove()) === "player") {
        playerWins += 1;
        console.log("The Player Wins! Well done!");
      }
      else if (getWinner() === "computer"){
        computerWins += 1;
        console.log("The Computer Wins! Step your game up!");
      }
      else {
        console.log("Draw!");
      }
    }
    return [playerWins, computerWins];
}

function whoWillWin() {
  var whoWon = playToFive();
  if (whoWon[0] === 5) {
    console.log("The player wins the game!");
  }
  else {
    console.log("The computer wins the game!");
  }
}
