'use strict';
const rollingDiceBtn = document.querySelector('.roll_dice')
const diceImg = document.querySelector('.dice_img')
const player0Main = document.querySelector('.player0_main')
const player1Main = document.querySelector('.player1_main')
const finalScore0 = document.querySelector('.score_0')
const currentScore0 = document.querySelector('.current_score_value_0')
const finalScore1 = document.querySelector('.score_1')
const currentScore1 = document.querySelector('.current_score_value_1')

// starting conditions
const score = [0, 0];
finalScore0.textContent = 0
finalScore1.textContent = 0
let currentScore = 0
let activePlayer = 0
currentScore0.textContent = 0
currentScore1.textContent = 0
diceImg.classList.add('hidden');

// rolling dice functionality
rollingDiceBtn.addEventListener('click', function () {
  // 1.generating a random dice roll 
  const randomDiceRoll = Math.trunc(Math.random() * 6) + 1;
  // 2.display dice
  diceImg.classList.remove('hidden')
  diceImg.src = `dice-${randomDiceRoll}.png`
  // 3.chack for rolled 1: if true switch player
  if (randomDiceRoll !== 1) {
    // add dice to current score
    currentScore += randomDiceRoll;
    document.querySelector(`.current_score_value_${activePlayer}`).textContent = currentScore
  } else {
    // switch the player 
    currentScore = 0
    document.querySelector(`.current_score_value_${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Main.classList.toggle('active_player')
    player1Main.classList.toggle('active_player')
  }
});

document.querySelector('.hold').addEventListener('click', function () {
  score[activePlayer] = score[activePlayer] + currentScore;
  document.querySelector(`.score_${activePlayer}`).textContent = score[activePlayer]
  currentScore = 0
  document.querySelector(`.current_score_value_${activePlayer}`).textContent = currentScore
  if (score[activePlayer] >= 100) {
    document.querySelector(`.player${activePlayer}_main`).classList.add('winner');
    rollingDiceBtn.classList.add('hidden');
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Main.classList.toggle('active_player')
    player1Main.classList.toggle('active_player')
  }
})

document.querySelector('.new_game').addEventListener('click', function () {
  finalScore0.textContent = 0
  finalScore1.textContent = 0
  score[0] = 0
  score[1] = 0
  currentScore = 0
  currentScore0.textContent = 0
  currentScore1.textContent = 0
  rollingDiceBtn.classList.remove('hidden')
  document.querySelector(`.player${activePlayer}_main`).classList.remove('winner');
  player0Main.classList.add('active_player')
  player1Main.classList.remove('active_player')
  activePlayer = 0
})

// help Button
document.querySelector('.help_btn').addEventListener('click', function () {
  document.querySelector('.help_main').classList.remove('hidden')
  document.querySelector('.overlay').classList.remove('hidden')
})
document.querySelector('.close_btn').addEventListener('click', function () {
  document.querySelector('.help_main').classList.add('hidden')
  document.querySelector('.overlay').classList.add('hidden')

})