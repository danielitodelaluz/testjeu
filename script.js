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
        name: "Le Menteur",
        rule: "Ce joueur doit mentir au moins une fois par tour. Les autres doivent deviner quand il ment. Si personne ne devine, il choisit qui boit. S’il ne ment pas une fois par tour, il boit."
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
    "Décrit ton meilleur orgasme en détail.",
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
    "Quelle est la chose la plus embarrassante que quelqu’un t’aie demandé de faire au lit ?",
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
    "As-tu déjà fait quelque chose de sexuel dans le lieu de travail ?",
    "As-tu déjà participé à des jeux de rôle sexuels ? Si oui, quels étaient les personnages ?",
    "Qui pourrait avoir eu le plus de partenaires sexuels dans cette pièce ?",
    "Qui pourrait avoir le fantasme le plus bizarre ?",
    "Qui pourrait avoir déjà trompé son/sa partenaire ?",
    "Qui pourrait être le plus aventureux sexuellement ?",
    "Tu préfères coucher avec ta mère dans le corps de ta meuf ou ta meuf dans le corps de ta mère ?"
];

document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    const errorElement = document.getElementById('error');
    const validationElement = document.getElementById('validation');
    const playerNamesContainer = document.getElementById('playerNamesContainer');

    if (numPlayers < 2 || numPlayers > 10) {
        errorElement.textContent = "Le nombre de joueurs doit être compris entre 2 et 10.";
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
        submitButton.textContent = 'Soumettre les noms';
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

        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<strong>${currentPlayer.player}</strong>, ${currentQuestion}`;
        questionContainer.appendChild(questionElement);

        currentPlayerIndex = (currentPlayerIndex + 1) % assignedRoles.length;
    }

    // Ajouter un bouton pour passer à la question suivante
    const nextButton = document.createElement('button');
    nextButton.type = 'button';
    nextButton.textContent = 'Question suivante';
    nextButton.addEventListener('click', nextTurn);
    playerNamesContainer.insertBefore(nextButton, questionContainer);

    // Démarrer le jeu en posant la première question
    nextTurn();
}