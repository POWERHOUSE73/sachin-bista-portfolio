// ═══════════════════════════════════════════════════════════════════════════
// UTILITIES - Helper functions
// ═══════════════════════════════════════════════════════════════════════════

let currentScreen = 0;
let userName = 'My Love';
let kissCount = 0;
let quizScore = 0;
let quizQ = 0;
let isMuted = false;
let logoTaps = 0;
let noMoves = 0;

// ═══ FLOATING HEARTS ═══
function spawnGlobalHearts() {
  const c = document.getElementById('globalHearts');
  const emojis = ['❤️', '💕', '💗', '💓', '💞', '🌹'];
  for (let i = 0; i < 16; i++) {
    const d = document.createElement('div');
    d.className = 'fh';
    d.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    d.style.left = Math.random() * 100 + 'vw';
    d.style.fontSize = (10 + Math.random() * 16) + 'px';
    d.style.animationDuration = (8 + Math.random() * 12) + 's';
    d.style.animationDelay = (Math.random() * 15) + 's';
    c.appendChild(d);
  }
}

// ═══ PROGRESS DOTS ═══
function initProgressDots() {
  const dotsWrap = document.getElementById('progressDots');
  for (let i = 0; i <= CONFIG.totalScreens; i++) {
    const d = document.createElement('div');
    d.className = 'pdot';
    d.id = 'pdot' + i;
    dotsWrap.appendChild(d);
  }
}

function updateDots(n) {
  for (let i = 0; i <= CONFIG.totalScreens; i++) {
    document.getElementById('pdot' + i).classList.toggle('done', i <= n);
  }
}

// ═══ SCREEN NAVIGATION ═══
function showScreen(n) {
  const prev = document.getElementById('s' + currentScreen);
  const next = document.getElementById('s' + n);
  if (!next) return;
  prev.classList.add('exit');
  setTimeout(() => { prev.classList.remove('active', 'exit'); }, ANIMATION_SPEED.screenTransition);
  next.classList.add('active');
  currentScreen = n;
  updateDots(n);
  onScreenEnter(n);
}

function nextScreen() {
  if (currentScreen < CONFIG.totalScreens) showScreen(currentScreen + 1);
}

// ═══ PARTICLES ═══
function spawnParticles(rect, count = 10, emoji = null) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    if (emoji) {
      p.style.cssText = `position:fixed;font-size:${14 + Math.random() * 14}px;pointer-events:none;z-index:999;left:${rect.left + rect.width / 2}px;top:${rect.top + rect.height / 2}px`;
      p.textContent = emoji;
    } else {
      p.className = 'particle';
      const cols = ['#ff4d88', '#ff9fcb', '#ffd700', '#fff'];
      p.style.cssText += `left:${rect.left + rect.width / 2}px;top:${rect.top + rect.height / 2}px;width:${4 + Math.random() * 6}px;height:${4 + Math.random() * 6}px;background:${cols[Math.floor(Math.random() * cols.length)]}`;
    }
    const angle = Math.random() * Math.PI * 2, dist = 60 + Math.random() * 80;
    p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    p.style.animationDuration = (0.5 + Math.random() * 0.5) + 's';
    p.style.animationDelay = (Math.random() * 0.2) + 's';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1200);
  }
}

// ═══ FIREWORKS ═══
function launchFireworks() {
  const cols = ['#ff4d88', '#ff1a6b', '#ffd700', '#7cd8ff', '#ff9fcb', '#ffb347'];
  for (let f = 0; f < 4; f++) {
    setTimeout(() => {
      const x = 20 + Math.random() * 60 + 'vw', y = 10 + Math.random() * 50 + 'vh';
      const fw = document.createElement('div');
      fw.className = 'fw';
      fw.style.cssText = `left:${x};top:${y}`;
      document.body.appendChild(fw);
      for (let s = 0; s < 20; s++) {
        const spark = document.createElement('div');
        spark.className = 'fw-spark';
        const angle = Math.random() * Math.PI * 2, dist = 50 + Math.random() * 80;
        spark.style.background = cols[Math.floor(Math.random() * cols.length)];
        spark.style.setProperty('--fx', Math.cos(angle) * dist + 'px');
        spark.style.setProperty('--fy', Math.sin(angle) * dist + 'px');
        spark.style.animationDuration = (0.6 + Math.random() * 0.6) + 's';
        fw.appendChild(spark);
      }
      setTimeout(() => fw.remove(), 1400);
    }, f * 300);
  }
}

// ═══ CONFETTI ═══
function massConfetti() {
  const colors = ['#ff4d88', '#ff1a6b', '#ffd700', '#7cd8ff', '#b8ff9f', '#ffb347', '#d488ff', '#fff'];
  for (let i = 0; i < 160; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.style.cssText = `position:fixed;left:${Math.random() * 100}vw;top:-20px;width:${6 + Math.random() * 8}px;height:${10 + Math.random() * 10}px;background:${colors[Math.floor(Math.random() * colors.length)]};border-radius:${Math.random() > 0.5 ? '50%' : '2px'};pointer-events:none;z-index:999;animation:particleFly ${2 + Math.random() * 2}s linear forwards;--tx:${(Math.random() - 0.5) * 100}px;--ty:${80 + Math.random() * 80}vh`;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }, i * 20);
  }
}

// ═══ HEART EXPLOSION ═══
function heartExplosion() {
  const emojis = ['❤️', '💕', '💗', '💓', '💖'];
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.style.cssText = `position:fixed;left:50%;top:50%;font-size:${20 + Math.random() * 20}px;pointer-events:none;z-index:999;transition:all ${0.8 + Math.random() * 0.6}s ease`;
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      document.body.appendChild(el);
      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 160;
      requestAnimationFrame(() => {
        el.style.transform = `translate(${Math.cos(angle) * dist}px,${Math.sin(angle) * dist}px) scale(0)`;
        el.style.opacity = '0';
      });
      setTimeout(() => el.remove(), 1400);
    }, i * 30);
  }
}

// ═══ MUSIC PLAYER ═══
function toggleMusic() {
  isMuted = !isMuted;
  const btn = document.getElementById('musicBtn');
  if (isMuted) {
    btn.textContent = '🔇';
    const audio = document.getElementById('bgAudio');
    if (audio.src || audio.children.length > 0) {
      audio.play().catch(e => console.log('Audio play:', e));
    }
  } else {
    btn.textContent = '🎵';
    const audio = document.getElementById('bgAudio');
    audio.pause();
  }
}

// ═══ REPLAY & SHARE ═══
function replay() {
  window.location.reload();
}

function shareApp() {
  if (navigator.share) {
    navigator.share({
      title: 'I Created Something Special For You 💋',
      text: 'A special gift just for you! I love you 💕',
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() =>
      alert('Link copied! Share it with someone special 💋')
    );
  }
}

// ═══ EASTER EGG ═══
function openSecret() {
  document.getElementById('secretPage').classList.add('show');
}

function closeSecret() {
  document.getElementById('secretPage').classList.remove('show');
  logoTaps = 0;
}

// ═══ SETUP EASTER EGGS ═══
function setupEasterEggs() {
  document.getElementById('musicBtn').addEventListener('click', function () {
    logoTaps++;
    if (logoTaps >= 5) openSecret();
  }, true);

  let konamiSeq = [], KONAMI = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  document.addEventListener('keydown', e => {
    konamiSeq.push(e.keyCode);
    konamiSeq = konamiSeq.slice(-10);
    if (konamiSeq.join(',') === KONAMI.join(',')) openSecret();
  });
}
