'use strict';
let highscore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // 🙄When guess is wrong
    if (!guess) {
        displayMessage('🚫 No Number!');
        // 🙂When guess is correct   

    } else if (guess === secretNumber) {
        displayMessage('💯🙂 YAYY!! Correct Number!');
        displayNumber(secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // ⚡When guess is wrong 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '⚡Too High!' : '😞Too Low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('🧨🙈 You lost the game!');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
})
