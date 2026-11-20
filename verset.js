const verses = [
    { reference: "Jean 3:16", text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle." },
    { reference: "Psaume 23:1", text: "L'Éternel est mon berger; je ne manquerai de rien." },
    { reference: "Matthieu 5:14", text: "Vous êtes la lumière du monde. Une ville située sur une montagne ne peut être cachée." },
    { reference: "Romains 8:28", text: "Nous savons du reste que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein." },
    { reference: "Philippiens 4:13", text: "Je puis tout par celui qui me fortifie." },
    { reference: "Jean 14:6", text: "Je suis le chemin, la vérité et la vie; nul ne vient au Père que par moi." },
    { reference: "Psaume 46:1", text: "Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse." },
    { reference: "Ésaïe 41:10", text: "Ne crains rien, car je suis avec toi; ne sois pas éperdu, car je suis ton Dieu; je te fortifie, je viens à ton secours, je te soutiens de ma droite triomphante." },
    { reference: "Proverbes 3:5-6", text: "Fais de l'Éternel tes délices, et il te donnera ce que ton cœur désire. Remets-toi de l'Éternel, et il agira." },
    { reference: "Ésaïe 40:31", text: "Mais ceux qui espèrent en l'Éternel renouvellent leur force; ils prennent leur vol comme les aigles; ils courent, et ne se fatiguent point, ils marchent, et ne se lassent point." },
    { reference: "1 Jean 4:8", text: "Celui qui n'aime pas n'a pas connu Dieu, car Dieu est amour." },
    { reference: "Jean 15:13", text: "Il n'y a pas de plus grand amour que de donner sa vie pour ses amis." },
    { reference: "Psaume 118:24", text: "Voici le jour que l'Éternel a fait; qu'il soit pour nous un sujet de joie et d'allégresse." },
    { reference: "Matthieu 11:28", text: "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos." },
    { reference: "2 Timothée 1:7", text: "Car Dieu ne nous a pas donné un esprit de timidité, mais de puissance, d'amour et de sagesse." },
    { reference: "Jean 16:33", text: "Je vous ai dit ces choses afin que vous ayez la paix en moi. Vous aurez des tribulations dans le monde; mais prenez courage, j'ai vaincu le monde." },
    { reference: "Psaume 37:4", text: "Fais de l'Éternel tes délices, et il te donnera ce que ton cœur désire." },
    { reference: "Luc 1:37", text: "Car rien n'est impossible à Dieu." },
    { reference: "Jean 10:10", text: "Le voleur ne vient que pour dérober, égorger et détruire; moi, je suis venu afin que les brebis aient la vie, et qu'elles soient dans l'abondance." },
    { reference: "Romains 12:2", text: "Ne vous conformez pas au siècle présent, mais soyez transformés par le renouvellement de l'intelligence, afin que vous discerniez quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },
    { reference: "Hébreux 13:5", text: "Que votre conduite soit sans avarice, soyez content de ce que vous avez, car Dieu lui-même a dit: Je ne te laisserai point, et je ne t'abandonnerai point." },
    { reference: "Jacques 1:5", text: "Si quelqu'un d'entre vous manque de sagesse, qu'il la demande à Dieu, qui donne à tous libéralement et sans reproche, et elle lui sera donnée." },
    { reference: "Ésaïe 55:9", text: "Autant les cieux sont élevés au-dessus de la terre, autant mes voies sont élevées au-dessus de vos voies, et mes pensées au-dessus de vos pensées." },
    { reference: "Psaume 34:8", text: "Goûtez et voyez combien l'Éternel est bon! Heureux l'homme qui cherche en lui son refuge!" },
    { reference: "1 Pierre 5:7", text: "Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous." },
    { reference: "Matthieu 7:7", text: "Demandez, et l'on vous donnera; cherchez, et vous trouverez; frappez, et l'on vous ouvrira." },
    { reference: "Romains 5:8", text: "Mais Dieu prouve son amour envers nous, en ce que, lorsque nous étions encore pécheurs, Christ est mort pour nous." },
    { reference: "Jean 8:12", text: "Jésus leur parla de nouveau, en disant: Je suis la lumière du monde; celui qui me suit ne marchera point dans les ténèbres, mais il aura la lumière de la vie." },
    { reference: "Hébreux 11:1", text: "Or la foi est l'assurance des choses qu'on espère, la conviction des choses qu'on ne voit pas." },
    { reference: "Matthieu 28:20", text: "Enseignez-leur à observer tout ce que je vous ai prescrit. Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde." },
    { reference: "Luc 6:38", text: "Donnez, et il vous sera donné; une bonne mesure, pressée, secouée et qui déborde, sera versée dans votre sein. Car on vous mesurera avec la mesure dont vous vous servez pour les autres." },
    { reference: "Proverbes 18:10", text: "Le nom de l'Éternel est une tour forte; le juste y court et se trouve en sécurité." },
    { reference: "1 Jean 1:9", text: "Si nous confessons nos péchés, il est fidèle et juste pour nous les pardonner, et pour nous purifier de toute iniquité." },
    { reference: "Psaume 121:1-2", text: "Je lève mes yeux vers les montagnes... d'où me viendra le secours? Le secours me vient de l'Éternel, qui a fait les cieux et la terre." },
    { reference: "Jean 1:14", text: "Et le Verbe a été fait chair, il a habité parmi nous, plein de grâce et de vérité, et nous avons contemplé sa gloire, une gloire comme celle du Fils unique venu du Père." },
    { reference: "Romains 10:9", text: "Si tu confesses de ta bouche le Seigneur Jésus, et si tu crois dans ton cœur que Dieu l'a ressuscité des morts, tu seras sauvé." },
    { reference: "Galates 5:22-23", text: "Mais le fruit de l'Esprit est amour, joie, paix, patience, bonté, bienveillance, fidélité, douceur, maîtrise de soi; la loi n'est pas contre ces choses." },
    { reference: "Philippiens 4:6", text: "Ne vous inquiétez de rien; mais en toutes choses faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâce." },
    { reference: "Jean 3:17", text: "Car Dieu n'a pas envoyé son Fils dans le monde pour juger le monde, mais pour que le monde soit sauvé par lui." },
    { reference: "1 Corinthiens 13:4-7", text: "L'amour est patient, il est plein de bonté; l'amour n'est point envieux, il ne se vante point, il ne s'enfle point d'orgueil; il ne fait rien de malhonnête, il ne cherche point son intérêt, il ne s'irrite point, il ne soupçonne point le mal; il ne se réjouit point de l'injustice, mais il se réjouit de la vérité; il excuse tout, il croit tout, il espère tout, il supporte tout." },
   { reference: "Romains 8:38-39", text: "Car j'ai l'assurance que ni la mort, ni la vie, ni les anges, ni les dominations, ni les puissances, ni les choses présentes, ni les choses à venir, ni les puissances, ni la hauteur, ni la profondeur, ni aucune autre créature ne pourra nous séparer de l'amour de Dieu, qui est en Jésus-Christ notre Seigneur." },
    { reference: "Jean 4:24", text: "Dieu est Esprit, et il faut que ceux qui l'adorent l'adorent en esprit et en vérité." },
    { reference: "Proverbes 4:23", text: "Garde ton cœur plus que toute autre chose, car de lui viennent les sources de la vie." },
    { reference: "Matthieu 6:33", text: "Cherchez premièrement le royaume de Dieu et sa justice, et toutes ces choses vous seront données par-dessus." },
    { reference: "1 Pierre 2:24", text: "Lui qui a porté nos péchés en son corps sur le bois, afin que, morts au péché, nous vivions pour la justice; c'est par ses meurtrissures que vous avez été guéris." },
    { reference: "Jean 11:25", text: "Jésus lui dit: Je suis la résurrection et la vie. Celui qui croit en moi vivra, même s'il meurt." },
    { reference: "Ésaïe 9:6", text: "Car un enfant nous est né, un fils nous est donné, et la souveraineté reposera sur son épaule; on l'appellera Admirable, Conseiller, Dieu puissant, Père éternel, Prince de la paix." },
    { reference: "Psaume 91:1", text: "Celui qui demeure sous l'abri du Très-Haut repose à l'ombre du Tout-Puissant." },
    { reference: "Hébreux 13:8", text: "Jésus-Christ est le même hier, aujourd'hui et éternellement." },
    { reference: "1 Jean 4:18", text: "Il n'y a pas de crainte dans l'amour; mais l'amour parfait bannit la crainte, car la crainte suppose un châtiment, et celui qui craint n'est pas parfait dans l'amour." },
    { reference: "Actes 1:8", text: "Mais vous recevrez une puissance, le Saint-Esprit survenant sur vous, et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie et jusqu'aux extrémités de la terre." },
    { reference: "Ésaïe 40:29", text: "Il donne de la force à celui qui est fatigué, et il augmente la vigueur de celui qui tombe en défaillance." },
    { reference: "Matthieu 5:16", text: "Que votre lumière brille ainsi devant les hommes, afin qu'ils voient vos bonnes œuvres et qu'ils glorifient votre Père qui est dans les cieux." },
    { reference: "Romains 6:23", text: "Car le salaire du péché, c'est la mort; mais le don gratuit de Dieu, c'est la vie éternelle en Jésus-Christ notre Seigneur." },
    { reference: "1 Corinthiens 10:13", text: "Aucune tentation ne vous est survenue qui n'ait été humaine; mais Dieu est fidèle, qui ne permettra pas que vous soyez tentés au-delà de vos forces, et avec la tentation il préparera aussi le moyen d'en sortir, afin que vous puissiez la supporter." },
    { reference: "Psaume 139:14", text: "Je te loue de ce que je suis une créature si merveilleuse. Tes œuvres sont admirables, et mon âme le reconnaît bien." },
    { reference: "2 Chroniques 7:14", text: "Si mon peuple sur qui est invoqué mon nom s'humilie, prie, cherche ma face et se détourne de ses mauvaises voies, je l'exaucerai des cieux, je pardonnerai son péché et je guérirai son pays." },
    { reference: "Luc 12:32", text: "Ne crains point, petit troupeau, car votre Père a trouvé bon de vous donner le royaume." },
    { reference: "Romains 12:9", text: "Que l'amour soit sans hypocrisie. Ayez en horreur le mal, attachez-vous fortement au bien." },
    { reference: "Jean 14:27", text: "Je vous laisse la paix, je vous donne ma paix; je ne vous donne pas comme le monde donne. Que votre cœur ne se trouble point, et ne s'alarme point." },
    { reference: "Proverbes 3:7", text: "Ne sois pas sage à tes propres yeux; crains l'Éternel, et détourne-toi du mal." },
    { reference: "2 Corinthiens 5:7", text: "Car nous marchons par la foi et non par la vue." },
    { reference: "Luc 1:49", text: "Car il m'a fait des merveilles, celui qui est puissant, et son nom est saint." },
    { reference: "Psaume 100:4", text: "Entrez dans ses portes avec des actions de grâces, dans ses parvis avec des cantiques! Célébrez-le, bénissez son nom!" },
    { reference: "Ésaïe 54:10", text: "Les montagnes s'éloigneraient, et les collines chancèleraient; mais ma bonté ne se retirera point de toi, et mon alliance de paix ne chancèlera point, dit l'Éternel, qui a compassion de toi." },
    { reference: "Matthieu 7:12", text: "Tout ce que vous voulez que les hommes fassent pour vous, faites-le de même pour eux; car c'est la loi et les prophètes." },
    { reference: "Philippiens 3:14", text: "Je presse vers le but, pour remporter le prix de l'appel céleste de Dieu en Jésus-Christ." },
    { reference: "1 Thessaloniciens 5:16-18", text: "Soyez toujours joyeux. Priez sans cesse. Rendez grâce en toutes choses, car c'est à votre égard la volonté de Dieu en Jésus-Christ." },
    { reference: "Psaume 91:2", text: "Je dis à l'Éternel: Tu es mon refuge et ma forteresse, mon Dieu en qui je me confie." },
    { reference: "Actes 16:31", text: "Crois au Seigneur Jésus, et tu seras sauvé, toi et ta famille." },
    { reference: "Colossiens 3:23", text: "Tout ce que vous faites, faites-le de tout votre cœur, comme pour le Seigneur et non pour les hommes." },
    { reference: "1 Pierre 3:15", text: "Mais sanctifiez dans vos cœurs Christ le Seigneur, étant toujours prêts à répondre à quiconque vous demande raison de l'espérance qui est en vous." },
    { reference: "1 Jean 5:4", text: "Car tout ce qui est né de Dieu triomphe du monde; et la victoire qui triomphe du monde, c'est notre foi." },
    { reference: "Ésaïe 40:31", text: "Mais ceux qui espèrent en l'Éternel renouvellent leur force; ils prennent leur vol comme les aigles; ils courent, et ne se fatiguent point, ils marchent, et ne se lassent point." },
    { reference: "Jean 7:37", text: "Si quelqu'un a soif, qu'il vienne à moi, et qu'il boive." },
    { reference: "Matthieu 6:34", text: "Ne vous inquiétez donc pas du lendemain; car le lendemain aura soin de lui-même. À chaque jour suffit sa peine." },
    { reference: "2 Pierre 1:3", text: "Sa divine puissance nous a donné tout ce qui contribue à la vie et à la piété, par la connaissance de celui qui nous a appelés par sa gloire et par sa vertu." },
    { reference: "Psaume 34:17", text: "Quand les justes crient, l'Éternel entend, et il les délivre de toutes leurs détresses." },
    { reference: "Éphésiens 6:10", text: "Enfin, fortifiez-vous dans le Seigneur, et par sa force toute-puissante." },
    { reference: "Jean 6:35", text: "Jésus leur dit: Je suis le pain de vie; celui qui vient à moi n'aura jamais faim, et celui qui croit en moi n'aura jamais soif." },
    { reference: "Proverbes 16:3", text: "Recommande à l'Éternel tes œuvres, et tes projets réussiront." },
    { reference: "Actes 4:12", text: "Il n'y a de salut en aucun autre; car il n'y a sous le ciel aucun autre nom qui ait été donné parmi les hommes, par lequel nous devions être sauvés." },
];

let currentVerseIndex = 0;
let score = 0;
let mistakes = 0;
const maxMistakes = 3;

const referenceElement = document.getElementById("reference");
const userInput = document.getElementById("user-input");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const stopButton = document.getElementById("stop-game");
const scoreDisplay = document.getElementById("score-display");
const backHomeButton = document.getElementById("back-home");

function loadVerse() {
    if (currentVerseIndex < verses.length) {
        referenceElement.textContent = `📖 ${verses[currentVerseIndex].reference}`;
        userInput.value = "";
        feedbackElement.textContent = "";
    } else {
        endGame();
    }
}

// Fonction qui analyse la réponse en cherchant des mots-clés
function isAnswerCorrect(userAnswer, correctAnswer) {
    const userWords = userAnswer.trim().toLowerCase().split(' ');
    const correctWords = correctAnswer.toLowerCase().split(' ');

    // Si l'utilisateur a un mot clé ou une phrase importante, on valide la réponse
    for (let word of userWords) {
        if (correctWords.includes(word)) {
            return true;
        }
    }
    return false;
}

document.getElementById("validate-button").addEventListener("click", () => {
    const userAnswer = userInput.value.trim();
    const correctAnswer = verses[currentVerseIndex].text;

    // Utilisation de la fonction isAnswerCorrect pour validation flexible
    if (isAnswerCorrect(userAnswer, correctAnswer)) {
        score += 5;
        feedbackElement.textContent = "✅ Correct ! +5 points";
    } else {
        mistakes++;
        feedbackElement.textContent = `❌ Mauvaise réponse (${mistakes}/${maxMistakes})`;
        
        // Affichage de la bonne réponse après un échec
        const correctAnswerDisplay = document.createElement("p");
        correctAnswerDisplay.textContent = `👉 Bonne réponse : ${correctAnswer}`;
        feedbackElement.appendChild(correctAnswerDisplay);

        if (mistakes >= maxMistakes) {
            endGame();
            return;
        }
    }

    nextButton.style.display = "block";
});

nextButton.addEventListener("click", () => {
    currentVerseIndex++;
    nextButton.style.display = "none";
    loadVerse();
});

stopButton.addEventListener("click", endGame);

function endGame() {
    let message = "";
    if (score === 0) {
        message = "😔 Tu dois méditer davantage !";
    } else if (score < 10) {
        message = "📖 Continue à apprendre la Parole de Dieu !";
    } else if (score < verses.length * 5) {
        message = "🌟 Félicitations, tu progresses !";
    } else {
        message = "🎉 Jésus lui-même t'accueille !";
    }

    scoreDisplay.innerHTML = `Score : ${score} points<br>${message}`;
    referenceElement.textContent = "";
    userInput.style.display = "none";
    document.getElementById("validate-button").style.display = "none";
    nextButton.style.display = "none";
    backHomeButton.style.display = "block"; // Afficher le bouton retour à l'accueil
}

function goToHomePage() {
    // Remplacez l'URL par la page d'accueil souhaitée (par exemple index.html)
    window.location.href = "game.html";
}

loadVerse();