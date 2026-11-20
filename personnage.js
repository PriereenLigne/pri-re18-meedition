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
    { 
        question: "Qui a reçu les dix commandements sur le mont Sinaï ?", 
        options: ["Moïse", "Aaron", "Josué"],
        correctAnswer: 0
    },
    { 
        question: "Qui était le premier roi d'Israël ?", 
        options: ["Saül", "David", "Salomon"],
        correctAnswer: 0
    },
    { 
        question: "Quel personnage a interprété les rêves du Pharaon ?", 
        options: ["Moïse", "Joseph", "Daniel"],
        correctAnswer: 1
    },
    { 
        question: "Qui a trahi Jésus pour 30 pièces d'argent ?", 
        options: ["Pierre", "Judas", "Jean"],
        correctAnswer: 1
    },
    { 
        question: "Qui était le père de Samuel ?", 
        options: ["Héli", "Elkana", "David"],
        correctAnswer: 1
    },
    { 
        question: "Qui a tué le géant Goliath ?", 
        options: ["Saül", "David", "Solomon"],
        correctAnswer: 1
    },
    { 
        question: "Qui a été le premier martyr chrétien ?", 
        options: ["Pierre", "Étienne", "Jean"],
        correctAnswer: 1
    },
    { 
        question: "Qui a épousé Esther ?", 
        options: ["Le roi Xerxès", "Néhémie", "Darius"],
        correctAnswer: 0
    },
    { 
        question: "Qui a écrit le livre des Psaumes ?", 
        options: ["Salomon", "David", "Moïse"],
        correctAnswer: 1
    },
    { 
        question: "Qui était le prophète du règne du roi Achaz ?", 
        options: ["Isaïe", "Ézéchiel", "Jérémie"],
        correctAnswer: 0
    },
    { 
        question: "Qui a construit l'arche ?", 
        options: ["Moïse", "Noé", "Abraham"],
        correctAnswer: 1
    },
    { 
        question: "Qui était le père de Jésus ?", 
        options: ["Joseph", "Zacharie", "David"],
        correctAnswer: 0
    },
    { 
        question: "Quel prophète a été enlevé dans un char de feu ?", 
        options: ["Ézéchiel", "Élie", "Isaïe"],
        correctAnswer: 1
    },
    { 
        question: "Qui a eu un rêve de sept épis de blé ?", 
        options: ["Pharaon", "Joseph", "Daniel"],
        correctAnswer: 1
    },
    { 
        question: "Qui a écrit l'Apocalypse ?", 
        options: ["Pierre", "Jean", "Paul"],
        correctAnswer: 1
    },
    { 
        question: "Qui a accueilli Jésus dans sa maison à Béthanie ?", 
        options: ["Marie et Marthe", "Pierre et Jean", "Zachée"],
        correctAnswer: 0
    },
    { 
        question: "Qui a mené les Israélites à travers le désert pendant 40 ans ?", 
        options: ["Moïse", "Josué", "Aaron"],
        correctAnswer: 0
    },
    { 
        question: "Qui a été le roi d'Israël après Saül ?", 
        options: ["David", "Salomon", "Josué"],
        correctAnswer: 0
    },
    { 
        question: "Quel prophète a prophétisé pendant le règne de Josias ?", 
        options: ["Jérémie", "Ézéchiel", "Amos"],
        correctAnswer: 0
    },
    { 
        question: "Qui a vu Dieu face à face ?", 
        options: ["Abraham", "Moïse", "Élie"],
        correctAnswer: 1
    },
    { 
        question: "Qui a maudit le figuier qui ne portait pas de fruits ?", 
        options: ["Pierre", "Jésus", "Jean"],
        correctAnswer: 1
    },
    { 
        question: "Qui était le frère de Moïse ?", 
        options: ["Aaron", "Élie", "Josué"],
        correctAnswer: 0
    },
    { 
        question: "Qui était le prophète de la cour de David ?", 
        options: ["Nathanaël", "Élie", "Nathan"],
        correctAnswer: 2
    },
    { 
        question: "Qui a été ressuscité par Jésus après quatre jours dans le tombeau ?", 
        options: ["Lazare", "Jean-Baptiste", "Pierre"],
        correctAnswer: 0
    },
    { 
        question: "Qui était l'épouse de Jacob ?", 
        options: ["Rachel", "Léa", "Rebecca"],
        correctAnswer: 0
    },
    { 
        question: "Qui a écrit le livre des Proverbes ?", 
        options: ["David", "Salomon", "Moïse"],
        correctAnswer: 1
    },
    { 
        question: "Quel roi a prié Dieu pour augmenter sa vie de 15 ans ?", 
        options: ["Ézéchias", "David", "Salomon"],
        correctAnswer: 0
    },
    { 
        question: "Qui a prophétisé la chute de Jérusalem ?", 
        options: ["Jérémie", "Isaïe", "Ézéchiel"],
        correctAnswer: 0
    },
    { 
        question: "Qui a transformé l'eau en vin ?", 
        options: ["Jésus", "Pierre", "Jean"],
        correctAnswer: 0
    },
    { 
        question: "Qui a épousé l'herbe de Ruth ?", 
        options: ["Boaz", "David", "Salomon"],
        correctAnswer: 0
    },
    { 
        question: "Qui a jeté une pierre contre Goliath ?", 
        options: ["David", "Salomon", "Moïse"],
        correctAnswer: 0
    },
    { 
        question: "Quel prophète a confronté le roi Achab et sa femme Jézabel ?", 
        options: ["Ézéchiel", "Élie", "Amos"],
        correctAnswer: 1
    },
    { 
        question: "Quel personnage a été transformé en statue de sel ?", 
        options: ["Lot", "Noé", "Abraham"],
        correctAnswer: 0
    },
    { 
        question: "Qui a libéré les Israélites de l'esclavage en Égypte ?", 
        options: ["Moïse", "David", "Salomon"],
        correctAnswer: 0
    },
    { 
        question: "Quel personnage a été appelé par Dieu pour juger Israël ?", 
        options: ["Samson", "Gédéon", "Abraham"],
        correctAnswer: 0
    },
    { 
        question: "Quel homme a eu une vision de la vallée des ossements desséchés ?", 
        options: ["Ézéchiel", "Isaïe", "Daniel"],
        correctAnswer: 0
    },
    { 
        question: "Qui a été un ancien pharisien et a écrit plusieurs lettres dans le Nouveau Testament ?", 
        options: ["Jean", "Paul", "Pierre"],
        correctAnswer: 1
    },
    { 
        question: "Quel prophète a dénoncé l'injustice et a appelé à la repentance ?", 
        options: ["Amos", "Ésaïe", "Joël"],
        correctAnswer: 0
    },
    { 
        question: "Qui a vu une vision du ciel ouverte avec des anges montant et descendant ?", 
        options: ["Pierre", "Jean", "Jacques"],
        correctAnswer: 0
    },
    { 
        question: "Qui a écrit le livre de l'Exode ?", 
        options: ["Moïse", "David", "Salomon"],
        correctAnswer: 0
    },
    { 
        question: "Quel roi a fait construire un temple à Jérusalem pour accueillir l'Arche de l'Alliance ?", 
        options: ["Salomon", "David", "Achaz"],
        correctAnswer: 0
    },
    { 
        question: "Qui a prophétisé la naissance de Jésus ?", 
        options: ["Isaïe", "Michée", "Malachie"],
        correctAnswer: 0
    },
    { 
        question: "Qui a vu la vision de l'échelle montant vers le ciel ?", 
        options: ["Abraham", "Jacob", "Moïse"],
        correctAnswer: 1
    },
    { 
        question: "Qui était le plus jeune fils de Jacob ?", 
        options: ["Benjamin", "Joseph", "Réuben"],
        correctAnswer: 0
    },
    { 
        question: "Qui a été transformé en une colonne de sel ?", 
        options: ["Loth", "Moïse", "Abraham"],
        correctAnswer: 0
    },
    { 
        question: "Qui a vu une vision d'un char de feu emportant Élie ?", 
        options: ["Ézéchiel", "Élisée", "Jérémie"],
        correctAnswer: 1
    },
    { 
        question: "Qui a offert son fils en sacrifice pour Dieu sur le mont Morija ?", 
        options: ["Abraham", "David", "Moïse"],
        correctAnswer: 0
    },
    { 
        question: "Qui a survécu au lion dans la fosse ?", 
        options: ["Daniel", "Ézéchiel", "Jérémie"],
        correctAnswer: 0
    },
    { 
        question: "Quel prophète a affronté les prophètes de Baal ?", 
        options: ["Élie", "Jérémie", "Ésaïe"],
        correctAnswer: 0
    },
    { 
        question: "Qui a échappé à une tempête en mer avec d'autres marins ?", 
        options: ["Jonas", "Paul", "Pierre"],
        correctAnswer: 1
    },
    { 
        question: "Qui a prêché dans le désert de Juda ?", 
        options: ["Jean-Baptiste", "Pierre", "Paul"],
        correctAnswer: 0
    },
    { 
        question: "Qui a pleuré sur Jérusalem avant sa destruction ?", 
        options: ["Ésaïe", "Jérémie", "Jésus"],
        correctAnswer: 2
    },
    { 
        question: "Qui a prêché aux Gentils à Césarée ?", 
        options: ["Pierre", "Paul", "Jacques"],
        correctAnswer: 0
    },
    { 
        question: "Qui a aidé le roi Josias à restaurer le temple ?", 
        options: ["Ézéchias", "Jérémie", "Hilqiya"],
        correctAnswer: 2
    },
    { 
        question: "Quel prophète a parlé du serviteur souffrant ?", 
        options: ["Isaïe", "Jérémie", "Daniel"],
        correctAnswer: 0
    },
    { 
        question: "Qui a résisté à la tentation de Pécher dans le désert ?", 
        options: ["Jésus", "Moïse", "David"],
        correctAnswer: 0
    },
    { 
        question: "Qui était le mentor de Josué ?", 
        options: ["Moïse", "Aaron", "David"],
        correctAnswer: 0
    },
    { 
        question: "Qui a écrit la Genèse ?", 
        options: ["Moïse", "David", "Salomon"],
        correctAnswer: 0
    },
    { 
        question: "Qui a guéri un aveugle-né en le frottant avec de la boue ?", 
        options: ["Jésus", "Pierre", "Jean"],
        correctAnswer: 0
    },
    { 
        question: "Qui a tenté de tuer le bébé Jésus ?", 
        options: ["Hérode", "Pilate", "Caïphe"],
        correctAnswer: 0
    },
    { 
        question: "Qui a maudit la terre et fut le premier meurtrier dans la Bible ?", 
        options: ["Caïn", "Abel", "Noé"],
        correctAnswer: 0
    },
    { 
        question: "Qui a vu une vision de la nouvelle Jérusalem ?", 
        options: ["Jean", "Paul", "Pierre"],
        correctAnswer: 0
    },
    { 
        question: "Qui était la femme de Zacharie et la mère de Jean-Baptiste ?", 
        options: ["Marie", "Élisabeth", "Martha"],
        correctAnswer: 1
    },
    { 
        question: "Qui a tenté Jésus dans le désert ?", 
        options: ["Satan", "Pierre", "Judas"],
        correctAnswer: 0
    },
    { 
        question: "Qui était le général militaire qui a été guéri de la lèpre ?", 
        options: ["Gédéon", "Naaman", "Samson"],
        correctAnswer: 1
    },
    { 
        question: "Qui a libéré les Israélites de la captivité babylonienne ?", 
        options: ["Ezra", "Néhémie", "Daniel"],
        correctAnswer: 1
    },
    { 
        question: "Quel personnage biblique a été connu pour sa sagesse ?", 
        options: ["David", "Salomon", "Moïse"],
        correctAnswer: 1
    },
    { 
        question: "Qui a été ressuscité par Jésus après être mort depuis quatre jours ?", 
        options: ["Lazare", "Jean-Baptiste", "Ézéchiel"],
        correctAnswer: 0
    },
    { 
        question: "Qui a trouvé un fardeau léger et une joug doux ?", 
        options: ["Jésus", "Pierre", "Paul"],
        correctAnswer: 0
    },
    { 
        question: "Qui a prédit la destruction de Ninive ?", 
        options: ["Ézéchiel", "Jonas", "Isaïe"],
        correctAnswer: 1
    },
    { 
        question: "Qui était le mari de Ruth ?", 
        options: ["Boaz", "David", "Abraham"],
        correctAnswer: 0
    },
    { 
        question: "Qui a été l'un des douze apôtres de Jésus ?", 
        options: ["Matthieu", "Saul", "Siméon"],
        correctAnswer: 0
    },
    { 
        question: "Quel apôtre a écrit les lettres aux Éphésiens et aux Colossiens ?", 
        options: ["Pierre", "Jean", "Paul"],
        correctAnswer: 2
    },
    { 
        question: "Qui a prié et a vu un ange apparaître dans le jardin de Gethsémané ?", 
        options: ["Jésus", "Pierre", "Jean"],
        correctAnswer: 0
    },
    { 
        question: "Qui a été projeté dans une fosse aux lions ?", 
        options: ["Daniel", "Nabuchodonosor", "Saül"],
        correctAnswer: 0
    },
    { 
        question: "Qui a trahi Jésus pour 30 pièces d'argent ?", 
        options: ["Pierre", "Judas", "Jean"],
        correctAnswer: 1
    },
    { 
        question: "Qui a été le roi d'Israël pendant la construction du Temple ?", 
        options: ["Salomon", "David", "Achaz"],
        correctAnswer: 0
    },
    { 
        question: "Qui a vu une vision des quatre bêtes sur la mer ?", 
        options: ["Daniel", "Jean", "Ézéchiel"],
        correctAnswer: 0
    },
    { 
        question: "Qui a été vendu par ses frères et est devenu un haut fonctionnaire en Égypte ?", 
        options: ["Joseph", "Benjamin", "Moïse"],
        correctAnswer: 0
    },
    { 
        question: "Qui a fait tourner le moulin dans la prison des Philistins ?", 
        options: ["Samson", "Saül", "David"],
        correctAnswer: 0
    },
    { 
        question: "Qui a écrit le livre de l'Apocalypse ?", 
        options: ["Jean", "Pierre", "Paul"],
        correctAnswer: 0
    },
    { 
        question: "Qui a vendu son droit d'aînesse pour un plat de lentilles ?", 
        options: ["Jacob", "Ésaü", "Abraham"],
        correctAnswer: 1
    },
    { 
        question: "Qui a assisté au baptême de Jésus dans le Jourdain ?", 
        options: ["Jean-Baptiste", "Pierre", "Thomas"],
        correctAnswer: 0
    },
    { 
        question: "Qui a introduit l'idée du veau d'or ?", 
        options: ["Aaron", "Moïse", "Josué"],
        correctAnswer: 0
    },
    { 
        question: "Qui était le prophète du roi David ?", 
        options: ["Nathan", "Ésaïe", "Jérémie"],
        correctAnswer: 0
    },
    { 
        question: "Qui a interprété les rêves de Pharaon en Égypte ?", 
        options: ["Joseph", "Moïse", "Daniel"],
        correctAnswer: 0
    },
    { 
        question: "Qui a lancé le dernier assaut contre Jéricho ?", 
        options: ["Josué", "Gédéon", "David"],
        correctAnswer: 0
    },
    { 
        question: "Qui était la mère de Samuel ?", 
        options: ["Anne", "Rachel", "Sarah"],
        correctAnswer: 0
    },
    { 
        question: "Qui a été le tuteur de Moïse pendant son enfance en Égypte ?", 
        options: ["Pharaon", "Marie", "Miriam"],
        correctAnswer: 0
    },
    { 
        question: "Qui a fait partie des 70 anciens qui ont aidé Moïse à gouverner Israël ?", 
        options: ["Josué", "Élizabeth", "Aaron"],
        correctAnswer: 0
    },
    { 
        question: "Qui a prié pour la guérison de sa belle-mère ?", 
        options: ["Pierre", "Jean", "Thomas"],
        correctAnswer: 0
    },
    { 
        question: "Qui a vu un ange dans le jardin de Gethsémané ?", 
        options: ["Jésus", "Pierre", "Jean"],
        correctAnswer: 0
    },
    { 
        question: "Qui a été enlevé au ciel dans un char de feu ?", 
        options: ["Élie", "Élisée", "Jésus"],
        correctAnswer: 0
    },
    { 
        question: "Qui a été la première personne à annoncer la résurrection de Jésus ?", 
        options: ["Marie Madeleine", "Jean", "Pierre"],
        correctAnswer: 0
    },
    { 
        question: "Qui a écrit le livre des Proverbes ?", 
        options: ["Salomon", "David", "Ésaïe"],
        correctAnswer: 0
    },
    { 
        question: "Qui a pleuré sur la destruction de Jérusalem ?", 
        options: ["Jérémie", "Ézéchiel", "Jésus"],
        correctAnswer: 2
    },
    { 
        question: "Qui a dit : 'Si tu veux être parfait, va, vends ce que tu as et donne-le aux pauvres' ?", 
        options: ["Jésus", "Pierre", "Paul"],
        correctAnswer: 0
    },
    { 
        question: "Qui était le dernier roi de Juda avant l'exil à Babylone ?", 
        options: ["Zédécias", "Joachim", "Josias"],
        correctAnswer: 0
    },
    { 
        question: "Qui a fondé la première église chrétienne en Europe ?", 
        options: ["Paul", "Pierre", "Jean"],
        correctAnswer: 0
    },
    { 
        question: "Qui a été exaucé après avoir prié pour la naissance d'un fils, Samuel ?", 
        options: ["Anne", "Rachel", "Sarah"],
        correctAnswer: 0
    },
    { 
        question: "Qui a aidé Ruth à récolter des épis dans les champs ?", 
        options: ["Boaz", "David", "Éli"],
        correctAnswer: 0
    },
    { 
        question: "Qui était le mari de Marie, mère de Jésus ?", 
        options: ["Joseph", "Zacharie", "Judas"],
        correctAnswer: 0
    },
    { 
        question: "Qui a été le premier martyr chrétien ?", 
        options: ["Étienne", "Jean-Baptiste", "Pierre"],
        correctAnswer: 0
    },
    { 
        question: "Qui a partagé la vision d'une grande église céleste avec Jean ?", 
        options: ["Les anges", "Les 24 vieillards", "Jésus"],
        correctAnswer: 1
    },
    { 
        question: "Qui a guidé le peuple d'Israël à travers le désert pendant 40 ans ?", 
        options: ["Moïse", "Aaron", "Josué"],
        correctAnswer: 0
    },
    { 
        question: "Qui a écrit l'Évangile de Luc ?", 
        options: ["Luc", "Jean", "Matthieu"],
        correctAnswer: 0
    },
    { 
        question: "Qui a guéri le paralytique qui a été descendu par le toit ?", 
        options: ["Jésus", "Pierre", "Paul"],
        correctAnswer: 0
    },
    { 
        question: "Qui était l'homme juste qui a reçu une vision et a sauvé sa famille du déluge ?", 
        options: ["Noé", "Abraham", "Élie"],
        correctAnswer: 0
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
    window.location.href = "game.html";
};

// Afficher la première question
showQuestion();