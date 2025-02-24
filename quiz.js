const questions = [
    {
        question: "Qui est Jésus ?",
        options: ["Fils de Dieu", "Un prophète", "Un enseignant"],
        correctAnswer: 0
    },
    {
        question: "Combien de livres sont dans l'Ancien Testament ?",
        options: ["39", "27", "66"],
        correctAnswer: 0
    },
    {
        question: "Qui a écrit le livre des Proverbes ?",
        options: ["Salomon", "David", "Moïse"],
        correctAnswer: 0
    },
    {
        question: "Qui a écrit les Évangiles ?",
        options: ["Matthieu, Marc, Luc et Jean", "Pierre et Paul", "Les apôtres"],
        correctAnswer: 0
    },
    {
        question: "Où est né Jésus ?",
        options: ["Bethléem", "Nazareth", "Jérusalem"],
        correctAnswer: 0
    },
    {
        question: "Qui a trahi Jésus ?",
        options: ["Judas Iscariot", "Pierre", "Thomas"],
        correctAnswer: 0
    },
    {
        question: "Qui était le disciple bien-aimé de Jésus ?",
        options: ["Jean", "Pierre", "Judas"],
        correctAnswer: 0
    },
    {
        question: "Combien de jours Jésus a-t-il jeûné dans le désert ?",
        options: ["40 jours", "7 jours", "21 jours"],
        correctAnswer: 0
    },
    {
        question: "Qui a baptisé Jésus ?",
        options: ["Jean-Baptiste", "Pierre", "Paul"],
        correctAnswer: 0
    },
    {
        question: "Quelle est la première parole de Jésus dans l'Évangile de Jean ?",
        options: ["Suivez-moi", "Que voulez-vous ?", "Repentez-vous"],
        correctAnswer: 1
    },
    {
        question: "Quelle est la prière que Jésus a enseignée à ses disciples ?",
        options: ["Notre Père", "Je vous salue Marie", "Gloria"],
        correctAnswer: 0
    },
    {
        question: "Qui a renié Jésus trois fois avant le chant du coq ?",
        options: ["Pierre", "Thomas", "Jacques"],
        correctAnswer: 0
    },
    {
        question: "Combien de personnes Jésus a-t-il nourries avec cinq pains et deux poissons ?",
        options: ["5000", "1000", "100"],
        correctAnswer: 0
    },
    {
        question: "Quel apôtre a écrit l'Apocalypse ?",
        options: ["Jean", "Pierre", "Paul"],
        correctAnswer: 0
    },
    {
        question: "Qui était le roi d'Israël au moment de la naissance de Jésus ?",
        options: ["Hérode", "David", "Salomon"],
        correctAnswer: 0
    },
    {
        question: "Combien de fils avait Jacob ?",
        options: ["12", "10", "8"],
        correctAnswer: 0
    },
    {
        question: "Quel est le livre de la Bible qui raconte la sortie d'Égypte ?",
        options: ["Exode", "Lévitique", "Deutéronome"],
        correctAnswer: 0
    },
    {
        question: "Quel prophète a été englouti par un grand poisson ?",
        options: ["Jonas", "Élie", "Ésaïe"],
        correctAnswer: 0
    },
    {
        question: "Qui a tué Goliath ?",
        options: ["David", "Saul", "Salomon"],
        correctAnswer: 0
    },
    {
        question: "Qui a écrit les Psaumes ?",
        options: ["David", "Moïse", "Salomon"],
        correctAnswer: 0
    },
    {
        question: "Quel était le nom de l'ancêtre de Jésus selon la généalogie de Matthieu ?",
        options: ["Abraham", "David", "Moïse"],
        correctAnswer: 1
    },
    {
        question: "Qui a dit 'Je suis le chemin, la vérité et la vie' ?",
        options: ["Jésus", "Pierre", "Paul"],
        correctAnswer: 0
    },
    {
        question: "Qui a écrit l'Évangile de Luc ?",
        options: ["Luc", "Matthieu", "Marc"],
        correctAnswer: 0
    },
    {
        question: "Où Jésus a-t-il accompli son premier miracle ?",
        options: ["À Cana", "À Jérusalem", "À Bethléem"],
        correctAnswer: 0
    },
    {
        question: "Combien de jours Jésus a-t-il passé dans la tombe avant sa résurrection ?",
        options: ["3 jours", "7 jours", "1 jour"],
        correctAnswer: 0
    },
    {
        question: "Qui a nié connaître Jésus trois fois avant le chant du coq ?",
        options: ["Pierre", "Thomas", "Judas"],
        correctAnswer: 0
    },
    {
        question: "Quelle est le plus grand commandement selon Jésus ?",
        options: ["Aimer Dieu et son prochain", "Ne pas voler", "Ne pas tuer"],
        correctAnswer: 0
    },
    {
        question: "Quel disciple a douté de la résurrection de Jésus jusqu'à ce qu'il voie les cicatrices ?",
        options: ["Thomas", "Pierre", "Jean"],
        correctAnswer: 0
    },
    {
        question: "Qui a écrit l'Épître aux Romains ?",
        options: ["Paul", "Pierre", "Jean"],
        correctAnswer: 0
    },
    {
        question: "Où Jésus a-t-il fait sa première prédication après son baptême ?",
        options: ["Galilée", "Jérusalem", "Judea"],
        correctAnswer: 0
    },
    {
        question: "Qui est le 'Bon Samaritain' dans la parabole ?",
        options: ["Un homme venant de Samarie", "Un homme d'Israël", "Un homme riche"],
        correctAnswer: 0
    },
    {
        question: "Qui était la mère de Samuel ?",
        options: ["Hannah", "Marie", "Rachel"],
        correctAnswer: 0
    },
    {
        question: "Qui a écrit le livre des Actes des Apôtres ?",
        options: ["Luc", "Pierre", "Jean"],
        correctAnswer: 0
    },
    {
        question: "Quel apôtre a été appelé 'le fou de Jésus' ?",
        options: ["Paul", "Pierre", "Jean"],
        correctAnswer: 0
    },
    {
        question: "Dans quel livre de la Bible peut-on trouver les Dix Commandements ?",
        options: ["Exode", "Genèse", "Lévitique"],
        correctAnswer: 0
    },
    {
        question: "Quel est le dernier livre de la Bible ?",
        options: ["Apocalypse", "Jude", "Jean"],
        correctAnswer: 0
    },
    {
        question: "Qui a suivi Moïse et dirigé Israël après sa mort ?",
        options: ["Josué", "David", "Saul"],
        correctAnswer: 0
    },
    {
        question: "Quel prophète a vu une vision des ossements desséchés dans la vallée ?",
        options: ["Ézéchiel", "Isaïe", "Jérémie"],
        correctAnswer: 0
    },
    {
        question: "Quel est le nom du frère de Moïse ?",
        options: ["Aaron", "Élie", "David"],
        correctAnswer: 0
    },
    {
        question: "Qui a été le plus jeune roi d'Israël ?",
        options: ["Roiséa", "Josias", "Salomon"],
        correctAnswer: 1
    },
    {
        question: "Combien d'épîtres Paul a-t-il écrit ?",
        options: ["13", "5", "21"],
        correctAnswer: 0
    },
    {
        question: "Combien de jours Moïse est-il resté sur le mont Sinaï ?",
        options: ["40 jours", "30 jours", "10 jours"],
        correctAnswer: 0
    },
    {
        question: "Qui est le prophète qui a confronté Achab et Jézabel ?",
        options: ["Élie", "Isaïe", "Daniel"],
        correctAnswer: 0
    },
    {
        question: "Quel roi a construit le premier temple de Jérusalem ?",
        options: ["Salomon", "David", "Ezéchias"],
        correctAnswer: 0
    },
    {
        question: "Quel livre de la Bible parle des fruits de l'Esprit ?",
        options: ["Galates", "Romains", "Éphésiens"],
        correctAnswer: 0
    },
    {
        question: "Combien de fois Jésus a-t-il été tenté par le diable dans le désert ?",
        options: ["3 fois", "5 fois", "7 fois"],
        correctAnswer: 0
    },
    {
        question: "Qui a dit 'La vérité vous rendra libre' ?",
        options: ["Jésus", "Pierre", "Jean"],
        correctAnswer: 0
    }
    // Ajoutez ici les 97 autres questionslet currentQuestionIndex = 0;
    ];let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = 0;
let questionsAnswered = 0;
let gameActive = true;
const maxWrongAnswers = 3;
const maxLives = 3;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerOptionsElement = document.getElementById("answer-options");
const resultElement = document.getElementById("result");
const scoreDisplay = document.getElementById("score-display");
const wrongAnswersDisplay = document.getElementById("wrong-answers-display");
const questionsPlayedDisplay = document.getElementById("questions-played-display");
const livesRemainingDisplay = document.getElementById("lives-remaining-display");
const stopButton = document.getElementById("stop-game");
const nextButton = document.getElementById("next-button");
const showResultButton = document.getElementById("show-result-button")
// Mélange aléatoire des questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function shuffleOptions(question) {
    let options = [...question.options];
    let correctAnswer = question.correctAnswer;

    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
        if (correctAnswer === i) correctAnswer = j;
        else if (correctAnswer === j) correctAnswer = i;
    }

    return { options, correctAnswer };
}

function displayQuestion() {
    if (!gameActive || wrongAnswers >= maxWrongAnswers || currentQuestionIndex >= questions.length) {
        endGame();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const shuffled = shuffleOptions(currentQuestion);

    questionElement.textContent = currentQuestion.question;
    answerOptionsElement.innerHTML = "";

    shuffled.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => checkAnswer(index, shuffled.correctAnswer));
        answerOptionsElement.appendChild(li);
    });

    // Mise à jour des statistiques
    updateStats();
}

function checkAnswer(selectedIndex, correctAnswer) {
    if (!gameActive) return;

    questionsAnswered++;

    if (selectedIndex === correctAnswer) {
        score += 5;
    } else {
        wrongAnswers++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(); // Passe à la question suivante
    } else {
        endGame();
    }
}

function updateStats() {
    scoreDisplay.textContent = score;
    wrongAnswersDisplay.textContent = wrongAnswers;
    questionsPlayedDisplay.textContent = questionsAnswered;
    livesRemainingDisplay.textContent = maxLives - wrongAnswers;
}

function stopGame() {
    gameActive = false;
    endGame();
}

function endGame() {
    gameActive = false;
    questionContainer.innerHTML = "";

    let scorePercentage = (score / (questionsAnswered * 5)) * 100;
    let message;

    if (scorePercentage === 100) {
        message = "👏 Félicitations ! Jésus lui-même t’accueille !";
    } else if (scorePercentage >= 80) {
        message = "😇 Bravo ! Les anges t’accueillent !";
    } else if (scorePercentage >= 50) {
        message = "👍 Bien joué ! Continue à apprendre !";
    } else {
        message = "😞 Tu as besoin de repentance. Reprends la méditation !";
    }

    resultElement.innerHTML = `Score : ${score} / ${questionsAnswered * 5} (${scorePercentage.toFixed(1)}%) <br> ${message}`;
    showResultButton.style.display = "block"; // Affiche le bouton "Voir Résultat" à la fin
}

// Fonction de gestion du bouton "Suivant"
nextButton.addEventListener("click", () => {
    if (gameActive && currentQuestionIndex < questions.length) {
        wrongAnswers++; // Annule une vie à chaque clic sur suivant
        displayQuestion(); // Affiche la prochaine question
    }
});

// Écouteur d'événement pour arrêter le jeu
stopButton.addEventListener("click", stopGame);

// Initialiser le jeu en mélangeant les questions
shuffleQuestions();
displayQuestion(); // Démarre le jeu avec la première question
    