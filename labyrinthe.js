// game.js
document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
    window.location.href = "labyrinthe.html";
}

function choosePath(path) {
    if (path === "pray") {
        // Progression si le joueur choisit de prier
        alert("Vous avez choisi de prier. Vous avancez dans le labyrinthe.");
        window.location.href = "labyrinthe2.html"; // Prochaine étape
    } else if (path === "doubt") {
        // Progression si le joueur doute
        alert("Vous avez choisi de douter. Vous êtes bloqué, mais vous pouvez prier pour avancer.");
        // Peut-être montrer un message de consolation et proposer une nouvelle chance
    }
}