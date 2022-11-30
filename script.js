"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector(".guess-message").textContent = message;
};

const changeColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const eventHandler = function () {
  const guessingNumber = Number(document.querySelector(".number-input").value);

  const changeScore = function (a) {
    document.querySelector(".score").textContent = a;
  };

  if (!guessingNumber) {
    displayGuessMessage("Введите число!");
  } else if (guessingNumber < 0) {
    displayGuessMessage("Введите число больше нуля!");
  } else if (guessingNumber > 20) {
    displayGuessMessage("Введите число меньше или равно 20!");
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage("Правильно!");
    changeColor("rgb(9, 250, 21)");
    document.querySelector(".question").textContent = secretNumber;
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
      highscore = score;
    }
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? "Слишком много!" : "Слишком мало!"
      );
      score--;
      changeScore(score);
    } else {
      displayGuessMessage("Конец игры!");
      changeScore(0);
    }
  }
};

const hardReset = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  changeColor("rgb(0, 0, 0)");
  displayGuessMessage("Начни угадывать!");
  document.querySelector(".question").textContent = "???";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-input").value = "";
};

document.querySelector(".check").addEventListener("click", eventHandler);

document.querySelector(".again").addEventListener("click", hardReset);
