const username = document.querySelector('#username');
const resultText = document.querySelector('#result-text');
const resultPhoto = document.querySelector('#result-photo');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;
console.log(finalScore);

finalScore.innerText = mostRecentScore;
if(finalScore.innerText >= 100 && finalScore.innerText <= 400 ){
    resultText.innerHTML = "You are the winner!";
    resultPhoto.src = 'img/sackboy.png';
} else {
    resultText.innerHTML = "You are the looser!";
    resultPhoto.src = 'img/assassins.png';
}

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;

})

saveHighScore = e => {
    e.preventDefault();
    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('highscores.html');
}