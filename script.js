'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.highscore').textContent =
  localStorage.getItem('highscore') ?? 0;

const message = msg => {
  document.querySelector('.message').textContent = msg;
};

const handleButtonClick = () => {
  const scoreElement = document.querySelector('.score');
  const guess = Number(document.querySelector('.guess').value);
  const numberElement = document.querySelector('.number');
  console.log(guess, typeof guess);
  // Whene there is no input
  if (!guess) {
    message('⛔ No content');
  }
  // When player win
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    message('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
    if (score > Number(localStorage.getItem('highscore'))) {
      localStorage.setItem('highscore', score);
      document.querySelector('.highscore').textContent =
        localStorage.getItem('highscore');
    }
  }
  // Wrong answer
  else if (guess !== secretNumber) {
    if (score > 1) {
      message(guess > secretNumber ? '📈To high!' : '📉Too low');
      score--;
      scoreElement.textContent = score;
    } else {
      message('💔You lost the game!');
      scoreElement.textContent = 0;
    }
  }
};
document.querySelector('.check').addEventListener('click', handleButtonClick);

document.querySelector('.again').addEventListener('click', () => {
  location.reload();
});
