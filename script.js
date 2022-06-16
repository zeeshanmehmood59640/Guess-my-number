'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 14;
document.querySelector('.guess').value = 14;
*/
let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let firstScore = 0;
const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMsg(' Start Guessing...');
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMsg('Enter number First ⛔');
  } else if (guess === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    displayMsg(' Correct Number 🏆');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (firstScore < score) {
      firstScore = score;
      document.querySelector('.highscore').textContent = firstScore;
    } else {
      document.querySelector('.highscore').textContent = firstScore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMsg(guess > randomNumber ? ' Too High ' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg(' You Lost the Game ');
      document.querySelector('.score').textContent = 0;
    }
  }
});
