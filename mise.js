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
    let input = document.getElementById("search-bar").value.toLowerCase().trim();  
    let prayerBoxes = document.querySelectorAll(".priere-box");  
    let searchWords = input.split(/\s+/);  
    let resultCount = 0;  
    let firstResult = null;  

    prayerBoxes.forEach(box => {  
        let linkText = box.querySelector("a").textContent.toLowerCase();  
        let boxId = box.querySelector("a").getAttribute("href").substring(1);  
        let prayerSection = document.getElementById(boxId);  
        let sectionText = prayerSection ? prayerSection.textContent.toLowerCase() : "";  

        let match = searchWords.every(word =>   
            linkText.includes(word) || sectionText.includes(word)  
        );  

        if (match) {  
            box.style.display = "block";  
            resultCount++;  
            if (!firstResult) firstResult = box;  

            box.querySelector("a").addEventListener("click", function () {  
                surlignerMotsCles(prayerSection, searchWords);  
            });  
        } else {  
            box.style.display = "none";  
        }  
    });  

    let resultMessage = document.getElementById("result-count");  
    if (!resultMessage) {  
        resultMessage = document.createElement("p");  
        resultMessage.id = "result-count";  
        resultMessage.style.fontWeight = "bold";  
        resultMessage.style.cursor = "pointer";  
        resultMessage.style.color = "blue";  
        resultMessage.style.textDecoration = "underline";  
        document.getElementById("search-section").appendChild(resultMessage);  
    }  

    if (resultCount > 0) {  
        resultMessage.textContent = `${resultCount} résultat(s) trouvé(s). Cliquez ici pour y aller.`;  
        resultMessage.onclick = function () {  
            if (firstResult) {  
                firstResult.scrollIntoView({ behavior: "smooth", block: "start" });  
            }  
        };  

        // Ajout du scroll automatique après une petite pause  
        setTimeout(() => {  
            if (firstResult) {  
                firstResult.scrollIntoView({ behavior: "smooth", block: "start" });  
            }  
        }, 500); // Temps d'attente avant le scroll automatique  

    } else {  
        resultMessage.textContent = "Aucune prière trouvée.";  
        resultMessage.onclick = null;  
    }  
}  

function surlignerMotsCles(prayerSection, searchWords) {  
    if (!prayerSection) return;  

    let originalText = prayerSection.innerHTML;  
    let cleanText = originalText.replace(/<mark>(.*?)<\/mark>/g, "$1");  

    searchWords.forEach(word => {  
        if (word.trim() !== "") {  
            let regex = new RegExp(`(${word})`, "gi");  
            cleanText = cleanText.replace(regex, `<mark>$1</mark>`);  
        }  
    });  

    prayerSection.innerHTML = cleanText;  
}

document.addEventListener('DOMContentLoaded', () => {
  const audios = document.querySelectorAll('audio');

  audios.forEach(audio => {
    audio.addEventListener('play', () => {
      audio.classList.add('playing');
    });

    audio.addEventListener('pause', () => {
      audio.classList.remove('playing');
    });

    audio.addEventListener('ended', () => {
      audio.classList.remove('playing');
    });
  });
});