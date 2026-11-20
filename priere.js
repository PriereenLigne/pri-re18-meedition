/* Pages « Jour » de la 18e édition : parties dépliables */
(function () {
  'use strict';

  function setOpen(btn, panel, open) {
    panel.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  document.querySelectorAll('.main-btn[data-target], .sub-btn[data-target]').forEach(function (btn, i) {
    var panel = document.getElementById(btn.getAttribute('data-target'));
    if (!panel) return;
    var pid = 'panel-' + i;
    panel.setAttribute('data-panel', pid);
    panel.classList.add(btn.classList.contains('main-btn') ? 'main-panel' : 'sub-panel');
    btn.setAttribute('aria-expanded', 'false');
    var icon = document.createElement('span');
    icon.className = 'acc-icon';
    icon.setAttribute('aria-hidden', 'true');
    btn.appendChild(icon);

    btn.addEventListener('click', function () {
      var open = panel.classList.contains('hidden');
      setOpen(btn, panel, open);
      if (open && btn.classList.contains('main-btn')) {
        var top = btn.getBoundingClientRect().top + window.scrollY - 84;
        if (Math.abs(window.scrollY - top) > 200) window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Fonctions conservées pour compatibilité avec d'anciens liens
  window.toggleSection = window.toggleSubSection = function (id) {
    var panel = document.getElementById(id);
    if (panel) panel.classList.toggle('hidden');
  };
})();
