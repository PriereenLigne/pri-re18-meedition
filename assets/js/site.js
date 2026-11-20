/* Prière en Ligne — comportements communs à toutes les pages */
(function () {
  'use strict';

  /* ---------- Menu mobile + page active ---------- */
  function initNav() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var toggle = header.querySelector('.nav-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = header.classList.toggle('menu-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    var page = document.body.getAttribute('data-page');
    if (page) {
      header.querySelectorAll('.site-nav a[data-nav="' + page + '"]').forEach(function (a) {
        a.setAttribute('aria-current', 'page');
      });
    }
  }

  /* ---------- Lecteurs audio élégants ---------- */
  var SPEEDS = [1, 1.25, 1.5, 2];

  function enhanceAudio(audio) {
    if (audio.dataset.enhanced) return;
    audio.dataset.enhanced = '1';
    audio.setAttribute('preload', 'none');
    audio.removeAttribute('id');

    var card;
    var parent = audio.parentElement;
    if (parent && parent.id === 'audio-section') {
      // Ancien bloc des pages « Jour » : on retire titre, sélecteur et sauts de ligne en double
      card = parent;
      card.removeAttribute('id');
      Array.prototype.slice.call(card.children).forEach(function (el) {
        if (el !== audio) el.remove();
      });
      card.textContent = '';
      card.appendChild(audio);
    } else {
      card = document.createElement('div');
      audio.parentNode.insertBefore(card, audio);
      card.appendChild(audio);
    }
    card.classList.add('audio-card');

    var label = document.createElement('span');
    label.className = 'audio-label';
    label.textContent = audio.getAttribute('data-label') || 'Écouter';
    card.insertBefore(label, audio);

    var speeds = document.createElement('div');
    speeds.className = 'speeds';
    speeds.setAttribute('aria-label', 'Vitesse de lecture');
    SPEEDS.forEach(function (s) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = (s + '').replace('.', ',') + '×';
      b.setAttribute('aria-pressed', s === 1 ? 'true' : 'false');
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        audio.playbackRate = s;
        speeds.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
      });
      speeds.appendChild(b);
    });
    card.appendChild(speeds);

    card.addEventListener('click', function (e) { e.stopPropagation(); });
    audio.addEventListener('play', function () {
      document.querySelectorAll('audio').forEach(function (other) {
        if (other !== audio && !other.paused) other.pause();
      });
      card.classList.add('is-playing');
    });
    audio.addEventListener('pause', function () { card.classList.remove('is-playing'); });
    audio.addEventListener('ended', function () { card.classList.remove('is-playing'); });
  }

  function initAudio() {
    // Supprime les anciens sélecteurs de vitesse orphelins
    document.querySelectorAll('select[id="speed-control"], label[for="speed-control"]').forEach(function (el) { el.remove(); });
    document.querySelectorAll('audio').forEach(enhanceAudio);
  }

  /* ---------- Références bibliques cliquables ---------- */
  var BOOKS = 'Genèse|Exode|Lévitique|Nombres|Deutéronome|Deut\\.?|Josué|Juges|Ruth|Samuel|Rois|Chroniques|Esdras|Néhémie|Esther|Job|Psaumes?|Proverbes|Ecclésiaste|Cantique|Ésaïe|Esaïe|Isaïe|Jérémie|Lamentations|Ézéchiel|Ezéchiel|Daniel|Osée|Joël|Amos|Abdias|Jonas|Michée|Nahum|Habacuc|Sophonie|Aggée|Zacharie|Malachie|Matthieu|Marc|Luc|Jean|Actes|Romains|Corinthiens|Galates|Éphésiens|Ephésiens|Philippiens|Colossiens|Thessaloniciens|Timothée|Tite|Philémon|Hébreux|Jacques|Pierre|Jude|Apocalypse';
  var REF = new RegExp('((?:[1-3]\\s?)?(?:' + BOOKS + '))\\s(\\d{1,3})\\s?:\\s?(\\d{1,3}(?:\\s?[-–]\\s?\\d{1,3})?)', 'g');

  function linkifyBible(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.indexOf(':') === -1) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p || p.closest('a, button, script, style, audio, select, textarea')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var text = node.nodeValue;
      REF.lastIndex = 0;
      if (!REF.test(text)) return;
      REF.lastIndex = 0;
      var frag = document.createDocumentFragment();
      var last = 0, m;
      while ((m = REF.exec(text))) {
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var a = document.createElement('a');
        var book = m[1].replace('Deut.', 'Deutéronome').replace(/^Deut$/, 'Deutéronome');
        a.href = 'https://www.biblegateway.com/passage/?search=' + encodeURIComponent(book + ' ' + m[2] + ':' + m[3].replace(/\s/g, '')) + '&version=LSG';
        a.target = '_blank';
        a.rel = 'noopener';
        a.className = 'bible-ref';
        a.textContent = m[0];
        frag.appendChild(a);
        last = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  /* ---------- Retour en haut ---------- */
  function initToTop() {
    var btn = document.createElement('button');
    btn.className = 'to-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Revenir en haut de la page');
    btn.textContent = '↑';
    btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    document.body.appendChild(btn);
    var onScroll = function () { btn.classList.toggle('show', window.scrollY > 700); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Apparition douce au défilement ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Année du pied de page ---------- */
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    initNav();
    initAudio();
    document.querySelectorAll('[data-bible-links]').forEach(linkifyBible);
    initToTop();
    initReveal();
    initYear();
  });

  window.PEL = { linkifyBible: linkifyBible };
})();
