/* 7 jours de jeûne et prière : jours, moments (matin/soir) et parties dépliables */
(function () {
  'use strict';

  var triggers = document.querySelectorAll('.jour-header[data-target], .section-header[data-target], .sub-toggle[data-target]');

  function panelOf(btn) { return document.getElementById(btn.getAttribute('data-target')); }

  function setOpen(btn, open) {
    var panel = panelOf(btn);
    if (!panel) return;
    panel.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    var host = btn.closest('.jour, .matin, .soir, .sub-section');
    if (host) host.classList.toggle('is-open', open);
  }

  triggers.forEach(function (btn) {
    var icon = document.createElement('span');
    icon.className = 'acc-icon';
    icon.setAttribute('aria-hidden', 'true');
    btn.appendChild(icon);
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function () {
      setOpen(btn, btn.getAttribute('aria-expanded') !== 'true');
    });
  });

  // Ouvre un jour depuis le sommaire (#jour3) et le rend visible
  function openFromHash() {
    var m = /^#jour(\d)$/.exec(location.hash);
    if (!m) return;
    var btn = document.querySelector('.jour-header[data-target="jour' + m[1] + '-content"]');
    if (!btn) return;
    setOpen(btn, true);
    var top = btn.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
  window.addEventListener('hashchange', openFromHash);
  openFromHash();

  window.toggleSection = window.toggleSubSection = function (id) {
    var btn = document.querySelector('[data-target="' + id + '"]');
    if (btn) btn.click();
  };
})();
