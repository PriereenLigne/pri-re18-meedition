function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}

function toggleSubSection(subSectionId) {
    var subSection = document.getElementById(subSectionId);
    if (subSection.classList.contains('hidden')) {
        subSection.classList.remove('hidden');
    } else {
        subSection.classList.add('hidden');
    }
}
// Accéder à l'élément audio et au sélecteur de vitesse
const audioPlayer = document.getElementById("audio-player");
const speedControl = document.getElementById("speed-control");

// Ajouter un événement pour changer la vitesse lorsque l'utilisateur sélectionne une option
speedControl.addEventListener("change", function() {
    audioPlayer.playbackRate = parseFloat(speedControl.value);
});