// Fonction pour mélanger les questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
}
const questions = [
    { 
        question: "Quel roi a construit le temple de Jérusalem ?", 
        options: ["David", "Salomon", "Saül"],
        correctAnswer: 1
    },
    { 
        question: "Qui a été avalé par un grand poisson ?", 
        options: ["Jonas", "Élie", "Moïse"],
        correctAnswer: 0
    },
    { 
        question: "Quel disciple a marché sur l'eau avec Jésus ?", 
        options: ["Jean", "Pierre", "Jacques"],
        correctAnswer: 1
    },
];

// Mélanger les questions
shuffleArray(questions);

// Variables du jeu
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let questionsPlayed = 0; // Nombre de questions réellement jouées

// Sélection des éléments HTML
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const stopButton = document.getElementById("stop-button");
const resultEl = document.getElementById("result");
const scoreCountEl = document.getElementById("score-count");
const lifeCountEl = document.getElementById("life-count");
const homeButton = document.getElementById("home-button");

// Fonction pour afficher la question
function showQuestion() {
    if (currentQuestionIndex >= questions.length || lives <= 0) {
        endGame();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    optionsEl.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => checkAnswer(index);
        optionsEl.appendChild(li);
    });

    resultEl.textContent = "";
}

// Vérifier la réponse
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    questionsPlayed++; // Incrémentation du nombre de questions jouées

    if (selectedIndex === currentQuestion.correctAnswer) {
        score += 5; // Chaque bonne réponse donne 5 points
    } else {
        lives--;
        resultEl.textContent = `❌ Mauvaise réponse ! La bonne réponse était : ${currentQuestion.options[currentQuestion.correctAnswer]}`;
    }

    scoreCountEl.textContent = `${score}`;
    lifeCountEl.textContent = lives;

    currentQuestionIndex++;
    
    if (lives > 0) {
        setTimeout(showQuestion, 1000);
    } else {
        endGame();
    }
}

// Fonction pour terminer le jeu
function endGame() {
    optionsEl.innerHTML = "";  // Effacer les options de la dernière question
    questionEl.textContent = ""; // Ne pas afficher la dernière question
    nextButton.style.display = "none";  // Masquer le bouton "Suivant"
    stopButton.style.display = "none";  // Masquer le bouton "Arrêter"
    homeButton.style.display = "block"; // Afficher le bouton "Retour à l'accueil"

    // Calcul du pourcentage basé sur les questions jouées
    const totalPoints = questionsPlayed * 5; // Le score total possible est basé sur les questions jouées
    const percentage = totalPoints > 0 ? (score / totalPoints) * 100 : 0; // Éviter division par zéro

    // Affichage du score et du pourcentage
    const scoreMessage = `${score / 5}/${questionsPlayed} réponses correctes (${score}/${totalPoints} points) - ${Math.round(percentage)}%`;

    let message = "";
    if (percentage < 50) {
        message = "😞 Tu ne connais pas tes ancêtres bibliques, va apprendre l'histoire !";
    } else if (percentage >= 50 && percentage < 100) {
        message = "👏 Félicitations ! Tu es un rejeton du Lion de Juda, continue !";
    } else {
        message = "🎉 Jésus est fier de toi, félicitations !";
    }

    resultEl.textContent = `${scoreMessage} - ${message}`;
}

// Passer à la question suivante (mauvaise réponse automatique)
nextButton.onclick = function() {
    lives--;
    questionsPlayed++; // Augmenter le compteur de questions jouées
    resultEl.textContent = `⏭️ Mauvaise réponse automatique !`;
    scoreCountEl.textContent = `${score}`;
    lifeCountEl.textContent = lives;
    
    currentQuestionIndex++;
    if (lives > 0) {
        setTimeout(showQuestion, 1000);
    } else {
        endGame();
    }
};

// Arrêter le jeu
stopButton.onclick = endGame;

// Retour à l'accueil
homeButton.onclick = function() {
    window.location.href = "jeux.html";
};

// Afficher la première question
showQuestion();