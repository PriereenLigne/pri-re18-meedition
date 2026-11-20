/* Puzzle biblique : échanger deux pièces jusqu'à reconstituer l'image */
(function () {
  'use strict';

  var board = document.getElementById('game-board');
  var imageSel = document.getElementById('image-selector');
  var diffSel = document.getElementById('difficulty-selector');
  var shuffleBtn = document.getElementById('shuffle-button');
  var nextBtn = document.getElementById('next-button');
  var refImg = document.getElementById('reference-image');
  var movesEl = document.getElementById('moves');
  var placedEl = document.getElementById('placed');
  var timerEl = document.getElementById('timer');
  var msg = document.getElementById('message');

  var size = 3, order = [], selected = null, moves = 0, seconds = 0, tick = null, done = false;

  function fmt(s) { return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }

  function startTimer() {
    clearInterval(tick);
    seconds = 0; timerEl.textContent = '00:00';
    tick = setInterval(function () { seconds++; timerEl.textContent = fmt(seconds); }, 1000);
  }

  function shuffled(n) {
    var a = [];
    for (var i = 0; i < n; i++) a.push(i);
    do {
      for (var j = a.length - 1; j > 0; j--) {
        var k = Math.floor(Math.random() * (j + 1));
        var t = a[j]; a[j] = a[k]; a[k] = t;
      }
    } while (a.every(function (v, i) { return v === i; }));
    return a;
  }

  function render() {
    board.innerHTML = '';
    board.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    var src = imageSel.value, placed = 0;
    order.forEach(function (piece, pos) {
      var d = document.createElement('div');
      d.className = 'piece';
      var x = piece % size, y = Math.floor(piece / size);
      d.style.backgroundImage = 'url("' + src + '")';
      d.style.backgroundSize = (size * 100) + '% ' + (size * 100) + '%';
      d.style.backgroundPosition = (size > 1 ? x * 100 / (size - 1) : 0) + '% ' + (size > 1 ? y * 100 / (size - 1) : 0) + '%';
      if (piece === pos) { placed++; if (done) d.classList.add('ok'); }
      if (selected === pos) d.classList.add('selected');
      d.addEventListener('click', function () { choose(pos); });
      board.appendChild(d);
    });
    placedEl.textContent = placed + ' / ' + order.length;
    movesEl.textContent = moves;
  }

  function choose(pos) {
    if (done) return;
    if (selected === null) { selected = pos; render(); return; }
    if (selected !== pos) {
      var t = order[selected]; order[selected] = order[pos]; order[pos] = t;
      moves++;
    }
    selected = null;
    if (order.every(function (v, i) { return v === i; })) {
      done = true;
      clearInterval(tick);
      msg.textContent = 'Bravo ! Puzzle terminé en ' + moves + ' coups et ' + fmt(seconds) + '.';
      nextBtn.hidden = false;
    }
    render();
  }

  function newGame() {
    size = parseInt(diffSel.value, 10) || 3;
    order = shuffled(size * size);
    selected = null; moves = 0; done = false;
    msg.textContent = '';
    nextBtn.hidden = true;
    refImg.src = imageSel.value;
    render();
    startTimer();
  }

  refImg.addEventListener('load', function () {
    if (refImg.naturalWidth) board.style.aspectRatio = refImg.naturalWidth + ' / ' + refImg.naturalHeight;
  });

  imageSel.addEventListener('change', newGame);
  diffSel.addEventListener('change', newGame);
  shuffleBtn.addEventListener('click', newGame);
  nextBtn.addEventListener('click', function () {
    imageSel.selectedIndex = (imageSel.selectedIndex + 1) % imageSel.options.length;
    newGame();
  });

  newGame();
})();
