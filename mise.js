/* Bibliothèque de requêtes : thèmes dépliables et recherche instantanée */
(function () {
  'use strict';

  var sections = Array.prototype.slice.call(document.querySelectorAll('.req-section'));
  var chips = Array.prototype.slice.call(document.querySelectorAll('.theme-chip'));
  var input = document.getElementById('search-bar');
  var clearBtn = document.getElementById('search-clear');
  var status = document.getElementById('result-count');
  var noResult = document.getElementById('no-result');

  function setOpen(sec, open) {
    sec.classList.toggle('is-open', open);
    sec.querySelector('.req-head').setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function scrollToSection(sec) {
    var top = sec.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  sections.forEach(function (sec) {
    sec.querySelector('.req-head').addEventListener('click', function () {
      setOpen(sec, !sec.classList.contains('is-open'));
    });
  });

  chips.forEach(function (chip) {
    chip.addEventListener('click', function (e) {
      var sec = document.getElementById('boite-' + chip.getAttribute('data-box'));
      if (!sec) return;
      e.preventDefault();
      setOpen(sec, true);
      history.replaceState(null, '', '#boite-' + chip.getAttribute('data-box'));
      scrollToSection(sec);
    });
  });

  // Ouvrir directement un thème depuis un lien partagé (#boite-12)
  if (/^#boite-\d+$/.test(location.hash)) {
    var target = document.querySelector(location.hash);
    if (target) { setOpen(target, true); setTimeout(function () { scrollToSection(target); }, 150); }
  }

  /* ---------- Recherche ---------- */
  function normalize(t) {
    return (t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’']/g, ' ');
  }

  // Index du texte (titre + contenu) de chaque thème
  var index = sections.map(function (sec) {
    return normalize(sec.querySelector('.req-title').textContent + ' ' + sec.querySelector('.req-body').textContent);
  });

  function clearMarks(root) {
    root.querySelectorAll('mark.hl').forEach(function (m) {
      m.replaceWith(document.createTextNode(m.textContent));
    });
    root.normalize();
  }

  function highlight(root, words) {
    if (!words.length) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      if (node.parentElement.closest('button, audio, .audio-card')) return;
      var text = node.nodeValue, norm = normalize(text);
      var ranges = [];
      words.forEach(function (w) {
        var i = norm.indexOf(w);
        while (i !== -1) { ranges.push([i, i + w.length]); i = norm.indexOf(w, i + w.length); }
      });
      if (!ranges.length) return;
      ranges.sort(function (a, b) { return a[0] - b[0]; });
      var frag = document.createDocumentFragment(), last = 0;
      ranges.forEach(function (r) {
        if (r[0] < last) return;
        frag.appendChild(document.createTextNode(text.slice(last, r[0])));
        var mk = document.createElement('mark');
        mk.className = 'hl';
        mk.textContent = text.slice(r[0], r[1]);
        frag.appendChild(mk);
        last = r[1];
      });
      frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  var timer;
  function search() {
    var q = normalize(input.value).trim();
    var words = q.split(/\s+/).filter(function (w) { return w.length > 1; });
    clearBtn.hidden = !input.value;
    var found = 0;
    sections.forEach(function (sec, i) {
      var body = sec.querySelector('.req-body');
      clearMarks(body);
      var match = !words.length || words.every(function (w) { return index[i].indexOf(w) !== -1; });
      sec.hidden = !match;
      chips[i] && (chips[i].hidden = !match);
      if (match) found++;
      if (words.length && match) { highlight(body, words); setOpen(sec, false); }
    });
    noResult.hidden = found > 0;
    if (!words.length) { status.textContent = ''; return; }
    status.textContent = found
      ? found + (found > 1 ? ' thèmes contiennent' : ' thème contient') + ' « ' + input.value.trim() + ' ». Ouvrez un thème pour voir les passages surlignés.'
      : 'Aucun résultat.';
  }

  if (input) {
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(search, 180); });
    clearBtn.addEventListener('click', function () { input.value = ''; search(); input.focus(); });
  }
})();
