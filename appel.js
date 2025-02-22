document.getElementById("join-group").addEventListener("click", function() {
    window.open("https://chat.whatsapp.com/JnEG13M6Zpk2LB85yLtRE8", "_blank");
});

document.getElementById("private-message").addEventListener("click", function() {
    let phoneNumber = "2290164013074"; // Remplace par ton numéro WhatsApp
    let message = encodeURIComponent("*Bonjour, je viens du site web et je souhaite en savoir plus !*");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
});