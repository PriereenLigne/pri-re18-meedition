function toggleSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = (el.style.display === "none" || !el.style.display) ? "block" : "none";
  }
}

function toggleSubSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = (el.style.display === "none" || !el.style.display) ? "block" : "none";
  }
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

document.addEventListener("DOMContentLoaded", function () {
  const versets = document.querySelectorAll("p, div, span"); // Choisis les balises où les versets apparaissent

  versets.forEach(p => {
    p.innerHTML = p.innerHTML.replace(/([1-3]?\s?[A-Za-zéèêîïûôÉ]+)\s(\d+):(\d+)/g, function(match, livre, chapitre, verset) {
      const baseUrl = "https://www.biblegateway.com/passage/?search=";
      const version = "&version=LSG"; // Tu peux changer la version ici si tu veux
      const lien = `${baseUrl}${encodeURIComponent(livre)}+${chapitre}%3A${verset}${version}`;
      return `<a href="${lien}" target="_blank">${match}</a>`;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const audios = document.querySelectorAll("audio");

  audios.forEach((audio) => {
    audio.dataset.src = audio.src;
    audio.removeAttribute("src");
    audio.load();

    const container = document.createElement("div");
    container.classList.add("audio-container");

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Activer cet audio";

    let isActivated = false;

    toggleBtn.addEventListener("click", function () {
      if (!isActivated) {
        audio.src = audio.dataset.src;
        audio.load();
        toggleBtn.textContent = "Cacher cet audio";
        isActivated = true;
      } else {
        audio.removeAttribute("src");
        audio.load();
        toggleBtn.textContent = "Activer cet audio";
        isActivated = false;
      }
    });

    audio.parentNode.insertBefore(container, audio);
    container.appendChild(toggleBtn);
    container.appendChild(audio);
  });
});

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault(); // <-- Ajoute cette ligne
  if (!isActivated) {
    audio.src = audio.dataset.src;
    audio.load();
    toggleBtn.textContent = "Cacher cet audio";
    isActivated = true;
  } else {
    audio.removeAttribute("src");
    audio.load();
    toggleBtn.textContent = "Activer cet audio";
    isActivated = false;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const audios = document.querySelectorAll("audio");

  audios.forEach(audio => {
    audio.addEventListener("play", () => {
      // On retire la classe active de tous
      audios.forEach(a => a.parentElement.classList.remove("active-audio"));
      // Et on l’ajoute au parent de l’audio en cours
      audio.parentElement.classList.add("active-audio");
    });
  });
});