const questions = [
    { 
        question: "Quel est le premier critère dans le choix d’un conjoint chrétien ?", 
        options: ["La beauté", "La richesse", "La foi en Dieu"],
        correctAnswer: 2
    },
    { 
        question: "Que dit la Bible sur le mariage ?", 
        options: ["C'est un contrat temporaire", "C'est une alliance sacrée", "C'est une obligation"],
        correctAnswer: 1
    },
    { 
        question: "Selon Proverbes 31, quelles qualités rechercher chez une femme ?", 
        options: ["Elle doit être très belle", "Elle doit craindre l'Éternel", "Elle doit être silencieuse"],
        correctAnswer: 1
    },
    { 
        question: "Quel comportement favorise un bon choix de conjoint ?", 
        options: ["Prier et observer", "Sortir avec plusieurs personnes", "Écouter les amis"],
        correctAnswer: 0
    },
    { 
        question: "Selon 1 Corinthiens 13, quel est l’élément clé d’un mariage réussi ?", 
        options: ["L'amour", "L'argent", "L'autorité"],
        correctAnswer: 0
    },
    { 
        question: "As-tu une vie spirituelle stable ?", 
        options: ["Oui, je prie régulièrement et lis la Bible", "Je prie parfois mais je ne lis pas la Bible", "Non, je n'ai pas de routine spirituelle"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt à faire des sacrifices pour ton conjoint ?", 
        options: ["Oui, je suis prêt à tout donner pour mon conjoint", "Je suis prêt à faire des compromis, mais pas tout", "Non, je préfère ma liberté"],
        correctAnswer: 0
    },
    { 
        question: "Comment réagis-tu en cas de conflit dans une relation ?", 
        options: ["Je reste calme et je cherche une solution", "Je me fâche et évite la discussion", "Je quitte la conversation en attendant que ça passe"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu financièrement stable et prêt à assumer des responsabilités ?", 
        options: ["Oui, j'ai un budget et je suis capable de gérer mes finances", "Je suis encore en train d'apprendre à gérer mon argent", "Non, je ne me sens pas encore prêt financièrement"],
        correctAnswer: 0
    },
    { 
        question: "As-tu des objectifs de vie clairs et partagés ?", 
        options: ["Oui, j'ai des objectifs et je cherche quelqu'un qui partage la même vision", "Je suis encore en train de chercher ce que je veux vraiment", "Non, je vis au jour le jour sans plan précis"],
        correctAnswer: 0
    },
    { 
        question: "Crois-tu que le mariage est une alliance sacrée ?", 
        options: ["Oui, c'est une alliance que je respecte profondément", "Je pense que c'est une belle tradition, mais pas essentielle", "Non, je ne suis pas sûr de ce que représente le mariage"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt à communiquer ouvertement avec ton futur conjoint ?", 
        options: ["Oui, la communication est essentielle pour moi", "Je préfère parfois garder mes pensées pour moi", "Non, je ne suis pas très ouvert à ce sujet"],
        correctAnswer: 0
    },
    { 
        question: "Comment gères-tu le stress et les défis dans ta vie ?", 
        options: ["Je prie et je trouve des solutions pratiques", "Je me confie souvent à mes amis", "Je me sens souvent submergé et ne sais pas comment gérer"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt à accepter les imperfections de ton partenaire ?", 
        options: ["Oui, personne n'est parfait et je suis prêt à accepter les défauts", "Je pourrais avoir des difficultés, mais je vais essayer", "Non, je préfère quelqu'un qui soit parfait à mes yeux"],
        correctAnswer: 0
    },
    { 
        question: "Comment gères-tu les finances dans une relation ?", 
        options: ["Je suis prêt à partager équitablement et à établir un budget commun", "Je préfère garder mes finances séparées", "Je ne sais pas encore comment gérer les finances en couple"],
        correctAnswer: 0
    },
    { 
        question: "As-tu déjà pris le temps de comprendre les valeurs chrétiennes qui guident le mariage ?", 
        options: ["Oui, je les connais et je suis d'accord avec elles", "Je suis en train d'apprendre et de m'informer", "Non, je ne connais pas vraiment les principes bibliques sur le mariage"],
        correctAnswer: 0
    },
    { 
        question: "Crois-tu que le mariage devrait être fondé sur l'amour inconditionnel ?", 
        options: ["Oui, l'amour inconditionnel est la base du mariage", "L'amour est important, mais il doit aussi y avoir d'autres facteurs", "Non, je pense que l'amour doit être réciproque et conditionnel"],
        correctAnswer: 0
    },
    { 
        question: "Comment gères-tu la pression sociale de se marier ?", 
        options: ["Je me concentre sur ce que Dieu a prévu pour ma vie", "Je me laisse parfois influencer par les attentes des autres", "Je ne me sens pas sous pression pour me marier"],
        correctAnswer: 0
    },
    { 
        question: "Crois-tu que le mariage chrétien exige une pureté avant le mariage ?", 
        options: ["Oui, la pureté avant le mariage est essentielle", "C'est important, mais je pense que cela peut être pardonné", "Non, je ne vois pas pourquoi cela serait nécessaire"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt à construire une famille avec un conjoint ?", 
        options: ["Oui, je rêve de fonder une famille chrétienne", "Je n'y pense pas encore, mais je suis ouvert à l'idée", "Non, je ne suis pas prêt pour fonder une famille"],
        correctAnswer: 0
    },
    { 
        question: "Comment réagirais-tu si ton partenaire fait face à une période difficile ?", 
        options: ["Je le soutiendrais spirituellement et émotionnellement", "Je lui offrirais du temps et de l'espace", "Je ne sais pas comment je réagirais dans cette situation"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu ouvert à la discipline chrétienne dans un mariage ?", 
        options: ["Oui, je crois qu'il est important d'être guidé par la parole de Dieu", "Je préfère vivre sans contraintes spirituelles", "Je ne suis pas sûr de ce que cela signifie dans un mariage"],
        correctAnswer: 0
    },
    { 
        question: "Comment définirais-tu une relation saine dans le cadre du mariage chrétien ?", 
        options: ["C'est une relation fondée sur l'amour, la foi et la communication", "C'est une relation dans laquelle chacun fait des compromis", "C'est une relation où chacun reste indépendant"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt à être un modèle pour tes enfants, si tu en as ?", 
        options: ["Oui, je veux leur enseigner les valeurs chrétiennes", "Je suis encore en train d'apprendre", "Non, je ne me sens pas prêt pour cela"],
        correctAnswer: 0
    },
    { 
        question: "Comment gérerais-tu une situation où toi et ton conjoint avez des points de vue très différents ?", 
        options: ["Je chercherais un compromis tout en restant respectueux", "Je préférerais imposer mon point de vue", "Je préférerais éviter le sujet pour ne pas créer de conflit"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt à servir Dieu en tant que couple ?", 
        options: ["Oui, nous devons servir ensemble et glorifier Dieu", "Je pense que nous pouvons servir chacun de notre côté", "Non, je ne suis pas encore sûr de cela"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt à être responsable de l'éducation spirituelle de tes enfants ?", 
        options: ["Oui, je suis prêt à les élever dans la foi chrétienne", "Je ferai de mon mieux, mais je ne suis pas totalement préparé", "Non, je préfère ne pas m'engager dans ce domaine"],
        correctAnswer: 0
    },
    { 
        question: "Penses-tu que la prière commune est importante dans le mariage ?", 
        options: ["Oui, elle renforce le lien spirituel et nous rapproche de Dieu", "C'est important mais pas essentiel", "Non, je ne pense pas que la prière soit nécessaire dans le mariage"],
        correctAnswer: 0
    },
    { 
        question: "Comment prévois-tu de gérer le temps passé en couple et avec Dieu ?", 
        options: ["Je prioriserai Dieu et trouverai un équilibre", "Je m'occuperai d'abord de ma vie de couple", "Je ne sais pas encore comment organiser cela"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt à sacrifier tes désirs personnels pour le bien de ton mariage ?", 
        options: ["Oui, je crois que le mariage exige des sacrifices mutuels", "Je suis encore en train d'apprendre à sacrifier", "Non, je n'aime pas sacrifier mes désirs personnels"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire te demande de mentir pour lui, que fais-tu ?", 
        options: ["Je refuse et je lui explique pourquoi", "Je mentirais pour éviter de créer de la tension", "Je lui dis que ce n'est pas un problème si cela peut aider"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire a une mauvaise habitude que tu détestes, que fais-tu ?", 
        options: ["Je lui en parle avec amour et respect", "Je laisse passer en espérant qu'il ou elle changera", "Je me fâche et je lui fais comprendre que c'est un problème"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire veut acheter un objet coûteux, mais vous êtes en difficulté financière. Que fais-tu ?", 
        options: ["Je lui explique calmement que nous devons économiser", "Je l'encourage à l'acheter, il mérite de se faire plaisir", "Je le laisse faire et nous verrons bien les conséquences"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire t'a trahi en mentant, comment réagis-tu ?", 
        options: ["Je lui pardonne et lui montre de la grâce", "Je lui en veux et j'ai du mal à lui faire confiance", "Je lui fais savoir que je ne peux plus continuer avec lui"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire traverse une épreuve spirituelle et semble se détourner de Dieu, que fais-tu ?", 
        options: ["Je prie pour lui et l'encourage à revenir à Dieu", "Je laisse passer, il trouvera sa voie", "Je le juge et lui fais des reproches pour sa faiblesse"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire a des opinions politiques très différentes des tiennes. Comment abordes-tu le sujet ?", 
        options: ["Nous discutons calmement et respectueusement de nos points de vue", "Je garde mon opinion pour moi pour éviter les conflits", "Je lui fais savoir qu'il a tort et que je ne suis pas d'accord avec lui"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire te demande de couper les liens avec un(e) ami(e) proche, que fais-tu ?", 
        options: ["Je lui explique la valeur de cette amitié mais je respecte ses préoccupations", "Je coupe les liens immédiatement pour éviter le conflit", "Je lui dis que ce n'est pas possible et je garde mon ami(e)"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire ne partage pas les mêmes valeurs que toi sur l'éducation des enfants. Que fais-tu ?", 
        options: ["Nous avons une conversation ouverte et recherchons un terrain d'entente", "Je continue avec ma vision et impose mes choix", "Je laisse faire sans rien dire, pensant qu'il ou elle changera"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire t'a blessé par ses paroles. Que fais-tu ?", 
        options: ["Je lui parle de la manière dont ses paroles m'ont affecté", "Je garde ça pour moi et je me renferme", "Je lui réplique pour qu'il comprenne la douleur qu'il a causée"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire veut quitter l'église, que fais-tu ?", 
        options: ["Je lui explique l'importance de rester fidèle à Dieu et je prie avec lui", "Je le laisse faire, car c'est sa décision", "Je l'ignore et continue d'aller à l'église sans lui"],
        correctAnswer: 0
    },
    { 
        question: "Tu es invité à une fête où tu sais qu'il y aura de l'alcool et des comportements inappropriés. Que fais-tu ?", 
        options: ["Je décline poliment l'invitation et je reste fidèle à mes valeurs", "Je vais à la fête et essaie de ne pas participer à ces comportements", "Je vais à la fête, ça ne me dérange pas"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire fait une erreur et refuse de s'excuser. Que fais-tu ?", 
        options: ["Je lui donne de l'espace et j'attends qu'il se rende compte de son erreur", "Je lui demande de s'excuser et lui montre comment il m'a blessé", "Je lui pardonne immédiatement sans qu'il s'excuse"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire te demande de garder un secret qui pourrait nuire à quelqu'un d'autre. Que fais-tu ?", 
        options: ["Je refuse de garder ce secret et cherche à aider la personne concernée", "Je garde le secret par loyauté envers mon partenaire", "Je fais semblant de ne rien savoir et reste neutre"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire a une vision différente de celle de Dieu sur un sujet important. Comment réagis-tu ?", 
        options: ["Je prie pour lui et je partage mes pensées avec amour et bienveillance", "Je me tais et je laisse les choses aller", "Je me fâche et lui impose mes croyances"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire veut prendre une décision importante sans t'en parler. Comment réagis-tu ?", 
        options: ["Je lui fais comprendre que nous devons prendre des décisions ensemble", "Je le laisse faire, il est adulte", "Je m'opposse fermement à sa décision"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire te reproche de ne pas passer assez de temps avec lui/elle. Que fais-tu ?", 
        options: ["Je reconnais le problème et je fais un effort pour être plus présent", "Je lui dis qu'il ou elle est trop exigeant(e)", "Je pense que c'est une petite chose et je ne change rien"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire te propose de t'aider avec une tâche, mais tu préfères faire ça seul(e). Que fais-tu ?", 
        options: ["Je lui explique que j'apprécie son aide, mais que je préfère gérer seul(e)", "Je laisse mon orgueil de côté et accepte son aide", "Je fais semblant d'accepter l'aide mais je m'en occupe moi-même"],
        correctAnswer: 1
    },
    { 
        question: "Ton partenaire veut déménager dans un autre pays pour le travail, mais cela te déstabilise. Que fais-tu ?", 
        options: ["Je prends le temps d'en discuter et d'évaluer toutes les options", "Je refuse catégoriquement et insiste pour rester là où je suis", "Je le/la soutiens sans poser de questions"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire te demande de lui faire confiance malgré des antécédents de mensonges. Que fais-tu ?", 
        options: ["Je fais un effort pour lui faire confiance tout en restant prudent(e)", "Je ne lui fais plus confiance et mets fin à la relation", "Je fais semblant de lui faire confiance pour éviter les conflits"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire souhaite rendre visite à ses parents pendant une période où tu avais prévu quelque chose. Que fais-tu ?", 
        options: ["Je comprends et ajuste mes plans pour qu'il puisse y aller", "Je suis contrarié(e) et lui demande d'annuler sa visite", "Je vais avec lui/elle et modifie mes propres plans"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire n'accepte pas de recevoir des conseils de tes proches. Comment gères-tu cela ?", 
        options: ["Je lui explique calmement que c'est pour notre bien", "Je respecte sa décision et je garde les conseils pour moi", "Je lui impose de recevoir les conseils"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire veut partir en vacances dans un endroit où tu n'es pas à l'aise. Que fais-tu ?", 
        options: ["Je lui fais part de mes préoccupations et nous trouvons un compromis", "Je refuse de partir et reste à la maison", "Je vais en vacances même si je ne me sens pas à l'aise"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire veut prendre un animal de compagnie, mais tu n'en veux pas. Que fais-tu ?", 
        options: ["Je lui explique mes raisons et nous cherchons une solution ensemble", "Je lui dis de faire ce qu'il ou elle veut", "Je lui impose de ne pas prendre l'animal"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire semble négliger ses responsabilités spirituelles. Comment réagis-tu ?", 
        options: ["Je prie pour lui et l'encourage à revenir à Dieu", "Je l'ignore et le laisse faire", "Je me fâche et lui reproche son manque de foi"],
        correctAnswer: 0
    },
    { 
        question: "Ton partenaire te demande de faire quelque chose que tu juges contraire à tes principes. Que fais-tu ?", 
        options: ["Je lui explique pourquoi je ne peux pas le faire et nous cherchons une alternative", "Je fais ce qu'il ou elle demande pour éviter le conflit", "Je refuse sans explication"],
        correctAnswer: 0
    },
    { 
        question: "Quelle est l'importance de la foi dans ton choix de conjoint ?", 
        options: ["C'est essentiel, je veux quelqu'un qui aime Dieu autant que moi", "C'est important, mais il y a d'autres critères aussi", "Ce n'est pas vraiment un critère pour moi"],
        correctAnswer: 0
    },
    { 
        question: "Comment vois-tu l'éducation des enfants dans un couple chrétien ?", 
        options: ["Nous devrions enseigner les valeurs bibliques dès leur jeune âge", "Nous devrions leur laisser choisir leur propre chemin spirituel", "L'éducation chrétienne n'est pas une priorité pour moi"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu d'accord pour prier ensemble en tant que couple ?", 
        options: ["Oui, la prière est une priorité dans ma relation", "Oui, mais ce n'est pas une obligation", "Non, je préfère garder ma prière personnelle"],
        correctAnswer: 0
    },
    { 
        question: "Penses-tu qu'un mariage chrétien doit être basé sur l'amour inconditionnel ?", 
        options: ["Oui, l'amour doit être inébranlable, comme celui de Christ pour l'Église", "Oui, mais l'amour peut évoluer avec le temps", "Non, l'amour doit être réciproque et conditionnel"],
        correctAnswer: 0
    },
    { 
        question: "Quelles sont tes attentes concernant l'engagement dans l'église ?", 
        options: ["Je souhaite que mon partenaire soit aussi impliqué dans l'église que moi", "Je préfère que mon partenaire soit un peu impliqué, mais pas forcément aussi engagé", "Je préfère que mon partenaire n'ait pas à s'impliquer dans l'église"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt(e) à sacrifier certains de tes projets pour l'amour de ton conjoint ?", 
        options: ["Oui, je pense que le mariage nécessite des sacrifices mutuels", "Cela dépend du projet, certains ne peuvent pas être sacrifiés", "Non, mes projets sont importants pour moi"],
        correctAnswer: 0
    },
    { 
        question: "Quelle importance accordes-tu à la communication dans un mariage ?", 
        options: ["La communication ouverte et honnête est essentielle", "C'est important, mais il y a d'autres façons de résoudre les conflits", "Ce n'est pas une priorité pour moi"],
        correctAnswer: 0
    },
    { 
        question: "Que fais-tu si ton partenaire fait une erreur qui affecte ta confiance ?", 
        options: ["Je lui parle et nous cherchons à restaurer la confiance", "Je lui donne du temps et j'espère que les choses reviendront à la normale", "Je me retire et j'attends qu'il ou elle change"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu ouvert(e) à la discipline spirituelle dans ton mariage ?", 
        options: ["Oui, la discipline spirituelle est importante pour nous grandir ensemble dans le Seigneur", "Je pense que chacun devrait avoir sa propre relation avec Dieu", "Non, je préfère que nous restions libres de nos croyances"],
        correctAnswer: 0
    },
    { 
        question: "Comment vois-tu la gestion financière dans le mariage ?", 
        options: ["Nous devrions gérer notre argent ensemble, en priant pour la direction de Dieu", "Nous devrions avoir des comptes séparés, mais nous partagerons certains coûts", "L'argent est une affaire personnelle, chacun gère ses finances"],
        correctAnswer: 0
    },
    { 
        question: "Quelle est ton opinion sur le rôle de l'homme et de la femme dans le mariage ?", 
        options: ["Je crois que l'homme est le chef de la maison, mais la femme a aussi une place importante", "Je pense que les rôles dans le mariage doivent être partagés équitablement", "Je pense que les rôles doivent être flexibles et dépendre de la situation"],
        correctAnswer: 0
    },
    { 
        question: "Penses-tu qu'un mariage chrétien doive toujours être formé par un homme et une femme ?", 
        options: ["Oui, c'est ce que la Bible enseigne", "Je pense que cela dépend des circonstances et des convictions personnelles", "Non, je crois que l'amour devrait primer avant tout"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt(e) à écouter et respecter les opinions spirituelles de ton partenaire ?", 
        options: ["Oui, je suis ouvert(e) à la sagesse que mon partenaire peut apporter", "Je l'écoute, mais je préfère suivre mon propre jugement", "Non, je préfère que mon partenaire me suive dans mes convictions spirituelles"],
        correctAnswer: 0
    },
    { 
        question: "Quelle place as-tu pour les relations fraternelles en dehors du couple ?", 
        options: ["Elles sont essentielles et doivent être soutenues par mon partenaire", "Je pense que nous devrions passer le plus de temps possible ensemble", "Je préfère garder mes amitiés séparées du mariage"],
        correctAnswer: 0
    },
    { 
        question: "Quel rôle la prière joue-t-elle dans la résolution des conflits ?", 
        options: ["La prière doit être la première étape pour résoudre nos conflits", "La prière aide, mais la discussion et la réconciliation viennent d'abord", "Je pense que la prière n'est pas toujours nécessaire pour résoudre les conflits"],
        correctAnswer: 0
    },
    { 
        question: "Comment gères-tu les défis financiers dans un couple ?", 
        options: ["Nous devrions prier ensemble et chercher des solutions basées sur la sagesse biblique", "Je pense qu'il est important de trouver un compromis pragmatique", "Je préfère gérer les finances seul(e) et partager ce qui est nécessaire"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt(e) à soutenir ton partenaire dans ses épreuves spirituelles ?", 
        options: ["Oui, je suis prêt(e) à être un soutien spirituel constant", "Je serai là, mais je pense que chacun doit se prendre en main spirituellement", "Je ne sais pas si je serais capable de soutenir spirituellement mon partenaire"],
        correctAnswer: 0
    },
    { 
        question: "Quelle est ton attitude face aux épreuves que pourrait traverser ton partenaire ?", 
        options: ["Je veux être une source de réconfort et de soutien pendant ces moments difficiles", "Je serai là, mais je pense qu'il ou elle doit gérer seul(e)", "Je ne sais pas si je pourrais gérer les épreuves de mon partenaire"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu ouvert(e) à l'idée d'une vie maritale basée sur l'humilité et le service mutuel ?", 
        options: ["Oui, je pense que le mariage est une opportunité de se servir l'un l'autre", "Je préfère que les rôles soient clairs et chacun fasse sa part", "Non, je crois qu'il faut plus d'égalité que de service"],
        correctAnswer: 0
    },
    { 
        question: "Quel rôle la fidélité joue-t-elle dans un mariage chrétien ?", 
        options: ["La fidélité est fondamentale, elle est le fondement de la relation", "La fidélité est importante, mais il faut aussi de la compréhension", "La fidélité n'est pas la priorité, tant qu'il y a de l'amour"],
        correctAnswer: 0
    },
    { 
        question: "Comment vois-tu le partage des responsabilités dans le couple ?", 
        options: ["Nous devrions partager toutes les responsabilités de manière égale", "Je crois que certains rôles doivent être attribués à l'un ou l'autre", "Je pense que chacun devrait s'occuper de ses propres responsabilités"],
        correctAnswer: 0
    },
    { 
        question: "Quelle importance accordes-tu à la transparence dans le mariage ?", 
        options: ["La transparence est essentielle pour construire une relation solide", "La transparence est importante, mais certains aspects de la vie privée doivent être respectés", "La transparence n'est pas nécessaire, tant qu'il y a confiance"],
        correctAnswer: 0
    },
    { 
        question: "Quelles sont tes attentes concernant la gestion des conflits dans le mariage ?", 
        options: ["Les conflits doivent être réglés avec respect, amour et dans la prière", "Les conflits doivent être réglés de manière pragmatique", "Les conflits doivent être évités autant que possible"],
        correctAnswer: 0
    },
    { 
        question: "Penses-tu que la relation sexuelle doit être une priorité dans le mariage ?", 
        options: ["Oui, elle est un aspect fondamental de l'union", "Elle est importante, mais elle ne doit pas être la priorité", "Non, d'autres aspects du mariage sont plus importants"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt(e) à pardonner rapidement en cas de faute dans ton mariage ?", 
        options: ["Oui, le pardon est essentiel pour maintenir l'unité dans le mariage", "Je pardonne, mais j'ai besoin de temps pour guérir", "Je pense que certaines fautes sont difficiles à pardonner"],
        correctAnswer: 0
    },
    { 
        question: "Tu te lèves le matin, quelle est la première chose que tu fais ?", 
        options: ["Je prends un moment pour prier et remercier Dieu", "Je vérifie mes messages et réseaux sociaux", "Je me lève rapidement sans penser à prier"],
        correctAnswer: 0
    },
    { 
        question: "Lorsque tu rencontres une situation difficile, que fais-tu ?", 
        options: ["Je prie et demande à Dieu de me guider", "Je demande des conseils à des amis proches", "Je tente de résoudre le problème seul sans consulter Dieu"],
        correctAnswer: 0
    },
    { 
        question: "Tu rencontres une personne qui semble être un bon partenaire. Que fais-tu ?", 
        options: ["Je prie d'abord pour savoir si c'est la personne que Dieu veut pour moi", "Je me laisse guider par mes sentiments et je suis curieux d'en savoir plus", "Je me concentre uniquement sur l'apparence et les traits extérieurs de la personne"],
        correctAnswer: 0
    },
    { 
        question: "Tu traverses une période de célibat prolongée, comment réagis-tu ?", 
        options: ["Je prends ce temps pour me concentrer sur ma croissance spirituelle et ma relation avec Dieu", "Je commence à me sentir frustré et je cherche à rencontrer quelqu'un rapidement", "Je me demande si Dieu a oublié de m'envoyer un partenaire"],
        correctAnswer: 0
    },
    { 
        question: "Une amie chrétienne te conseille de prendre ton temps et de ne pas précipiter ton mariage. Que fais-tu ?", 
        options: ["Je respecte ses conseils et prends mon temps", "Je me sens un peu découragé, mais je vais essayer", "Je trouve cela difficile à accepter, je préfère chercher quelqu'un rapidement"],
        correctAnswer: 0
    },
    { 
        question: "Quand tu fais face à une tentation, comment réagis-tu ?", 
        options: ["Je prie et je cherche à fuir la tentation en me concentrant sur Dieu", "J'essaie de la gérer seul et de résister", "Je succombe parfois à la tentation, pensant que c'est inévitable"],
        correctAnswer: 0
    },
    { 
        question: "Tu veux aller à l'église mais il pleut et tu es fatigué, que fais-tu ?", 
        options: ["Je me motive à y aller malgré la fatigue, car c'est important pour ma vie spirituelle", "Je décide de rester à la maison et de suivre le service en ligne", "Je prends la décision de ne pas y aller et de me reposer"],
        correctAnswer: 0
    },
    { 
        question: "Tu as une dispute avec un membre de l'église, comment agis-tu ?", 
        options: ["Je prie pour obtenir la paix et essaie de réconcilier la situation", "Je laisse la dispute de côté et ne parle plus à la personne", "Je fais une pause et ne veux plus avoir affaire à cette personne"],
        correctAnswer: 0
    },
    { 
        question: "Tu rencontres une personne chrétienne, mais elle semble avoir des valeurs différentes des tiennes. Comment réagis-tu ?", 
        options: ["Je lui parle pour comprendre ses convictions et voir si nos valeurs sont compatibles", "Je suis un peu hésitant, mais je continue de la fréquenter pour voir où cela mène", "Je décide de ne plus la voir car nos valeurs ne correspondent pas"],
        correctAnswer: 0
    },
    { 
        question: "Un ami te conseille de sortir avec quelqu'un que tu n'apprécies pas vraiment. Que fais-tu ?", 
        options: ["Je suis ouvert aux conseils mais je prends ma décision après prière", "Je pense que c'est une bonne idée et j'accepte", "Je refuse car je ne ressens pas de paix intérieure à ce sujet"],
        correctAnswer: 0
    },
    { 
        question: "Comment utilises-tu ton temps libre ?", 
        options: ["Je me consacre à la prière, à l'étude de la Bible et à servir les autres", "Je passe du temps avec des amis et des loisirs", "Je me laisse souvent distraire et passe beaucoup de temps sur les réseaux sociaux"],
        correctAnswer: 0
    },
    { 
        question: "Tu as un rendez-vous galant avec une personne chrétienne. Quelle est ta priorité ?", 
        options: ["Je veux apprendre à connaître la personne dans le respect et la prière", "Je veux m'assurer que nous avons une connexion et beaucoup de choses en commun", "Je cherche surtout à voir si l'attirance physique est présente"],
        correctAnswer: 0
    },
    { 
        question: "Si tu fais face à une rupture amoureuse, comment réagis-tu ?", 
        options: ["Je prends le temps de guérir et de chercher à comprendre ce que Dieu veut pour ma vie", "Je me sens triste mais je tente de passer à autre chose rapidement", "Je me mets à douter de l'amour de Dieu pour moi"],
        correctAnswer: 0
    },
    { 
        question: "Que fais-tu pour fortifier ta vie spirituelle en période de célibat ?", 
        options: ["Je m'engage dans des études bibliques, des prières et des activités de service", "Je me concentre sur mes objectifs personnels et professionnels", "Je m'éloigne un peu de Dieu et me concentre sur ma situation émotionnelle"],
        correctAnswer: 0
    },
    { 
        question: "Tu te sens prêt(e) à partager ta vie avec quelqu'un, mais comment sais-tu que c'est le bon moment ?", 
        options: ["Je sens que Dieu me guide et me prépare pour une relation", "Je pense que c'est le bon moment, mais je n'en suis pas totalement sûr(e)", "Je me dis que ça ne dépend que de mes désirs et de mes choix"],
        correctAnswer: 0
    },
    { 
        question: "Tu as une opinion forte sur un sujet, mais ton partenaire chrétien a une opinion différente. Comment réagis-tu ?", 
        options: ["Je l'écoute, j'essaie de comprendre et nous prions ensemble pour avoir la même vision", "Je reste sur mes positions, mais j'essaie de ne pas le/la blesser", "Je laisse l'opinion de l'autre de côté et j'impose ma vision"],
        correctAnswer: 0
    },
    { 
        question: "Que fais-tu quand tu rencontres un défi dans ta relation avec Dieu pendant le célibat ?", 
        options: ["Je prie et je parle à des mentors spirituels pour trouver des solutions", "Je me concentre sur mes autres engagements et attends que ça passe", "Je commence à douter de ma foi et de mon chemin spirituel"],
        correctAnswer: 0
    },
    { 
        question: "Comment vois-tu le rôle des conseils des autres dans ta vie de célibataire ?", 
        options: ["Je crois qu'il est important de chercher des conseils auprès de personnes plus matures spirituellement", "Je préfère écouter mes propres instincts et ne pas dépendre des autres", "Je cherche les conseils des autres, mais je n'en tiens pas toujours compte"],
        correctAnswer: 0
    },
    { 
        question: "Tu rencontres une difficulté dans ton célibat, comment la surmontes-tu ?", 
        options: ["Je cherche du soutien spirituel, prie et je continue de faire confiance à Dieu", "J'essaie de me distraire pour oublier la difficulté", "Je me sens abandonné par Dieu et je ne sais pas comment avancer"],
        correctAnswer: 0
    },
    { 
        question: "Tu pries chaque jour, quel est ton état d'esprit ?", 
        options: ["Je cherche la volonté de Dieu et prie pour sa direction dans ma vie", "Je prie, mais parfois je suis distrait et je me sens pressé(e)", "Je prie seulement quand j'en ressens le besoin ou la pression"],
        correctAnswer: 0
    },
    { 
        question: "Quel est ton niveau de patience lorsque tu attends un partenaire ?", 
        options: ["Je sais que Dieu a un plan pour moi, et j'attends patiemment", "Je suis parfois frustré(e), mais je sais qu'il faut du temps", "Je me sens parfois pressé(e) et j'espère que Dieu me le montrera rapidement"],
        correctAnswer: 0
    },
    { 
        question: "Comment vois-tu les conseils de tes mentors spirituels ?", 
        options: ["Je les respecte et je cherche à les appliquer dans ma vie", "Je prends leur avis en compte, mais j'agis souvent selon mon propre jugement", "Je préfère prendre mes propres décisions sans me soucier des conseils"],
        correctAnswer: 0
    },
    { 
        question: "Tu te sens parfois seul(e) dans ta vie de célibataire. Que fais-tu ?", 
        options: ["Je me tourne vers Dieu pour trouver ma satisfaction et ma paix", "Je cherche à être occupé(e) pour ne pas penser à la solitude", "Je me sens triste et me demande pourquoi Dieu me laisse seul(e)"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu capable de placer les besoins de ton partenaire avant les tiens ?", 
        options: ["Oui, je suis prêt à faire passer l'autre avant moi", "Je pense que cela dépend des situations", "Non, je préfère que mes besoins soient toujours priorisés"],
        correctAnswer: 0
    },
    { 
        question: "Quand tu penses à l'amour, qu'est-ce qui te vient en premier ?", 
        options: ["L'amour inconditionnel et sacrificiel comme celui de Jésus", "L'attirance physique et les sentiments", "Le plaisir et l'amusement"],
        correctAnswer: 0
    },
    { 
        question: "Est-ce que tu es prêt à accepter les défauts de ton partenaire et à travailler ensemble sur eux ?", 
        options: ["Oui, je crois que l'amour est un processus d'acceptation et de croissance", "Je pense que c'est possible, mais je préfèrerais que mon partenaire change certaines choses", "Non, je recherche une personne sans défauts"],
        correctAnswer: 0
    },
    { 
        question: "Tu fais face à une dispute avec ton partenaire. Quelle est ta première réaction ?", 
        options: ["Je prie pour avoir de la sagesse et j'essaie de résoudre pacifiquement le conflit", "Je prends du recul et attends que l'autre vienne me parler", "Je cherche à gagner le conflit à tout prix"],
        correctAnswer: 0
    },
    { 
        question: "Comment te sens-tu à l'idée de t'engager dans une relation sérieuse ?", 
        options: ["Je suis confiant(e) et prêt(e) à m'engager dans un partenariat équilibré", "Je me sens un peu nerveux(se), mais je suis prêt(e) à essayer", "Je suis réticent(e) et j'ai peur de l'engagement"],
        correctAnswer: 0
    },
    { 
        question: "Penses-tu que le mariage est une mission que Dieu a pour chaque chrétien ?", 
        options: ["Oui, le mariage est un mandat divin et une belle vocation", "Non, je crois que le mariage n'est pas nécessaire pour tout le monde", "Je n'y ai jamais vraiment réfléchi"],
        correctAnswer: 0
    },
    { 
        question: "As-tu déjà prié pour savoir si Dieu veut que tu te maries ?", 
        options: ["Oui, je prie régulièrement pour que Dieu me guide dans cette décision", "Non, je laisse les choses suivre leur cours", "Je n'y ai jamais pensé de cette manière"],
        correctAnswer: 0
    },
    { 
        question: "Comment réagis-tu face à une situation où tu dois sacrifier tes désirs personnels pour le bien de ton partenaire ?", 
        options: ["Je suis prêt(e) à sacrifier mes désirs si cela est nécessaire pour le bien de notre relation", "Je le ferai, mais ce ne sera pas facile", "Je préfère que mes désirs soient pris en compte avant tout"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu capable de pardonner sincèrement en cas de trahison ou de blessure ?", 
        options: ["Oui, je crois que le pardon est essentiel pour une relation saine", "Je peux pardonner, mais cela prendra du temps", "Je trouve cela difficile et cela m'affecte profondément"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu prêt à construire une relation basée sur la prière et la foi ?", 
        options: ["Oui, je crois qu'une relation chrétienne doit être construite sur la prière et la foi", "Je préfère que la relation se développe naturellement sans trop d'interventions spirituelles", "Non, je préfère que la relation soit avant tout une question de compatibilité personnelle"],
        correctAnswer: 0
    },
    { 
        question: "Quand tu penses à un futur mariage, quelle est ta plus grande priorité ?", 
        options: ["Construire une relation fondée sur l'amour de Dieu et l'engagement mutuel", "Assurer la stabilité financière et un bon mode de vie", "J'espère que ce sera une relation où nous nous amusons beaucoup"],
        correctAnswer: 0
    },
    { 
        question: "Penses-tu qu'une relation saine implique des moments de séparation et d'indépendance ?", 
        options: ["Oui, chaque partenaire doit avoir son espace et son temps avec Dieu", "Non, nous devons être constamment ensemble", "Cela dépend des situations"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu capable de supporter les épreuves de la vie en couple en restant fidèle ?", 
        options: ["Oui, je crois que dans les moments difficiles, l'engagement et la foi nous soutiendront", "Je pense que la fidélité est importante, mais je suis incertain(e) de la tenir dans les moments difficiles", "Je ne sais pas si je pourrais rester fidèle dans une situation difficile"],
        correctAnswer: 0
    },
    { 
        question: "Quel rôle la prière joue-t-elle dans ton quotidien ?", 
        options: ["La prière est essentielle et fait partie intégrante de ma journée", "Je prie parfois, mais ce n'est pas une priorité constante", "Je prie rarement, sauf en cas de besoin urgent"],
        correctAnswer: 0
    },
    { 
        question: "Comment réagis-tu quand quelqu'un te critique ?", 
        options: ["Je prends le temps d'écouter et de réfléchir à la critique", "Je me défends immédiatement", "Je me sens blessé(e) et je laisse la critique me hanter"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu capable de respecter ton partenaire même en cas de désaccord ?", 
        options: ["Oui, je crois qu'il est important de respecter les différences et de communiquer avec amour", "Cela peut être difficile, mais je fais des efforts", "Je préfère que mon partenaire soit d'accord avec moi à tout moment"],
        correctAnswer: 0
    },
    { 
        question: "Que fais-tu lorsque tu es tenté(e) de t'éloigner de Dieu dans une relation ?", 
        options: ["Je me réfugie dans la prière et je demande à Dieu de me ramener sur le bon chemin", "Je laisse la tentation m'éloigner, mais je reviens à Dieu plus tard", "Je suis submergé(e) par mes sentiments et je m'éloigne temporairement de Dieu"],
        correctAnswer: 0
    },
    { 
        question: "As-tu déjà réfléchi à ce que Dieu attend de toi dans une relation amoureuse ?", 
        options: ["Oui, je cherche toujours à comprendre la volonté de Dieu pour moi dans mes relations", "Non, je n'y ai jamais vraiment pensé", "Je pense que Dieu ne se préoccupe pas vraiment de mes relations personnelles"],
        correctAnswer: 0
    },
    { 
        question: "Es-tu capable de rester célibataire si Dieu te demande d'attendre ?", 
        options: ["Oui, je crois que Dieu a un plan parfait et je suis prêt(e) à attendre son timing", "Cela pourrait être difficile, mais je sais que c'est ce que Dieu veut", "Je suis pressé(e) et je ne suis pas sûr(e) de pouvoir attendre"],
        correctAnswer: 0
    },
    { 
        question: "Comment vois-tu le rôle de l'amour dans une relation ?", 
        options: ["L'amour est un choix quotidien et un acte de service", "L'amour est avant tout une émotion et un sentiment fort", "L'amour est quelque chose que l'on ressent quand tout va bien"],
        correctAnswer: 0
    },
    { 
        question: "Comment gérais-tu tes relations passées ?", 
        options: ["Je me suis efforcé(e) de les baser sur des principes spirituels et d'amour chrétien", "J'ai parfois mis mes désirs personnels avant Dieu", "Je n'ai pas toujours fait les bons choix dans mes relations passées"],
        correctAnswer: 0
    },
    { 
        question: "Que cherches-tu chez un partenaire ?", 
        options: ["Une personne qui partage mes valeurs chrétiennes et mon désir de servir Dieu", "Quelqu'un avec qui j'ai une bonne connexion émotionnelle et physique", "Quelqu'un qui peut me rendre heureux(se) et satisfaire mes besoins"],
        correctAnswer: 0
    },
    { 
        question: "Quand il s'agit de planifier un avenir à deux, quelle est ta priorité ?", 
        options: ["Construire une famille chrétienne fondée sur l'amour et la foi", "Vivre une vie confortable et satisfaisante", "Avoir beaucoup d'aventures et de moments amusants ensemble"],
        correctAnswer: 0
    }
];

// Fonction pour mélanger un tableau (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mélanger les questions
shuffleArray(questions);

let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let answeredCount = 0;
let wrongCount = 0;

// Sélection des éléments HTML
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const stopButton = document.getElementById("stop-button");
const resultEl = document.getElementById("result");
const scoreCountEl = document.getElementById("score-count");
const lifeCountEl = document.getElementById("life-count");
const answeredCountEl = document.getElementById("answered-count");
const wrongCountEl = document.getElementById("wrong-count");
const homeButton = document.getElementById("home-button");

// Fonction pour afficher une question
function showQuestion() {
    if (currentQuestionIndex >= questions.length || lives <= 0) {
        endGame();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    // Mélanger les options
    let options = [...currentQuestion.options];
    shuffleArray(options);

    // Mise à jour de la bonne réponse après mélange
    let newCorrectIndex = options.indexOf(currentQuestion.options[currentQuestion.correctAnswer]);
    currentQuestion.correctAnswer = newCorrectIndex;

    optionsEl.innerHTML = "";
    options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => checkAnswer(index);
        optionsEl.appendChild(li);
    });

    resultEl.textContent = ""; // Nettoyage du résultat
}

// Vérifier la réponse
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correctAnswer) {
        score += 5;
    } else {
        lives--;
        wrongCount++;
        resultEl.textContent = `❌ Mauvaise réponse ! La bonne réponse était : ${questions[currentQuestionIndex].options[currentQuestion.correctAnswer]}`;
    }

    answeredCount++;

    // Mise à jour des affichages
    scoreCountEl.textContent = `${score}`;
    lifeCountEl.textContent = lives;
    answeredCountEl.textContent = answeredCount;
    wrongCountEl.textContent = wrongCount;

    currentQuestionIndex++;
    
    if (lives > 0) {
        setTimeout(showQuestion, 1000);
    } else {
        endGame();
    }
}

// Fonction de fin de jeu
function endGame() {
    questionEl.textContent = ""; // Effacer la dernière question
    optionsEl.innerHTML = "";
    nextButton.style.display = "none";
    stopButton.style.display = "none";
    homeButton.style.display = "block";

    let totalPossibleScore = answeredCount * 5; // Score max basé sur questions répondues
    let percentage = totalPossibleScore > 0 ? Math.round((score / totalPossibleScore) * 100) : 0;
let appreciationMessage = "";
if (percentage === 100) {
    appreciationMessage = '<span class="title">Félicitations,🎉 Futur(e) époux(se) sage:</span> <span class="advice">Tu es prêt(e) à affronter les défis du mariage avec sagesse et foi. Ton esprit est tourné vers ce qui est vraiment important : Dieu et ton partenaire. Continue sur cette voie, tu es sur le bon chemin.</span>';
} else if (percentage >= 80) {
    appreciationMessage = '<span class="title">👏Félicitations : Champion(ne) du célibat chrétien:</span> <span class="advice">Bravo ! Tu as un excellent équilibre spirituel et émotionnel. Tu sais que la patience et la foi en Dieu sont essentielles. Garde ta sagesse et ton cœur prêt à accueillir une relation fondée sur l\'amour et la prière.</span>';
} else if (percentage >= 75) {
    appreciationMessage = '<span class="title">👏Félicitations Candidat(e) prometteur(se) :</span> <span class="advice">Tu es bien préparé(e) pour une future relation chrétienne. Il y a encore quelques petites choses à peaufiner, mais tu es déjà sur une excellente voie. Garde confiance et continue de développer ta spiritualité et ta patience.</span>';
} else if (percentage >= 50) {
    appreciationMessage = '<span class="title">Félicitations:🥳 Célibataire épanoui(e):</span> <span class="advice">Tu es un(e) célibataire solide, avec un excellent équilibre personnel. Tu sais que le mariage ne doit pas être une fin en soi, mais une extension de ta relation avec Dieu. Continue de grandir dans ta foi et d’être le meilleur de toi-même.</span>';
} else if (percentage >= 30) {
    appreciationMessage = '<span class="title">😒 Apprenti(e) du mariage:</span> <span class="advice">Quelques efforts à faire ! Tu as encore des points à améliorer. Prends le temps de bien te préparer, car le mariage chrétien nécessite une fondation solide.</span>';
} else if (percentage >= 20) {
    appreciationMessage = '<span class="title">😞 😜 Tu as peut-être oublié de demander un peu d\'aide à Jésus avant de jouer ?</span> <span class="advice">Allez, continue à explorer, tu finiras par briller !</span>';
} else {
    appreciationMessage = '<span class="title">👀🚨 Mission mariée encore à revoir...:</span> <span class="advice">Oh là là, il semble que tu sois dans la salle d\'attente pour la sagesse... mais ne t’inquiète pas, la patience est aussi une vertu !</span>';
}
// Insérer l'appréciation dans l'élément HTML correspondant
document.getElementById("appreciation").innerHTML = appreciationMessage;
    
    resultEl.innerHTML = `
        📋 Résumé : ${score}/${totalPossibleScore} points (${percentage}%)<br>
        ${appr}
    `;
}

// Arrêter le jeu
stopButton.onclick = endGame;

// Retour à l'accueil
homeButton.onclick = function() {
    window.location.href = "celibataire.html";
};

// Afficher la première question
showQuestion();