const verses = [
    { 
        partial: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",
        options: ["Jean 3:16", "Matthieu 5:14", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "L'Éternel est mon berger: je ne manquerai de rien.",
        options: ["Psaume 23:1", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Vous êtes la lumière du monde. Une ville située sur une montagne ne peut être cachée.",
        options: ["Matthieu 5:14", "Jean 3:16", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Je puis tout par celui qui me fortifie.",
        options: ["Philippiens 4:13", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Le Seigneur est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l'esprit abattu.",
        options: ["Psaume 34:18", "Matthieu 5:14", "Jean 3:16"],
        correctAnswer: 0
    },
    { 
        partial: "Vous connaîtrez la vérité, et la vérité vous rendra libres.",
        options: ["Jean 8:32", "Matthieu 5:14", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Le Seigneur est ma lumière et mon salut: de qui aurais-je peur ? L'Éternel est le soutien de ma vie: de qui aurais-je crainte ?",
        options: ["Psaume 27:1", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Heureux ceux qui ont faim et soif de la justice, car ils seront rassasiés !",
        options: ["Matthieu 5:6", "Jean 3:16", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Jésus lui dit: Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi.",
        options: ["Jean 14:6", "Matthieu 5:14", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Tout ce que vous demanderez en priant, croyez que vous l'avez reçu, et vous le verrez s'accomplir.",
        options: ["Marc 11:24", "Matthieu 5:14", "Jean 3:16"],
        correctAnswer: 0
    },
    { 
        partial: "Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde.",
        options: ["Matthieu 28:20", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Il n'y a pas de plus grand amour que de donner sa vie pour ses amis.",
        options: ["Jean 15:13", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus.",
        options: ["Matthieu 6:33", "Jean 3:16", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Tout est possible à celui qui croit.",
        options: ["Marc 9:23", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Si Dieu est pour nous, qui sera contre nous?",
        options: ["Romains 8:31", "Jean 3:16", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Voici, je fais toutes choses nouvelles.",
        options: ["Apocalypse 21:5", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Le Seigneur est bon pour ceux qui espèrent en lui, pour l'âme qui le cherche.",
        options: ["Lamentations 3:25", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Et le fruit de la justice est semé dans la paix par ceux qui recherchent la paix.",
        options: ["Jacques 3:18", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Béni soit l'homme qui se confie en l'Éternel, et dont l'Éternel est l'espérance !",
        options: ["Jérémie 17:7", "Matthieu 5:14", "Jean 3:16"],
        correctAnswer: 0
    },
    { 
        partial: "Soyez toujours joyeux. Priez sans cesse.",
        options: ["1 Thessaloniciens 5:16-17", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Que celui de vous qui est sans péché jette le premier la pierre contre elle.",
        options: ["Jean 8:7", "Matthieu 5:14", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Ne crains rien, car je t'ai racheté, Je t'ai appelé par ton nom: tu es à moi !",
        options: ["Ésaïe 43:1", "Matthieu 5:14", "Jean 3:16"],
        correctAnswer: 0
    },
    { 
        partial: "L'Éternel fait justice aux opprimés, il donne du pain aux affamés ; l'Éternel délivre les captifs.",
        options: ["Psaume 103:6", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Jésus leur dit: Je suis le pain de vie. Celui qui vient à moi n'aura jamais faim, et celui qui croit en moi n'aura jamais soif.",
        options: ["Jean 6:35", "Matthieu 5:14", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes.",
        options: ["Colossiens 3:23", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "L'Éternel est mon rocher, ma forteresse et mon libérateur.",
        options: ["Psaume 18:2", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Car Dieu a tant aimé le monde, qu’il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu’il ait la vie éternelle.",
        options: ["Jean 3:16", "Matthieu 5:14", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "L'Éternel est mon berger: je ne manquerai de rien.",
        options: ["Psaume 23:1", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Vous êtes la lumière du monde. Une ville située sur une montagne ne peut être cachée.",
        options: ["Matthieu 5:14", "Psaume 23:1", "Jean 3:16"],
        correctAnswer: 0
    },
    { 
        partial: "Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes.",
        options: ["Colossiens 3:23", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "L'Éternel est mon rocher, ma forteresse et mon libérateur.",
        options: ["Psaume 18:2", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Recommande ton sort à l'Éternel, mets en lui ta confiance, et il agira.",
        options: ["Psaume 37:5", "Ésaïe 41:10", "Proverbes 3:5"],
        correctAnswer: 0
    },
    { 
        partial: "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus.",
        options: ["Matthieu 6:33", "Luc 11:9", "Jean 14:6"],
        correctAnswer: 0
    },
    { 
        partial: "Ne crains rien, car je suis avec toi; ne promène pas des regards inquiets, car je suis ton Dieu.",
        options: ["Ésaïe 41:10", "Deutéronome 31:6", "Josué 1:9"],
        correctAnswer: 0
    },
    { 
        partial: "Je puis tout par celui qui me fortifie.",
        options: ["Philippiens 4:13", "Romains 8:31", "2 Corinthiens 12:9"],
        correctAnswer: 0
    },
    { 
        partial: "Car je connais les projets que j’ai formés sur vous, dit l’Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l’espérance.",
        options: ["Jérémie 29:11", "Ésaïe 40:31", "Psaume 46:1"],
        correctAnswer: 0
    },
    { 
        partial: "Approchez-vous de Dieu, et il s’approchera de vous.",
        options: ["Jacques 4:8", "Hébreux 11:6", "Psaume 34:18"],
        correctAnswer: 0
    },
    { 
        partial: "Demandez, et l’on vous donnera; cherchez, et vous trouverez; frappez, et l’on vous ouvrira.",
        options: ["Matthieu 7:7", "Jean 14:13", "Luc 11:9"],
        correctAnswer: 0
    },
    { 
        partial: "Car le salaire du péché, c’est la mort; mais le don gratuit de Dieu, c’est la vie éternelle en Jésus-Christ notre Seigneur.",
        options: ["Romains 6:23", "Jean 3:36", "Éphésiens 2:8"],
        correctAnswer: 0
    },
    { 
        partial: "Le Seigneur ne tarde pas dans l’accomplissement de la promesse, comme quelques-uns le croient; mais il use de patience envers vous, ne voulant pas qu’aucun périsse, mais voulant que tous arrivent à la repentance.",
        options: ["2 Pierre 3:9", "Romains 10:9", "Ézéchiel 18:32"],
        correctAnswer: 0
    },
    { 
        partial: "Si vous demeurez en moi, et que mes paroles demeurent en vous, demandez ce que vous voudrez, et cela vous sera accordé.",
        options: ["Jean 15:7", "Matthieu 21:22", "Marc 11:24"],
        correctAnswer: 0
    },
    { 
        partial: "Heureux ceux qui ont faim et soif de la justice, car ils seront rassasiés!",
        options: ["Matthieu 5:6", "Luc 6:21", "Psaume 107:9"],
        correctAnswer: 0
    },
    { 
        partial: "L’amour de l’argent est une racine de tous les maux.",
        options: ["1 Timothée 6:10", "Proverbes 22:1", "Matthieu 6:24"],
        correctAnswer: 0
    },
    { 
        partial: "Aimez vos ennemis, bénissez ceux qui vous maudissent, faites du bien à ceux qui vous haïssent.",
        options: ["Matthieu 5:44", "Luc 6:27", "Romains 12:20"],
        correctAnswer: 0
    },
    { 
        partial: "Rendez grâces en toutes choses, car c’est à votre égard la volonté de Dieu en Jésus-Christ.",
        options: ["1 Thessaloniciens 5:18", "Éphésiens 5:20", "Psaume 100:4"],
        correctAnswer: 0
    },
    { 
        partial: "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces.",
        options: ["Philippiens 4:6", "1 Pierre 5:7", "Matthieu 6:25"],
        correctAnswer: 0
    },
    { 
        partial: "Jésus lui dit: Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi.",
        options: ["Jean 14:6", "Actes 4:12", "Romains 10:9"],
        correctAnswer: 0
    },
    { 
        partial: "Car je suis persuadé que ni la mort ni la vie, ni les anges ni les dominations, ni les choses présentes ni les choses à venir...",
        options: ["Romains 8:38-39", "1 Corinthiens 13:4-7", "Éphésiens 3:20"],
        correctAnswer: 0
    },
    { 
        partial: "Veillez et priez, afin que vous ne tombiez pas en tentation.",
        options: ["Matthieu 26:41", "Marc 14:38", "Luc 22:46"],
        correctAnswer: 0
    },
    { 
        partial: "Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces.",
        options: ["Philippiens 4:6", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Car je connais les projets que j’ai formés sur vous, dit l’Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l’espérance.",
        options: ["Jérémie 29:11", "Matthieu 5:14", "Jean 3:16"],
        correctAnswer: 0
    },
    { 
        partial: "Que tout ce qui respire loue l’Éternel ! Louez l’Éternel !",
        options: ["Psaume 150:6", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Le commencement de la sagesse, c’est la crainte de l’Éternel ; et la science des saints, c’est l’intelligence.",
        options: ["Proverbes 9:10", "Matthieu 5:14", "Jean 3:16"],
        correctAnswer: 0
    },
    { 
        partial: "Recommande ton sort à l’Éternel, mets en lui ta confiance, et il agira.",
        options: ["Psaume 37:5", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Le Seigneur combattra pour vous ; et vous, gardez le silence.",
        options: ["Exode 14:14", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Aimez vos ennemis, bénissez ceux qui vous maudissent, faites du bien à ceux qui vous haïssent, et priez pour ceux qui vous maltraitent et qui vous persécutent.",
        options: ["Matthieu 5:44", "Jean 3:16", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Car nous marchons par la foi et non par la vue.",
        options: ["2 Corinthiens 5:7", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Soyez sobres, veillez. Votre adversaire, le diable, rôde comme un lion rugissant, cherchant qui il dévorera.",
        options: ["1 Pierre 5:8", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Celui qui demeure sous l’abri du Très-Haut repose à l’ombre du Tout-Puissant.",
        options: ["Psaume 91:1", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Mon Dieu pourvoira à tous vos besoins selon sa richesse, avec gloire, en Jésus-Christ.",
        options: ["Philippiens 4:19", "Jean 3:16", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "L’homme ne vivra pas de pain seulement, mais de toute parole qui sort de la bouche de Dieu.",
        options: ["Matthieu 4:4", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Car le salaire du péché, c’est la mort ; mais le don gratuit de Dieu, c’est la vie éternelle en Jésus-Christ notre Seigneur.",
        options: ["Romains 6:23", "Jean 3:16", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "C'est en repos et en confiance que sera votre force.",
        options: ["Ésaïe 30:15", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Demandez, et l’on vous donnera ; cherchez, et vous trouverez ; frappez, et l’on vous ouvrira.",
        options: ["Matthieu 7:7", "Jean 3:16", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Je vous laisse la paix, je vous donne ma paix. Je ne vous la donne pas comme le monde donne. Que votre cœur ne se trouble point, et ne s’alarme point.",
        options: ["Jean 14:27", "Matthieu 5:14", "Jean 3:16"],
        correctAnswer: 0
    },
    { 
        partial: "Ne crains point, car je suis avec toi ; ne promène pas des regards inquiets, car je suis ton Dieu ; je te fortifie, je viens à ton secours, je te soutiens de ma droite triomphante.",
        options: ["Ésaïe 41:10", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Car Dieu a tant aimé le monde, qu’il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu’il ait la vie éternelle.",
        options: ["Jean 3:16", "Matthieu 5:14", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "L'Éternel est mon berger : je ne manquerai de rien.",
        options: ["Psaume 23:1", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Vous êtes la lumière du monde. Une ville située sur une montagne ne peut être cachée.",
        options: ["Matthieu 5:14", "Psaume 23:1", "Jean 3:16"],
        correctAnswer: 0
    },
    { 
        partial: "Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes.",
        options: ["Colossiens 3:23", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "L'Éternel est mon rocher, ma forteresse et mon libérateur.",
        options: ["Psaume 18:2", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Ne vous conformez pas au siècle présent, mais soyez transformés par le renouvellement de l'intelligence.",
        options: ["Romains 12:2", "Jean 14:6", "Éphésiens 2:8"],
        correctAnswer: 0
    },
    { 
        partial: "Je puis tout par celui qui me fortifie.",
        options: ["Philippiens 4:13", "Matthieu 11:28", "Jean 10:10"],
        correctAnswer: 0
    },
    { 
        partial: "Approchez-vous de Dieu, et il s'approchera de vous.",
        options: ["Jacques 4:8", "Jean 3:16", "Éphésiens 6:11"],
        correctAnswer: 0
    },
    { 
        partial: "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.",
        options: ["Jérémie 29:11", "Jean 15:5", "Romains 8:28"],
        correctAnswer: 0
    },
    { 
        partial: "Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous.",
        options: ["1 Pierre 5:7", "Matthieu 6:33", "Ésaïe 41:10"],
        correctAnswer: 0
    },
    { 
        partial: "Revêtez-vous de toutes les armes de Dieu, afin de pouvoir tenir ferme contre les ruses du diable.",
        options: ["Éphésiens 6:11", "Jean 10:10", "Romains 12:2"],
        correctAnswer: 0
    },
    { 
        partial: "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus.",
        options: ["Matthieu 6:33", "Jean 3:3", "1 Corinthiens 10:13"],
        correctAnswer: 0
    },
    { 
        partial: "Jésus lui dit : Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi.",
        options: ["Jean 14:6", "Matthieu 5:14", "Romains 8:28"],
        correctAnswer: 0
    },
    { 
        partial: "Celui qui demeure sous l'abri du Très-Haut repose à l'ombre du Tout-Puissant.",
        options: ["Psaume 91:1", "Psaume 23:1", "Ésaïe 40:31"],
        correctAnswer: 0
    },
    { 
        partial: "Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent leur vol comme les aigles; ils courent, et ne se lassent point; ils marchent, et ne se fatiguent point.",
        options: ["Ésaïe 40:31", "Romains 8:1", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.",
        options: ["Matthieu 11:28", "Jean 14:6", "Psaume 46:10"],
        correctAnswer: 0
    },
    { 
        partial: "Que tout ce qui respire loue l'Éternel!",
        options: ["Psaume 150:6", "Psaume 23:1", "Jean 15:5"],
        correctAnswer: 0
    },
    { 
        partial: "Si Dieu est pour nous, qui sera contre nous?",
        options: ["Romains 8:31", "Jean 10:10", "Matthieu 6:33"],
        correctAnswer: 0
    },
    { 
        partial: "En toutes choses rendez grâces, car c'est à votre égard la volonté de Dieu en Jésus-Christ.",
        options: ["1 Thessaloniciens 5:18", "Psaume 23:1", "Philippiens 4:13"],
        correctAnswer: 0
    },
    { 
        partial: "Dieu est notre refuge et notre force, un secours qui ne manque jamais dans la détresse.",
        options: ["Psaume 46:1", "Jean 3:16", "Matthieu 5:14"],
        correctAnswer: 0
    },
    { 
        partial: "Ne crains rien, car je suis avec toi; ne promène pas des regards inquiets, car je suis ton Dieu.",
        options: ["Ésaïe 41:10", "Romains 8:28", "Matthieu 6:33"],
        correctAnswer: 0
    },
    { 
        partial: "Mon Dieu pourvoira à tous vos besoins selon sa richesse, avec gloire, en Jésus-Christ.",
        options: ["Philippiens 4:19", "Jean 10:10", "Psaume 23:1"],
        correctAnswer: 0
    },
    { 
        partial: "Il y a donc maintenant aucune condamnation pour ceux qui sont en Jésus-Christ.",
        options: ["Romains 8:1", "Jean 3:16", "Philippiens 4:13"],
        correctAnswer: 0
    },
    { 
        partial: "Le Seigneur est mon aide, je ne craindrai rien; que peut me faire un homme?",
        options: ["Hébreux 13:6", "Jean 14:6", "Matthieu 11:28"],
        correctAnswer: 0
    }
    ]// Mélanger les éléments d'un tableau (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échanger les éléments
    }
}

// Mélanger les questions avant de commencer le jeu
shuffleArray(verses);

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = 0;
let playedQuestions = 0;
let correctAnswers = 0;
const maxLives = 3; 
let lives = maxLives;
const totalQuestions = verses.length; // Nombre total de questions dans le jeu

// Mettre à jour les affichages en direct
function updateGameInfo() {
    document.getElementById("score").textContent = `Score : ${score}`;
    document.getElementById("errors").textContent = `Erreurs : ${incorrectAnswers}`;
    document.getElementById("played").textContent = `Questions jouées : ${playedQuestions}`;
    document.getElementById("lives").textContent = `Vies restantes : ${lives}`;
}

function loadQuestion() {
    if (currentQuestion < verses.length && lives > 0) {
        const verse = verses[currentQuestion];
        document.getElementById("question").textContent = verse.partial;
        const options = document.getElementById("options");
        options.innerHTML = "";

        // Mélanger les options pour éviter que la bonne réponse soit toujours au même endroit
        let shuffledOptions = [...verse.options];
        shuffleArray(shuffledOptions);

        shuffledOptions.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.addEventListener("click", () => checkAnswer(option, verse, li, shuffledOptions));
            options.appendChild(li);
        });

        updateGameInfo(); // Mettre à jour les infos du jeu après le chargement de la question
    } else {
        showResult();
    }
}

function checkAnswer(selectedOption, verse, liElement, shuffledOptions) {
    const options = document.getElementById("options");
    const correctOption = verse.options[verse.correctAnswer];

    playedQuestions++; // Incrémenter le nombre de questions jouées

    if (selectedOption === correctOption) {
        score += 5; // Augmenter le score
        correctAnswers++; // Augmenter le nombre de bonnes réponses
        currentQuestion++;
        loadQuestion();
    } else {
        incorrectAnswers++;
        lives--; // Diminuer le nombre de vies
        updateGameInfo(); // Mettre à jour les infos après une mauvaise réponse

        // Désactiver toutes les options après une mauvaise réponse
        options.querySelectorAll("li").forEach(li => {
            li.classList.add("disabled");
        });

        // Mettre en évidence la bonne et la mauvaise réponse
        liElement.style.backgroundColor = "#FF6347"; // Rouge pour la réponse incorrecte
        options.querySelectorAll("li")[shuffledOptions.indexOf(correctOption)].style.backgroundColor = "#4CAF50"; // Vert pour la bonne réponse

        // Attendre un moment avant de passer à la question suivante
        setTimeout(() => {
            if (lives > 0) {
                currentQuestion++;
                loadQuestion();
            } else {
                showResult();
            }
        }, 2000);
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.style.display = "block";

    // Calcul du pourcentage de réussite
    let successPercentage = (correctAnswers / playedQuestions) * 100;
    successPercentage = isNaN(successPercentage) ? 0 : successPercentage.toFixed(2); // Arrondi à 2 chiffres

    // Afficher les résultats
    // Cacher les éléments liés au jeu
document.getElementById("game-info").style.display = "none";  // Cache les infos du jeu (score, erreurs, vies...)
document.getElementById("question-container").style.display = "none"; // Cache la question
document.getElementById("options").style.display = "none"; // Cache les options
    document.getElementById("total-questions").textContent = `Nombre total de questions : ${totalQuestions}`;
    document.getElementById("played-questions").textContent = `Questions jouées : ${playedQuestions}`;
    document.getElementById("correct-answers").textContent = `Bonnes réponses : ${correctAnswers}`;
    document.getElementById("final-score").textContent = `Score final : ${score}`;
    document.getElementById("success-percentage").textContent = `Taux de réussite : ${successPercentage}%`;

    // Ajouter un message personnalisé en fonction du taux de réussite
    if (successPercentage >= 80) {
        resultElement.textContent = `🎉 Amen ! Tu as trouvé chaque verset comme si tu étais guidé par l'Esprit Saint ! 🕊️ Félicitations, ta connaissance des Écritures est digne d'un apôtre ! Continue à briller dans ta foi et dans ce jeu ! Tu as atteint ${successPercentage}% de réussite. 🎉`;
    } else if (successPercentage >= 50) {
        resultElement.textContent = `👏 "Bravo, tu es sur la bonne voie ! La prochaine fois, tu vas marcher sur les eaux comme Pierre et trouver chaque verset avec aisance. Continue de t'appuyer sur ta foi! Tu as atteint"
 ${successPercentage}%. Continuez comme ça !`;
    } else if (successPercentage >= 30) {
        resultElement.textContent = `👏 "Tu es presque un expert, mais n'oublie pas que même les apôtres avaient besoin de l'aide de l'Esprit pour comprendre toutes les Écritures. Continue de chercher la vérité et tu seras prêt à tout !"
 Tu as atteint"
 ${successPercentage}%. Continuez comme ça !`;
    } else {
        resultElement.textContent = `😂 "Oups… T'as eu du mal, hein ? Mais hé, c'est pas grave, quelqu'un doit bien être dernier. On dirait que tu préfères jouer à cache-cache avec les bonnes réponses, mais on y croit ! Prochain coup, c'est la victoire !" Tu as atteint ${successPercentage}%. Il faut encore s'améliorer ! 🙏`;
    }

    // Afficher le résumé
    
    document.getElementById("game-summary").style.display = "block";

    document.getElementById("next-button").style.display = "none";
    document.getElementById("stop-game").style.display = "none";
    document.getElementById("go-home").style.display = "inline-block";
}

function stopGame() {
    showResult();
    document.getElementById("stop-game").style.display = "none";
}

// Ajouter l'événement de redirection vers la page d'accueil
document.getElementById("go-home").addEventListener("click", () => {
    window.location.href = "jeux.html";  // Rediriger vers la page d'accueil du jeu
});

// Lancer le jeu
document.getElementById("next-button").addEventListener("click", loadQuestion);
document.getElementById("stop-game").addEventListener("click", stopGame);
document.getElementById("next-button").addEventListener("click", () => {
    if (lives > 0) {
        lives--; // Perdre une vie chaque fois que le joueur clique sur "Suivant"
        updateGameInfo(); // Mettre à jour les infos du jeu
        loadQuestion(); // Charger la question suivante
    } else {
        showResult(); // Si les vies sont épuisées, afficher les résultats
    }
});

// Initialiser le jeu
updateGameInfo(); // Afficher les infos dès le début
loadQuestion();
