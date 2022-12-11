let myNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.highscore_value').textContent = highscore;
score_value(score);

function start_guessing(message) {
  document.querySelector('.start_guessing').textContent = message;
}
function score_value(score) {
  document.querySelector('.score_value').textContent = score;
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  score_value(score);
  myNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess_number').textContent = '?';
  start_guessing("Start Guessing...");
  document.querySelector('.guess_num').value = '';
  document.querySelector('body').style.backgroundColor = '#202020';
})

document.querySelector('.checkbutton').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess_num').value);
  if (!guessNumber) {
    start_guessing("Enter A Number");
  } else if (guessNumber == myNumber) {
    if (score >= 1) {
      start_guessing('Correct Number!');
      document.querySelector('body').style.backgroundColor = "#000000"
      score_value(score);
      document.querySelector('.guess_number').textContent = myNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore_value').textContent = highscore;
      }
    } else {
      start_guessing('GAME OVER!');
    }
  } else if (guessNumber !== myNumber) {
    if (score > 1) {
      start_guessing(guessNumber > myNumber ? 'Too High!' : 'Too Low!');
      score = score - 1;
      score_value(score);
    } else {
      start_guessing("GAME OVER");
      score_value(0);
    }
  }
})