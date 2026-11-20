/* Verset du jour : change automatiquement chaque jour (Louis Segond) */
(function () {
  'use strict';
  var versets = [
    ["Ne t'ai-je pas donné cet ordre : Fortifie-toi et prends courage ? Ne t'effraie point et ne t'épouvante point, car l'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.", "Josué 1:9"],
    ["Ne crains rien, car je suis avec toi ; ne promène pas des regards inquiets, car je suis ton Dieu ; je te fortifie, je viens à ton secours, je te soutiens de ma droite triomphante.", "Ésaïe 41:10"],
    ["Je puis tout par celui qui me fortifie.", "Philippiens 4:13"],
    ["L'Éternel est mon berger : je ne manquerai de rien.", "Psaume 23:1"],
    ["Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.", "Jérémie 29:11"],
    ["Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.", "Matthieu 11:28"],
    ["Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.", "Romains 8:28"],
    ["Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces.", "Philippiens 4:6"],
    ["Invoque-moi, et je te répondrai ; je t'annoncerai de grandes choses, des choses cachées, que tu ne connais pas.", "Jérémie 33:3"],
    ["L'Éternel ordonnera à la bénédiction d'être avec toi dans tes greniers et dans toutes tes entreprises.", "Deutéronome 28:8"],
    ["C'est pourquoi je vous dis : Tout ce que vous demanderez en priant, croyez que vous l'avez reçu, et vous le verrez s'accomplir.", "Marc 11:24"],
    ["Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles ; ils courent, et ne se lassent point, ils marchent, et ne se fatiguent point.", "Ésaïe 40:31"],
    ["Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse.", "Psaume 46:2"],
    ["Priez sans cesse.", "1 Thessaloniciens 5:17"]
  ];
  var start = new Date(2024, 0, 1);
  var day = Math.floor((new Date() - start) / 86400000);
  var v = versets[((day % versets.length) + versets.length) % versets.length];
  var t = document.getElementById('verset-texte');
  var r = document.getElementById('verset-ref');
  if (t && r) { t.textContent = '« ' + v[0] + ' »'; r.textContent = v[1]; }
})();
