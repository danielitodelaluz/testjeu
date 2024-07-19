const roles = [
    {
        name: "Le Roi des Gorgées",
        rule: "Ce joueur peut désigner une autre personne pour boire à tout moment. Il doit désigner quelqu’un au moins une fois par tour. S’il oublie, il boit."
    },
    {
        name: "Le Protecteur",
        rule: "Ce joueur peut protéger quelqu’un d’autre d’une gorgée. Si quelqu’un est désigné pour boire, il peut intervenir pour l’en empêcher. Il doit protéger au moins une fois par tour. S’il n’utilise pas sa protection, il boit."
    },
    {
        name: "Le Devin",
        rule: "Ce joueur doit deviner les réponses des autres avant qu’ils ne répondent. S’il devine juste, la personne devinée boit. Il doit tenter de deviner au moins une fois par tour. S’il ne le fait pas, il boit."
    },
    {
        name: "Cupidon",
        rule: "Lie 2 joueurs par les liens sacrés de l'alcool"
    },
    {
        name: "Le Doubleur",
        rule: "Ce joueur peut doubler la quantité de gorgées pour une personne. Il doit utiliser cette capacité au moins une fois par tour. S’il ne le fait pas, il boit."
    },
    {
        name: "Le Récupérateur",
        rule: "Ce joueur peut redistribuer ses propres gorgées à d’autres joueurs. Il doit redistribuer au moins une gorgée par tour. S’il ne le fait pas, il boit."
    },
    {
        name: "Le Juge",
        rule: "Ce joueur arbitre les disputes sur les règles ou les réponses. Il doit arbitrer au moins une fois par tour. S’il ne le fait pas, il boit."
    }
];

const questions = [
    "As-tu déjà envoyé des sextos ? À qui ?",
    "Cite 3 fluides qui peuvent hydrater le visage.",
    "Quelle est la partie du corps la plus sexy de ton voisin de gauche ?",
    "Ton fantasme le plus inavouable ?",
    "Décris ton meilleur orgasme en détail.",
    "Quelle est la chose la plus étrange que tu aies utilisée comme sex toy ?",
    "As-tu déjà été surpris en plein acte ? Raconte.",
    "Quelle est ta position sexuelle préférée ?",
    "Quel est ton plus grand complexe physique au lit ?",
    "Quelle est la chose la plus étrange qui t’excite ?",
    "Quel est ton plus grand talent au lit ?",
    "Quelle est la chose la plus embarrassante que tu aies dite pendant l’acte ?",
    "Quel est le rôle le plus étrange que tu aies joué pendant l’acte ?",
    "Quelle est la chose la plus étrange que tu aies faite pour satisfaire un partenaire ?",
    "Quel est le fantasme le plus étrange que tu aies réalisé ?",
    "Quelle est la chose la plus embarrassante que quelqu’un t’ait demandé de faire au lit ?",
    "Quel est le secret le plus inavouable concernant ta vie sexuelle ?",
    "Quel est le nombre de partenaires sexuels que tu as eus ?",
    "Quelle est la chose la plus extrême que tu aies faite en matière de BDSM ?",
    "Touche et devine la taille de la personne de gauche (la poitrine ou les fesses, hein).",
    "Qui pourrait avoir un OnlyFans ?",
    "Qui pourrait avoir participé à un film de cul ?",
    "Qui pourrait avoir un penchant pour le BDSM ?",
    "Qui pourrait déjà avoir eu une attirance pour le partenaire d’un/e ami/e ?",
    "As-tu déjà eu des relations sexuelles avec un/e ex de l’un de tes amis ?",
    "As-tu déjà eu des relations sexuelles sous l’influence de drogues ou d’alcool ?",
    "As-tu déjà fait quelque chose de sexuel sur le lieu de travail ?",
    "As-tu déjà participé à des jeux de rôle sexuels ? Si oui, quels étaient les personnages ?",
    "Qui pourrait avoir eu le plus de partenaires sexuels dans cette pièce ?",
    "Qui pourrait avoir le fantasme le plus bizarre ?",
    "Qui pourrait avoir déjà trompé son/sa partenaire ?",
    "Qui pourrait être le plus aventureux sexuellement ?",
    "Tu préfères coucher avec ta mère dans le corps de ta meuf ou ta meuf dans le corps de ta mère ?",
    "Yoann, sors de la pièce",
    "Le juge te donne un truc à faire avant de boire, si tu oublies, tu bois double.",
    "Vote : pour ou contre embrasser après avoir sucé ?",
    "Vote : pour ou contre les RP sexuels",
    "Vote : pour les mecs, seins ou fesses ; pour les meufs, dos ou abdos ?",
    "Prends 5 gorgées (cheh)",
    "Qui serait le plus susceptible d'avoir des cheveux bleus ?",
    "Qui serait le plus susceptible d'être gay ?",
    "Quelle est la taille idéale pour un pénis ?",
    "Quelle est la taille de bonnet idéale ?",
    "Sors la blague la plus raciste possible (si le public juge que ce n'est pas assez raciste, tu prends 5 gorgées)",
    "Vote : avoir le sida ou avoir le cancer",
    "Quel est le plus gros défaut de la personne à ta gauche ?",
    "Qu'est-ce qui t'énerve chez la personne à ta droite ?",
    "Quand as-tu joui pour la dernière fois ?",
    "Quelle est ta plus grande peur liée à ta vie sexuelle ?",
    "Quel est le rêve érotique le plus bizarre que tu aies eu ?",
    "Quelle est ta plus grande déception sexuelle ?",
    "Laisse le jouer à ta droite te poser une question",
    "Ton voisin de droite et toi meme devez lancer un cri de guerre. Le juge détermine le gagnant",
    "Revèle la taille de ton sexe/bonnet",
    "Révèle le nom de ton pire coup",
    "Quelle est la personne la plus ennuyante ici",
    "Quel est le nom de la personne la plus hypocrite que tu connaisses ?",
    "Quel(le) ami(e) t’a déjà trahi(e) et comment ?",
    "Qui est la personne la plus immature ici?",
    "Raconte ta plus grosse honte",
    "Quel est le secret le plus honteux que tu gardes sur un(e) ami(e) ici présent(e) ?",
    "Qui, parmi tes connaissances, a la plus mauvaise influence sur toi ?",
    "Qui est la personne la plus superficielle ici ?",
    "Qui ici est le plus susceptible de te trahir pour des raisons égoïstes ?", 
    "Choisis une personne de la pièce et dis nous quels sont les mots que tu utilises pour la décrire à des amis qui ne la connaissent pas ",
    "Quelle différence entre toi et un joueur de la pièce apprécies tu ?",
    "Si tu devais décrire la personne à ta gauche en trois mots que dirais-tu ?",
    "C’était quoi ta première impression de la personne à ta droite et est-ce qu’elle a changé ?",
    "À quel red flag fais tu le plus attention avant de te mettre avec qql ?",
    "Si on te donnait accès à tout ceux que les gens pensent de toi, voudrais tu le savoir ? Pourquoi ou pourquoi pas ?",
    "Qui dans ta vie ne te parlerait plus si tu arrêter de leur parler en premier ?",
    "As tu un ami que tu regrettes d’avoir perdu de vue ? ",
    "Qui sont les cinq personnes dont tu te sens le plus proche ?",
    "Qui aimerais tu ne jamais avoir rencontré ?",
    "A quel point es tu éloigné de la personne que tu pensais être aujourd’hui ?",
    "Y’a t’il un sentiment d’une relation passée qui te manque ? (amicale/amour)",
];

document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    const errorElement = document.getElementById('error');
    const validationElement = document.getElementById('validation');
    const playerNamesContainer = document.getElementById('playerNamesContainer');

    if (numPlayers < 2 || numPlayers > 7) {
        errorElement.textContent = "Le nombre de joueurs doit être compris entre 2 et 7.";
        validationElement.textContent = "";
        playerNamesContainer.innerHTML = "";
    } else {
        errorElement.textContent = "";
        validationElement.textContent = `Nombre de joueurs validé : ${numPlayers}`;
        playerNamesContainer.innerHTML = ""; // Réinitialiser le conteneur

        // Générer les champs de saisie des noms des joueurs
        for (let i = 1; i <= numPlayers; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `player${i}`;
            input.placeholder = `Nom du joueur ${i}`;
            input.required = true;
            playerNamesContainer.appendChild(input);
        }

        // Ajouter un bouton pour soumettre les noms des joueurs
        const submitButton = document.createElement('button');
        submitButton.type = 'button';
        submitButton.textContent = 'Valider les noms';
        submitButton.addEventListener('click', handlePlayerNamesSubmit);
        playerNamesContainer.appendChild(submitButton);

        console.log('Player fields generated'); // Message de débogage
    }
});

function handlePlayerNamesSubmit() {
    const playerNamesContainer = document.getElementById('playerNamesContainer');
    const inputs = playerNamesContainer.querySelectorAll('input');
    const playerNames = [];
    
    inputs.forEach(input => {
        playerNames.push(input.value);
    });

    // Attribuer les rôles aux joueurs
    const assignedRoles = assignRoles(playerNames);

    // Afficher les rôles et les règles
    displayAssignedRoles(assignedRoles);

    // Ajouter le bouton Commencer
    const startButton = document.createElement('button');
    startButton.type = 'button';
    startButton.textContent = 'Commencer';
    startButton.addEventListener('click', () => startGame(assignedRoles));
    playerNamesContainer.appendChild(startButton);

    // Ajouter le conteneur pour les questions
    const questionContainer = document.createElement('div');
    questionContainer.id = 'questionContainer';
    playerNamesContainer.appendChild(questionContainer);
}

function assignRoles(playerNames) {
    const shuffledRoles = roles.sort(() => 0.5 - Math.random());
    const assignedRoles = playerNames.map((name, index) => {
        return {
            player: name,
            role: shuffledRoles[index % roles.length].name,
            rule: shuffledRoles[index % roles.length].rule
        };
    });
    return assignedRoles;
}

function displayAssignedRoles(assignedRoles) {
    const playerNamesContainer = document.getElementById('playerNamesContainer');
    playerNamesContainer.innerHTML = ''; // Réinitialiser le conteneur

    assignedRoles.forEach(assignment => {
        const playerRoleElement = document.createElement('div');
        playerRoleElement.className = 'player-role';
        playerRoleElement.innerHTML = `<strong>${assignment.player}</strong> : ${assignment.role}<br><em>${assignment.rule}</em>`;
        playerNamesContainer.appendChild(playerRoleElement);
    });
}

function startGame(assignedRoles) {
    const playerNamesContainer = document.getElementById('playerNamesContainer');
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = ''; // Réinitialiser le conteneur
    const remainingQuestions = [...questions];
    let currentPlayerIndex = 0;

    function nextTurn() {
        if (remainingQuestions.length === 0) {
            alert('Toutes les questions ont été posées. Le jeu est terminé.');
            return;
        }

        const currentQuestionIndex = Math.floor(Math.random() * remainingQuestions.length);
        const currentQuestion = remainingQuestions.splice(currentQuestionIndex, 1)[0];
        const currentPlayer = assignedRoles[currentPlayerIndex];
        const sips = Math.floor(Math.random() * 7) + 2; // Nombre de gorgées aléatoire entre 2 et 8

        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<strong>${currentPlayer.player}</strong>, ${currentQuestion} <br><em>Nombre de gorgées : ${sips}</em>`;
        questionContainer.appendChild(questionElement);

        currentPlayerIndex = (currentPlayerIndex + 1) % assignedRoles.length;
    }

    // Ajouter un bouton pour passer à la question suivante
    const nextButton = document.createElement('button');
    nextButton.type = 'button';
    nextButton.className = 'fixed-button';
    nextButton.textContent = 'Question suivante';
    nextButton.addEventListener('click', nextTurn);
    document.body.appendChild(nextButton);

    // Démarrer le jeu en posant la première question
    nextTurn();
}
