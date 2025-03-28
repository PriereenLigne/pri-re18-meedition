document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Formatage du message
    let whatsappMessage = `Nom: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Ouvrir WhatsApp avec le message prérempli
    let whatsappURL = `https://wa.me/2290164013074?text=${whatsappMessage}`;

    // Rediriger vers WhatsApp
    window.open(whatsappURL, "_blank");
});

function rechercherPriere() {
    let input = document.getElementById("search-bar").value.toLowerCase().trim(); // Texte saisi
    let prayerBoxes = document.querySelectorAll(".priere-box"); // Sélectionner toutes les boîtes de prière
    let searchWords = input.split(/\s+/); // Découper la recherche en mots-clés
    let resultCount = 0; // Initialiser le compteur de résultats

    prayerBoxes.forEach(box => {
        let linkText = box.querySelector("a").textContent.toLowerCase(); // Texte du lien
        let boxId = box.querySelector("a").getAttribute("href").substring(1); // Récupérer l'ID de la boîte
        let prayerSection = document.getElementById(boxId); // Sélectionner la section correspondante

        let sectionText = prayerSection ? prayerSection.textContent.toLowerCase() : ""; // Tout le texte de la prière

        let match = searchWords.every(word => 
            linkText.includes(word) || sectionText.includes(word) // Vérifier si chaque mot est dans le lien ou le texte de la prière
        );

        if (match) {
            box.style.display = "block"; // Afficher la boîte si une correspondance est trouvée
            resultCount++; // Incrémenter le compteur

            // Ajouter un événement pour souligner les mots-clés lorsqu'on clique sur une prière trouvée
            box.querySelector("a").addEventListener("click", function () {
                surlignerMotsCles(prayerSection, searchWords);
            });
        } else {
            box.style.display = "none"; // Masquer sinon
        }
    });

    // Vérifier si le message existe déjà, sinon le créer
    let resultMessage = document.getElementById("result-count");
    if (!resultMessage) {
        resultMessage = document.createElement("p");
        resultMessage.id = "result-count";
        resultMessage.style.fontWeight = "bold"; // Rendre le texte en gras
        document.getElementById("search-section").appendChild(resultMessage); // Ajouter sous le champ de recherche
    }

    // Afficher le bon message
    resultMessage.textContent = resultCount > 0 ? `${resultCount} résultat(s) trouvé(s).` : "Aucune prière trouvée.";
}

// Fonction pour surligner les mots-clés dans le texte de la prière
function surlignerMotsCles(prayerSection, searchWords) {
    if (!prayerSection) return;

    let originalText = prayerSection.innerHTML; // Récupérer le texte d'origine

    // Réinitialiser le texte en supprimant les anciens surlignages
    let cleanText = originalText.replace(/<mark>(.*?)<\/mark>/g, "$1");

    // Appliquer le surlignage
    searchWords.forEach(word => {
        if (word.trim() !== "") {
            let regex = new RegExp(`(${word})`, "gi"); // Expression régulière insensible à la casse
            cleanText = cleanText.replace(regex, `<mark>$1</mark>`); // Ajouter <mark> pour surligner
        }
    });

    prayerSection.innerHTML = cleanText;
}
