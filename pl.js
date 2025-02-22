// Calcul du compte à rebours
function startCountdown() {
    // Date de début de l'événement
    const eventStartDate = new Date("February 26, 2025 00:00:00").getTime();

    // Date de fin de l'événement
    const eventEndDate = new Date("February 28, 2025 23:59:59").getTime();

    // Vérifier si l'événement a déjà commencé ou non
    const now = new Date().getTime();
    if (now < eventStartDate) {
        const countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = "<strong>L'événement commencera le 26 février 2025 à 00:00.</strong>";
        return;
    }

    // Mettre à jour le compte à rebours toutes les secondes
    const countdownInterval = setInterval(function() {
        // Calcul de la différence entre la date actuelle et la date de fin
        const distance = eventEndDate - now;

        // Calcul des jours, heures, minutes et secondes
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Afficher le compte à rebours
        const countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = `<strong>Temps restant :</strong> ${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;

        // Si l'événement est terminé
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "L'événement est terminé !";
        }
    }, 1000);
}

// Démarrer le compte à rebours dès le chargement de la page
document.addEventListener('DOMContentLoaded', startCountdown);
document.addEventListener("DOMContentLoaded", function() {
    // Liste des versets et méditations pour chaque jour
    const meditations = [
        {
            verset: "Josué 1:9 - 'Ne t’ai-je pas donné cet ordre : Fortifie-toi et prends courage ?'",
            meditation: "Dieu nous appelle à marcher avec assurance et confiance en ses promesses."
        },
        {
            verset: "Ésaïe 41:10 - 'Ne crains rien, car je suis avec toi; ne sois pas effrayé, car je suis ton Dieu.'",
            meditation: "Nous ne devons pas craindre, car Dieu nous soutient et nous guide."
        },
        {
            verset: "Philippiens 4:13 - 'Je puis tout par celui qui me fortifie.'",
            meditation: "Aucune épreuve n'est trop grande, car Christ nous donne la force de tout surmonter."
        }
    ];

    // Obtenir la date du jour
    const date = new Date();
    const index = date.getDate() % meditations.length; // Alterner selon les jours

    // Appliquer le verset et la méditation du jour
    document.getElementById("verset-text").innerText = meditations[index].verset;
    document.getElementById("meditation-text").innerText = meditations[index].meditation;
});