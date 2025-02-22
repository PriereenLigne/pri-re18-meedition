// game.js

// Jeu 1: Question biblique
function checkAnswer() {
    const answer = document.querySelector('input[name="answer"]:checked').value;
    const result = document.getElementById('result');
    if (answer == 1) {
        result.textContent = "Correct ! Jean 3:16 est la bonne réponse.";
    } else {
        result.textContent = "Incorrect. Essayez encore !";
    }
}

// Jeu 2: Compléter le verset
function checkCompleteVerse() {
    const answer = document.getElementById('answer').value.toLowerCase().trim();
    const result = document.getElementById('completeResult');
    if (answer === "berger") {
        result.textContent = "Correct ! L'Éternel est mon berger.";
    } else {
        result.textContent = "Incorrect. Essayez encore.";
    }
}

// Jeu 3: Deviner la fin du verset
function checkGuess() {
    const guess = document.querySelector('input[name="guess"]:checked').value;
    const result = document.getElementById('guessResult');
    if (guess == 1) {
        result.textContent = "Correct ! Jésus est le chemin, la vérité et la vie.";
    } else {
        result.textContent = "Incorrect. Essayez encore.";
    }
}