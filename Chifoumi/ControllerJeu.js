function AffichageJoueur() {
    //recupération des joueurs dans l'url
    var url = new URL(window.location.href)
    var j1 = url.searchParams.get("j1")
    //affichage des joueurs
    document.getElementById("AffNomJoueur").innerHTML = 'Joueur 1 : ' + j1
}

function rouletteChoix() {
    const ListeChoix = ["pierre", "feuille", "ciseaux"]
    const choix = Math.floor(Math.random() * 3)
    return ListeChoix[choix]
}
let ScoreJoueur = 0
let ScoreOrdi = 0

function playRound(playerChoice) {
    const computerChoice = rouletteChoix();
    const results = {
        "pierre": { "pierre": "égalité", "feuille": "perdu", "ciseaux": "gagné" },
        "feuille": { "pierre": "gagné", "feuille": "égalité", "ciseaux": "perdu" },
        "ciseaux": { "pierre": "perdu", "feuille": "gagné", "ciseaux": "égalité" },
    };
    const result = results[playerChoice][computerChoice];

    // Update the DOM only once
    document.getElementById("affichagechoix").textContent = `Tu as choisi : ${playerChoice} et l'ordinateur a choisi : ${computerChoice}`;
    document.getElementById("resultat").textContent = result;

    if (result === "gagné") {
        ScoreJoueur++;
    } else if (result === "perdu") {
        ScoreOrdi++;
    }

    document.getElementById("AffScore").textContent = `Tu as : ${ScoreJoueur} et l'ordinateur a : ${ScoreOrdi}`;
}

function ChangerJoueur() {
    var url = new URL(window.location.href)
    window.location.href = "index.html"
}


