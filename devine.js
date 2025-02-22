// Liste des versets avec options et réponses
const verses = [
    { reference: "Jean 3:16", partial: "Car Dieu a tant aimé le monde...", options: ["Que tout homme croie en Lui", "Qu'Il a donné Son Fils unique", "Que les pécheurs se repentent"], correctAnswer: 1 },
    { reference: "Psaume 23:1", partial: "L'Éternel est mon berger...", options: ["je ne manquerai de rien", "je vivrai dans la paix", "je serai toujours heureux"], correctAnswer: 0 },
    { reference: "Matthieu 5:14", partial: "Vous êtes la lumière du monde...", options: ["une ville située sur une montagne ne peut être cachée", "un flambeau ne doit pas être mis sous le boisseau", "une lampe ne doit jamais s'éteindre"], correctAnswer: 0 },
    { reference: "Jean 4:24", partial: "Dieu est esprit...", options: ["et ceux qui l'adorent doivent l'adorer en esprit et en vérité", "et il faut l'aimer de tout notre cœur", "et il veut que tous les hommes soient sauvés"], correctAnswer: 0 },
    { reference: "Romains 8:28", partial: "Nous savons du reste que toutes choses...", options: ["concourent au bien de ceux qui aiment Dieu", "sont permises par Dieu", "sont sous le contrôle de Dieu"], correctAnswer: 0 },
    { reference: "Philippiens 4:13", partial: "Je puis tout par celui qui me fortifie...", options: ["Christ", "le Saint-Esprit", "Dieu"], correctAnswer: 0 },
    { reference: "Luc 1:37", partial: "Car rien n'est impossible à Dieu...", options: ["si nous croyons", "car Dieu est tout-puissant", "si nous avons la foi"], correctAnswer: 1 },
    { reference: "Matthieu 28:19", partial: "Allez, faites de toutes les nations des disciples...", options: ["les baptisant au nom du Père, du Fils et du Saint-Esprit", "et enseignez-leur à garder tout ce que je vous ai commandé", "et prêchez l'Évangile à toute créature"], correctAnswer: 0 },
    { reference: "Jean 14:6", partial: "Je suis le chemin, la vérité, et la vie...", options: ["Personne ne vient au Père que par moi", "Je vous enverrai un consolateur", "Je suis avec vous tous les jours"], correctAnswer: 0 },
    { reference: "Actes 1:8", partial: "Mais vous recevrez une puissance...", options: ["le Saint-Esprit survenant sur vous", "vous serez mes témoins à Jérusalem", "vous serez remplis de l'amour de Dieu"], correctAnswer: 0 },
    { reference: "1 Jean 4:8", partial: "Celui qui n'aime pas...", options: ["n'a pas connu Dieu", "est loin de Dieu", "est sous la malédiction"], correctAnswer: 0 },
    { reference: "Romains 5:8", partial: "Mais Dieu prouve son amour envers nous...", options: ["en ce que, lorsque nous étions encore pécheurs, Christ est mort pour nous", "en ce que nous avons été réconciliés avec Lui", "en ce qu'il a donné son Fils pour nous"], correctAnswer: 0 },
    { reference: "Psaume 119:105", partial: "Ta parole est une lampe à mes pieds...", options: ["et une lumière sur mon sentier", "et un guide pour mes pas", "et une force pour mon âme"], correctAnswer: 0 },
    { reference: "Proverbes 3:5", partial: "Fais confiance à l'Éternel de tout ton cœur...", options: ["et ne t'appuie pas sur ta propre intelligence", "et il te guidera", "et il te bénira"], correctAnswer: 0 },
    { reference: "2 Corinthiens 5:7", partial: "Car nous marchons par la foi...", options: ["et non par la vue", "et non par les sens", "et non par nos pensées"], correctAnswer: 0 },
    { reference: "Philippiens 4:6", partial: "Ne vous inquiétez de rien...", options: ["mais en toutes choses faites connaître vos besoins à Dieu", "mais priez sans cesse", "mais demandez avec foi"], correctAnswer: 0 },
    { reference: "Hébreux 11:1", partial: "Or la foi est une ferme assurance...", options: ["des choses qu'on espère", "de tout ce que Dieu a dit", "de tout ce qu'on désire"], correctAnswer: 0 },
    { reference: "Ésaïe 41:10", partial: "Ne crains rien, car je suis avec toi...", options: ["ne sois pas effrayé, car je suis ton Dieu", "je te donnerai la victoire", "je te protégerai"], correctAnswer: 0 },
    { reference: "Jean 15:5", partial: "Je suis le cep, vous êtes les sarments...", options: ["Celui qui demeure en moi et en qui je demeure porte beaucoup de fruit", "sans moi vous ne pouvez rien faire", "tout est possible à celui qui croit en moi"], correctAnswer: 0 },
    { reference: "Ésaïe 40:31", partial: "Mais ceux qui espèrent en l'Éternel...", options: ["renouvellent leur force", "ne seront jamais honteux", "seront bénis à perpétuité"], correctAnswer: 0 },
    { reference: "Psaume 46:1", partial: "Dieu est pour nous un refuge et un appui...", options: ["Un secours qui ne manque jamais dans la détresse", "une forteresse dans les moments de danger", "un soutien dans les épreuves"], correctAnswer: 0 },
    { reference: "Jean 11:25", partial: "Je suis la résurrection et la vie...", options: ["Celui qui croit en moi, quand même il serait mort, vivra", "et celui qui vient à moi n'aura jamais faim", "et celui qui me suit ne marchera jamais dans les ténèbres"], correctAnswer: 0 },
    { reference: "1 Jean 1:9", partial: "Si nous confessons nos péchés...", options: ["il est fidèle et juste pour nous les pardonner", "il nous purifiera de toute iniquité", "il nous enverra un consolateur"], correctAnswer: 0 },
    { reference: "Matthieu 7:7", partial: "Demandez, et l'on vous donnera...", options: ["cherchez, et vous trouverez", "frappez, et l'on vous ouvrira", "toutes choses vous seront données"], correctAnswer: 0 },
    { reference: "Romains 10:9", partial: "Si tu confessais de ta bouche que Jésus est le Seigneur...", options: ["et que tu croyais dans ton cœur que Dieu l'a ressuscité d'entre les morts, tu seras sauvé", "tu seras sauvé", "tu trouveras la paix"], correctAnswer: 0 },
    { reference: "Jacques 1:5", partial: "Si l'un de vous manque de sagesse...", options: ["qu'il la demande à Dieu", "qu'il prie", "qu'il médite la parole de Dieu"], correctAnswer: 0 },
    { reference: "Colossiens 3:23", partial: "Tout ce que vous faites...", options: ["faites-le de tout votre cœur, comme pour le Seigneur et non pour des hommes", "faites-le avec joie", "faites-le avec amour"], correctAnswer: 0 },
    { reference: "Galates 5:22", partial: "Le fruit de l'Esprit, c'est...", options: ["l'amour, la joie, la paix, la patience, la bonté, la bienveillance, la fidélité, la douceur, la maîtrise de soi", "la foi, l'espérance, l'amour", "le bien-être, la prospérité, la réussite"], correctAnswer: 0 },
    { reference: "Luc 6:38", partial: "Donnez, et il vous sera donné...", options: ["une bonne mesure, pressée, secouée et qui déborde", "ce que vous donnez vous sera rendu", "une récompense en retour"], correctAnswer: 0 },
    { reference: "Matthieu 6:33", partial: "Cherchez d'abord le royaume de Dieu...", options: ["et sa justice, et toutes ces choses vous seront données par-dessus", "et il vous donnera tout ce que vous désirez", "et vous serez comblés de bénédictions"], correctAnswer: 0 },
    { reference: "1 Pierre 5:7", partial: "Déchargez-vous de tous vos soucis...", options: ["sur Lui, car Lui-même prend soin de vous", "en priant, en méditant", "sur le Seigneur, car il vous comprend"], correctAnswer: 0
    },
    { reference: "Jean 3:16", partial: "Car Dieu a tant aimé le monde...", options: ["Que tout homme croie en Lui", "Qu'Il a donné Son Fils unique", "Que les pécheurs se repentent"], correctAnswer: 1 },
    { reference: "Psaume 23:1", partial: "L'Éternel est mon berger...", options: ["je ne manquerai de rien", "je vivrai dans la paix", "je serai toujours heureux"], correctAnswer: 0 },
    { reference: "Matthieu 5:14", partial: "Vous êtes la lumière du monde...", options: ["une ville située sur une montagne ne peut être cachée", "un flambeau ne doit pas être mis sous le boisseau", "une lampe ne doit jamais s'éteindre"], correctAnswer: 0 },
    { reference: "Jean 4:24", partial: "Dieu est esprit...", options: ["et ceux qui l'adorent doivent l'adorer en esprit et en vérité", "et il faut l'aimer de tout notre cœur", "et il veut que tous les hommes soient sauvés"], correctAnswer: 0 },
    { reference: "Romains 8:28", partial: "Nous savons du reste que toutes choses...", options: ["concourent au bien de ceux qui aiment Dieu", "sont permises par Dieu", "sont sous le contrôle de Dieu"], correctAnswer: 0 },
    { reference: "Philippiens 4:13", partial: "Je puis tout par celui qui me fortifie...", options: ["Christ", "le Saint-Esprit", "Dieu"], correctAnswer: 0 },
    { reference: "Luc 1:37", partial: "Car rien n'est impossible à Dieu...", options: ["si nous croyons", "car Dieu est tout-puissant", "si nous avons la foi"], correctAnswer: 1 },
    { reference: "Matthieu 28:19", partial: "Allez, faites de toutes les nations des disciples...", options: ["les baptisant au nom du Père, du Fils et du Saint-Esprit", "et enseignez-leur à garder tout ce que je vous ai commandé", "et prêchez l'Évangile à toute créature"], correctAnswer: 0 },
    { reference: "Jean 14:6", partial: "Je suis le chemin, la vérité, et la vie...", options: ["Personne ne vient au Père que par moi", "Je vous enverrai un consolateur", "Je suis avec vous tous les jours"], correctAnswer: 0 },
    { reference: "Actes 1:8", partial: "Mais vous recevrez une puissance...", options: ["le Saint-Esprit survenant sur vous", "vous serez mes témoins à Jérusalem", "vous serez remplis de l'amour de Dieu"], correctAnswer: 0 },
    { reference: "1 Jean 4:8", partial: "Celui qui n'aime pas...", options: ["n'a pas connu Dieu", "est loin de Dieu", "est sous la malédiction"], correctAnswer: 0 },
    { reference: "Romains 5:8", partial: "Mais Dieu prouve son amour envers nous...", options: ["en ce que, lorsque nous étions encore pécheurs, Christ est mort pour nous", "en ce que nous avons été réconciliés avec Lui", "en ce que lui a donné son Fils pour nous"], correctAnswer: 0 },
    { reference: "Psaume 119:105", partial: "Ta parole est une lampe à mes pieds...", options: ["et une lumière sur mon sentier", "et un guide pour mes pas", "et une force pour mon âme"], correctAnswer: 0 },
    { reference: "Proverbes 3:5", partial: "Fais confiance à l'Éternel de tout ton cœur...", options: ["et ne t'appuie pas sur ta propre intelligence", "et il te guidera", "et il te bénira"], correctAnswer: 0 },
    { reference: "2 Corinthiens 5:7", partial: "Car nous marchons par la foi...", options: ["et non par la vue", "et non par les sens", "et non par nos pensées"], correctAnswer: 0 },
    { reference: "Philippiens 4:6", partial: "Ne vous inquiétez de rien...", options: ["mais en toutes choses faites connaître vos besoins à Dieu", "mais priez sans cesse", "mais demandez avec foi"], correctAnswer: 0 },
    { reference: "Hébreux 11:1", partial: "Or la foi est une ferme assurance...", options: ["des choses qu'on espère", "de tout ce que Dieu a dit", "de tout ce qu'on désire"], correctAnswer: 0 },
    { reference: "Ésaïe 41:10", partial: "Ne crains rien, car je suis avec toi...", options: ["ne sois pas effrayé, car je suis ton Dieu", "je te donnerai la victoire", "je te protégerai"], correctAnswer: 0 },
    { reference: "Jean 15:5", partial: "Je suis le cep, vous êtes les sarments...", options: ["Celui qui demeure en moi et en qui je demeure porte beaucoup de fruit", "sans moi vous ne pouvez rien faire", "tout est possible à celui qui croit en moi"], correctAnswer: 0 },
    { reference: "Ésaïe 40:31", partial: "Mais ceux qui espèrent en l'Éternel...", options: ["renouvellent leur force", "ne seront jamais honteux", "seront bénis à perpétuité"], correctAnswer: 0 },
    { reference: "Psaume 46:1", partial: "Dieu est pour nous un refuge et un appui...", options: ["Un secours qui ne manque jamais dans la détresse", "une forteresse dans les moments de danger", "un soutien dans les épreuves"], correctAnswer: 0 },
    { reference: "Jean 11:25", partial: "Je suis la résurrection et la vie...", options: ["Celui qui croit en moi, quand même il serait mort, vivra", "et celui qui vient à moi n'aura jamais faim", "et celui qui me suit ne marchera jamais dans les ténèbres"], correctAnswer: 0 },
    { reference: "1 Jean 1:9", partial: "Si nous confessons nos péchés...", options: ["il est fidèle et juste pour nous les pardonner", "il nous purifiera de toute iniquité", "il nous enverra un consolateur"], correctAnswer: 0 },
    { reference: "Matthieu 7:7", partial: "Demandez, et l'on vous donnera...", options: ["cherchez, et vous trouverez", "frappez, et l'on vous ouvrira", "toutes choses vous seront données"], correctAnswer: 0 },
    { reference: "Romains 10:9", partial: "Si tu confessais de ta bouche que Jésus est le Seigneur...", options: ["et que tu croyais dans ton cœur que Dieu l'a ressuscité d'entre les morts, tu seras sauvé", "tu seras sauvé", "tu trouveras la paix"], correctAnswer: 0 },
    { reference: "Jacques 1:5", partial: "Si l'un de vous manque de sagesse...", options: ["qu'il la demande à Dieu", "qu'il prie", "qu'il médite la parole de Dieu"], correctAnswer: 0 },
    { reference: "Colossiens 3:23", partial: "Tout ce que vous faites...", options: ["faites-le de tout votre cœur, comme pour le Seigneur et non pour des hommes", "faites-le avec joie", "faites-le avec amour"], correctAnswer: 0 },
    { reference: "Galates 5:22", partial: "Le fruit de l'Esprit, c'est...", options: ["l'amour, la joie, la paix, la patience, la bonté, la bienveillance, la fidélité, la douceur, la maîtrise de soi", "la foi, l'espérance, l'amour", "le bien-être, la prospérité, la réussite"], correctAnswer: 0 },
    { reference: "Luc 6:38", partial: "Donnez, et il vous sera donné...", options: ["une bonne mesure, pressée, secouée et qui déborde", "ce que vous donnez vous sera rendu", "une récompense en retour"], correctAnswer: 0 },
    { reference: "Matthieu 6:33", partial: "Cherchez d'abord le royaume de Dieu...", options: ["et sa justice, et toutes ces choses vous seront données par-dessus", "et il vous donnera tout ce que vous désirez", "et vous serez comblés de bénédictions"], correctAnswer: 0 },
    { reference: "1 Pierre 5:7", partial: "Déchargez-vous de tous vos soucis...", options: ["sur Lui, car Lui-même prend soin de vous", "en priant, en méditant", "sur le Seigneur, car il vous comprend"], correctAnswer: 0 },
    { reference: "Jean 3:16", partial: "Car Dieu a tant aimé le monde...", options: ["Que tout homme croie en Lui", "Qu'Il a donné Son Fils unique", "Que les pécheurs se repentent"], correctAnswer: 1 },
    { reference: "Psaume 23:1", partial: "L'Éternel est mon berger...", options: ["je ne manquerai de rien", "je vivrai dans la paix", "je serai toujours heureux"], correctAnswer: 0 },
    { reference: "Matthieu 5:14", partial: "Vous êtes la lumière du monde...", options: ["une ville située sur une montagne ne peut être cachée", "un flambeau ne doit pas être mis sous le boisseau", "une lampe ne doit jamais s'éteindre"], correctAnswer: 0 },
    { reference: "Jean 4:24", partial: "Dieu est esprit...", options: ["et ceux qui l'adorent doivent l'adorer en esprit et en vérité", "et il faut l'aimer de tout notre cœur", "et il veut que tous les hommes soient sauvés"], correctAnswer: 0 },
    { reference: "Romains 8:28", partial: "Nous savons du reste que toutes choses...", options: ["concourent au bien de ceux qui aiment Dieu", "sont permises par Dieu", "sont sous le contrôle de Dieu"], correctAnswer: 0 },
    { reference: "Philippiens 4:13", partial: "Je puis tout par celui qui me fortifie...", options: ["Christ", "le Saint-Esprit", "Dieu"], correctAnswer: 0 },
    { reference: "Luc 1:37", partial: "Car rien n'est impossible à Dieu...", options: ["si nous croyons", "car Dieu est tout-puissant", "si nous avons la foi"], correctAnswer: 1 },
    { reference: "Matthieu 28:19", partial: "Allez, faites de toutes les nations des disciples...", options: ["les baptisant au nom du Père, du Fils et du Saint-Esprit", "et enseignez-leur à garder tout ce que je vous ai commandé", "et prêchez l'Évangile à toute créature"], correctAnswer: 0 },
    { reference: "Jean 14:6", partial: "Je suis le chemin, la vérité, et la vie...", options: ["Personne ne vient au Père que par moi", "Je vous enverrai un consolateur", "Je suis avec vous tous les jours"], correctAnswer: 0 },
    { reference: "Actes 1:8", partial: "Mais vous recevrez une puissance...", options: ["le Saint-Esprit survenant sur vous", "vous serez mes témoins à Jérusalem", "vous serez remplis de l'amour de Dieu"], correctAnswer: 0 },
    { reference: "1 Jean 4:8", partial: "Celui qui n'aime pas...", options: ["n'a pas connu Dieu", "est loin de Dieu", "est sous la malédiction"], correctAnswer: 0 },
    { reference: "Romains 5:8", partial: "Mais Dieu prouve son amour envers nous...", options: ["en ce que, lorsque nous étions encore pécheurs, Christ est mort pour nous", "en ce que nous avons été réconciliés avec Lui", "en ce que lui a donné son Fils pour nous"], correctAnswer: 0 },
    { reference: "Psaume 119:105", partial: "Ta parole est une lampe à mes pieds...", options: ["et une lumière sur mon sentier", "et un guide pour mes pas", "et une force pour mon âme"], correctAnswer: 0 },
    { reference: "Proverbes 3:5", partial: "Fais confiance à l'Éternel de tout ton cœur...", options: ["et ne t'appuie pas sur ta propre intelligence", "et il te guidera", "et il te bénira"], correctAnswer: 0 },
    { reference: "2 Corinthiens 5:7", partial: "Car nous marchons par la foi...", options: ["et non par la vue", "et non par les sens", "et non par nos pensées"], correctAnswer: 0 },
    { reference: "Philippiens 4:6", partial: "Ne vous inquiétez de rien...", options: ["mais en toutes choses faites connaître vos besoins à Dieu", "mais priez sans cesse", "mais demandez avec foi"], correctAnswer: 0 },
    { reference: "Hébreux 11:1", partial: "Or la foi est une ferme assurance...", options: ["des choses qu'on espère", "de tout ce que Dieu a dit", "de tout ce qu'on désire"], correctAnswer: 0 },
    { reference: "Ésaïe 41:10", partial: "Ne crains rien, car je suis avec toi...", options: ["ne sois pas effrayé, car je suis ton Dieu", "je te donnerai la victoire", "je te protégerai"], correctAnswer: 0 },
    { reference: "Jean 15:5", partial: "Je suis le cep, vous êtes les sarments...", options: ["Celui qui demeure en moi et en qui je demeure porte beaucoup de fruit", "sans moi vous ne pouvez rien faire", "tout est possible à celui qui croit en moi"], correctAnswer: 0 },
    { reference: "Ésaïe 40:31", partial: "Mais ceux qui espèrent en l'Éternel...", options: ["renouvellent leur force", "ne seront jamais honteux", "seront bénis à perpétuité"], correctAnswer: 0 },
    { reference: "Psaume 46:1", partial: "Dieu est pour nous un refuge et un appui...", options: ["Un secours qui ne manque jamais dans la détresse", "une forteresse dans les moments de danger", "un soutien dans les épreuves"], correctAnswer: 0 },
    { reference: "Jean 11:25", partial: "Je suis la résurrection et la vie...", options: ["Celui qui croit en moi, quand même il serait mort, vivra", "et celui qui vient à moi n'aura jamais faim", "et celui qui me suit ne marchera jamais dans les ténèbres"], correctAnswer: 0 },
    { reference: "1 Jean 1:9", partial: "Si nous confessons nos péchés...", options: ["il est fidèle et juste pour nous les pardonner", "il nous purifiera de toute iniquité", "il nous enverra un consolateur"], correctAnswer: 0 },
    { reference: "Matthieu 7:7", partial: "Demandez, et l'on vous donnera...", options: ["cherchez, et vous trouverez", "frappez, et l'on vous ouvrira", "toutes choses vous seront données"], correctAnswer: 0 },
    { reference: "Romains 10:9", partial: "Si tu confessais de ta bouche que Jésus est le Seigneur...", options: ["et que tu croyais dans ton cœur que Dieu l'a ressuscité d'entre les morts, tu seras sauvé", "tu seras sauvé", "tu trouveras la paix"], correctAnswer: 0 },
    { reference: "Jacques 1:5", partial: "Si l'un de vous manque de sagesse...", options: ["qu'il la demande à Dieu", "qu'il prie", "qu'il médite la parole de Dieu"], correctAnswer: 0 },
    { reference: "Colossiens 3:23", partial: "Tout ce que vous faites...", options: ["faites-le de tout votre cœur, comme pour le Seigneur et non pour des hommes", "faites-le avec joie", "faites-le avec amour"], correctAnswer: 0 },
    { reference: "Galates 5:22", partial: "Le fruit de l'Esprit, c'est...", options: ["l'amour, la joie, la paix, la patience, la bonté, la bienveillance, la fidélité, la douceur, la maîtrise de soi", "la foi, l'espérance, l'amour", "le bien-être, la prospérité, la réussite"], correctAnswer: 0 },
    { reference: "Luc 6:38", partial: "Donnez, et il vous sera donné...", options: ["une bonne mesure, pressée, secouée et qui déborde", "ce que vous donnez vous sera rendu", "une récompense en retour"], correctAnswer: 0 },
    { reference: "Matthieu 6:33", partial: "Cherchez d'abord le royaume de Dieu...", options: ["et sa justice, et toutes ces choses vous seront données par-dessus", "et il vous donnera tout ce que vous désirez", "et vous serez comblés de bénédictions"], correctAnswer: 0 },
    { reference: "1 Pierre 5:7", partial: "Déchargez-vous de tous vos soucis...", options: ["sur Lui, car Lui-même prend soin de vous", "en priant, en méditant", "sur le Seigneur, car il vous comprend"], correctAnswer: 0 },
    { reference: "Matthieu 11:28", partial: "Venez à moi, vous tous qui êtes fatigués...", options: ["et chargés, et je vous donnerai du repos", "et qui êtes affligés, et je vous consolerai", "et qui êtes inquiets, et je vous soulagerai"], correctAnswer: 0 }
];
    // Ajoutez ici vos autres versets de la même manière...

// Mélanger les questions de manière aléatoire
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

function loadQuestion() {
    if (currentQuestion < verses.length) {
        const verse = verses[currentQuestion];
        document.getElementById("verse-partial").textContent = verse.partial;
        const options = document.getElementById("answer-options");
        options.innerHTML = "";

        verse.options.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.addEventListener("click", () => checkAnswer(index));
            options.appendChild(li);
        });
    } else {
        showResult();
    }
}

function checkAnswer(selectedIndex) {
    const verse = verses[currentQuestion];
    if (selectedIndex === verse.correctAnswer) {
        score += 5; // Augmenter le score pour chaque bonne réponse
    } else {
        incorrectAnswers++;
        // Afficher la bonne réponse après un échec
        const options = document.getElementById("answer-options");
        options.querySelectorAll("li").forEach((li, index) => {
            if (index === verse.correctAnswer) {
                li.style.backgroundColor = "#4caf50"; // Vert pour la bonne réponse
            }
        });
        // Si l'utilisateur échoue trois fois, terminer le jeu
        if (incorrectAnswers >= 3) {
            showResult();
        }
    }
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Vous avez terminé ! Votre score est ${score}.`;

    // Ajouter des encouragements en fonction du score
    if (score >= 100) {
        resultElement.textContent += " Félicitations, vous avez accompli l'objectif ! Accueilli par Jésus.";
    } else if (score >= 60) {
        resultElement.textContent += " Bien joué, continuez à apprendre!";
    } else {
        resultElement.textContent += " Vous avez encore du chemin à parcourir. Reprenez la méditation.";
    }

    document.getElementById("next-button").style.display = "none"; // Cacher le bouton suivant
    document.getElementById("stop-game").style.display = "none"; // Cacher le bouton stop
    document.getElementById("go-home").style.display = "inline-block"; // Afficher le bouton "Retour à l'Accueil"
}

function stopGame() {
    showResult();
    document.getElementById("stop-game").style.display = "none";
}

// Ajouter l'événement de redirection vers la page d'accueil
document.getElementById("go-home").addEventListener("click", () => {
    window.location.href = "/";  // Rediriger vers la page d'accueil du jeu
});

// Lancer le jeu
document.getElementById("next-button").addEventListener("click", loadQuestion);
document.getElementById("stop-game").addEventListener("click", stopGame);

// Initialiser le jeu
loadQuestion();