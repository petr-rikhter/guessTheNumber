'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Function guessMessage
const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

//Function change color
const changeColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

//Function prediction
const eventHandler = function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  //Function Change score
  const changeScore = function (a) {
    document.querySelector('.score').textContent = a;
  };

  // No input
  if (!guessingNumber) {
    displayGuessMessage('Введите число!');
  } else if (guessingNumber < 0) {
    displayGuessMessage('Введите число больше нуля!');

    //Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно!');
    changeColor('rgb(9, 250, 21)');
    document.querySelector('.question').textContent = secretNumber;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  }
  //If guessingNumber !== secretNumber
  else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      changeScore(score);
    } else {
      displayGuessMessage('Конец игры!');
      changeScore(0);
    }
  }
};

// Again function
const hardReset = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  changeColor('rgb(0, 0, 0)');
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.question').textContent = '???';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
};

document.querySelector('.check').addEventListener('click', eventHandler);

document.querySelector('.again').addEventListener('click', hardReset);
