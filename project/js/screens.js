// ═══════════════════════════════════════════════════════════════════════════
// SCREENS LOGIC - All screen interactions
// ═══════════════════════════════════════════════════════════════════════════

function onScreenEnter(n) {
  if (n === 0) {} // Password screen
  if (n === 2) initLockScreen();
  if (n === 4) initHeartsGame();
  if (n === 5) initCompatibility();
  if (n === 6) renderQuiz();
  if (n === 7) startChat();
  if (n === 8) initScratch();
  if (n === 10) initLoveMe();
  if (n === 11) initTimeline();
  if (n === 12) initGallery();
  if (n === 13) initNotes();
  if (n === 14) startLetter();
  if (n === 16) startCounter();
  if (n === 18) initFinale();
}

// ═══ S0 – PASSWORD ═══
function checkPassword() {
  const pass = document.getElementById('passwordInput').value.toLowerCase().trim();
  if (pass === CONFIG.password) {
    document.getElementById('passError').style.display = 'none';
    showScreen(1);
  } else {
    document.getElementById('passError').style.display = 'block';
    document.getElementById('passwordInput').value = '';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const passInput = document.getElementById('passwordInput');
  if (passInput) {
    passInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkPassword(); });
  }
});

// ═══ S1 – LOADING ═══
function startLoadingAnimation() {
  const fill = document.getElementById('loadFill');
  const pct = document.getElementById('loadPct');
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 4 + 0.5;
    if (p >= 100) {
      p = 100;
      clearInterval(iv);
      setTimeout(() => showScreen(2), 600);
    }
    fill.style.width = p + '%';
    pct.textContent = Math.floor(p) + '%';
  }, 60);
}

// ═══ S2 – LOCK SCREEN ═══
function initLockScreen() {
  const now = new Date();
  const h = now.getHours() % 12 || 12;
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('lockTime').textContent = h + ':' + m;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  document.getElementById('lockDate').textContent = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate();
}

function unlockPhone() {
  const phone = document.getElementById('phoneLock');
  phone.style.transition = 'all 0.6s cubic-bezier(.4,2,.3,1)';
  phone.style.transform = 'scale(1.08) translateY(-10px)';
  phone.style.opacity = '0';
  setTimeout(() => showScreen(3), 700);
}

// ═══ S3 – NAME ═══
function submitName() {
  const val = document.getElementById('nameInput').value.trim();
  if (!val) return;
  userName = val;
  const title = document.getElementById('nameTitle');
  title.style.transition = 'all 0.4s';
  title.style.transform = 'scale(1.1)';
  title.style.color = '#ff9fcb';
  title.textContent = 'Welcome, ' + userName + ' ❤️';
  setTimeout(() => { title.style.transform = 'scale(1)'; setTimeout(nextScreen, 900); }, 400);
}

document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('nameInput');
  if (nameInput) {
    nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') submitName(); });
  }
});

// ═══ S4 – HEARTS GAME ═══
function initHeartsGame() {
  const grid = document.getElementById('heartGrid');
  grid.innerHTML = '';
  let sel = 0;
  const variants = ['❤️', '💕', '💗', '💓', '💖', '💝', '💞', '💘', '🌹', '💋', '🫀', '🌸'];
  for (let i = 0; i < 12; i++) {
    const btn = document.createElement('div');
    btn.className = 'hg-item';
    btn.textContent = variants[i];
    btn.style.animationDelay = (i * 0.15) + 's';
    btn.addEventListener('click', function () {
      if (this.classList.contains('selected') || sel >= 3) return;
      this.classList.add('selected');
      sel++;
      spawnParticles(this.getBoundingClientRect(), 8);
      document.getElementById('heartCountTxt').textContent = 'Choose with your heart... ' + sel + ' / 3';
      if (sel === 3) {
        const codeEl = document.getElementById('secretCodeDisplay');
        codeEl.style.opacity = '1';
        heartExplosion();
        setTimeout(() => { setTimeout(() => nextScreen(), 1800); }, 400);
      }
    });
    grid.appendChild(btn);
  }
}

// ═══ S5 – COMPATIBILITY ═══
function initCompatibility() {
  const wrap = document.getElementById('compatBars');
  wrap.innerHTML = '';
  const status = document.getElementById('compatStatus');
  status.textContent = 'Analyzing our connection...';
  COMPAT_DATA.forEach(d => {
    const w = document.createElement('div');
    w.className = 'compat-bar-wrap';
    w.innerHTML = `<div class="compat-label"><span>${d.label}</span><span id="cpct_${d.label}">0%</span></div>
      <div class="compat-track"><div class="compat-fill" id="cfill_${d.label}"></div></div>`;
    wrap.appendChild(w);
  });
  let delay = 800;
  COMPAT_DATA.forEach((d, i) => {
    setTimeout(() => {
      const fill = document.getElementById('cfill_' + d.label);
      const pctEl = document.getElementById('cpct_' + d.label);
      fill.style.width = d.pct + '%';
      let v = 0;
      const iv = setInterval(() => {
        v += 4;
        if (v >= d.pct) { v = d.pct; clearInterval(iv); }
        pctEl.textContent = (d.label === 'Love ❤️' ? '∞ Infinite' : '100%');
      }, 30);
      if (i === COMPAT_DATA.length - 1) {
        setTimeout(() => {
          status.textContent = 'Perfect Match! We Are Destined 💕';
          setTimeout(nextScreen, 1200);
        }, 1400);
      }
    }, delay + (i * 400));
  });
}

// ═══ S6 – QUIZ ═══
function renderQuiz() {
  quizQ = 0;
  quizScore = 0;
  showQuizQ();
}

function showQuizQ() {
  const c = document.getElementById('quizContent');
  if (quizQ >= QUIZ.length) { showQuizResult(c); return; }
  const q = QUIZ[quizQ];
  c.innerHTML = `
    <div style="text-align:left;margin-bottom:12px;color:rgba(255,200,220,0.6);font-size:0.85rem">Question ${quizQ + 1} / ${QUIZ.length}</div>
    <div class="quiz-card glass">
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-opts" id="quizOpts"></div>
    </div>`;
  const opts = document.getElementById('quizOpts');
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((o, i) => {
    const btn = document.createElement('div');
    btn.className = 'quiz-opt';
    btn.innerHTML = `<span style="width:24px;height:24px;border-radius:50%;background:rgba(255,77,136,0.2);display:flex;align-items:center;justify-content:center;font-size:0.75rem;flex-shrink:0">${letters[i]}</span>${o}`;
    btn.addEventListener('click', () => {
      opts.querySelectorAll('.quiz-opt').forEach(b => b.style.pointerEvents = 'none');
      if (i === q.ans) { btn.classList.add('correct'); quizScore++; }
      else { btn.classList.add('wrong'); opts.children[q.ans].classList.add('correct'); }
      quizQ++;
      setTimeout(showQuizQ, ANIMATION_SPEED.quizAnswer);
    });
    opts.appendChild(btn);
  });
}

function showQuizResult(c) {
  c.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:16px">
      <div style="font-size:60px">🏆</div>
      <h2 class="title-md" style="font-size:clamp(1.6rem,4vw,2.4rem)">Quiz Complete!</h2>
      <p class="subtitle">Your Understanding of My Love</p>
      <div class="quiz-score">${quizScore} / ${QUIZ.length}</div>
      <p style="color:rgba(255,200,220,0.8);font-size:0.95rem;max-width:280px">${quizScore === QUIZ.length ? 'Perfect! You know my heart completely 💕' : 'Your love is perfectly expressed 💕'}</p>
      <button class="btn btn-primary" onclick="nextScreen()" style="margin-top:8px">Continue 💌</button>
    </div>`;
  if (quizScore === QUIZ.length) heartExplosion();
}

// ═══ S7 – CHAT ═══
function startChat() {
  document.getElementById('chatName').textContent = userName + ' ❤️';
  const msgsEl = document.getElementById('chatMsgs');
  msgsEl.innerHTML = '';
  let i = 0;
  function addMsg() {
    if (i >= CHAT_MSGS.length) {
      document.getElementById('chatNextBtn').style.display = 'block';
      return;
    }
    const typing = document.createElement('div');
    typing.className = 'typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    typing.style.alignSelf = CHAT_MSGS[i].side === 'recv' ? 'flex-start' : 'flex-end';
    msgsEl.appendChild(typing);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    setTimeout(() => {
      typing.remove();
      const msg = document.createElement('div');
      msg.className = 'msg ' + CHAT_MSGS[i].side;
      msg.textContent = CHAT_MSGS[i].text;
      msgsEl.appendChild(msg);
      msgsEl.scrollTop = msgsEl.scrollHeight;
      i++;
      setTimeout(addMsg, ANIMATION_SPEED.chatMessage + Math.random() * 400);
    }, 800);
  }
  setTimeout(addMsg, 500);
}

// ═══ S8 – SCRATCH ═══
function initScratch() {
  const canvas = document.getElementById('scratchCanvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const grd = ctx.createLinearGradient(0, 0, w, h);
  grd.addColorStop(0, '#3d0035');
  grd.addColorStop(1, '#5c0040');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, w, h);
  ctx.font = 'bold 16px DM Sans';
  ctx.fillStyle = 'rgba(255,180,200,0.6)';
  ctx.textAlign = 'center';
  ctx.fillText('✨ Scratch Here ✨', w / 2, h / 2 - 10);
  ctx.fillText('💕 Your secret message...', w / 2, h / 2 + 14);
  document.getElementById('scratchReveal').style.opacity = '1';
  let scratched = 0, painting = false;
  function scratch(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    scratched++;
    if (scratched > 100) {
      ctx.clearRect(0, 0, w, h);
      document.getElementById('scratchNextBtn').style.display = 'block';
      spawnParticles({ left: canvas.offsetLeft, top: canvas.offsetTop, width: w, height: h }, 16);
    }
  }
  canvas.addEventListener('mousedown', e => { painting = true; });
  canvas.addEventListener('mousemove', e => { if (!painting) return; const r = canvas.getBoundingClientRect(); scratch(e.clientX - r.left, e.clientY - r.top); });
  canvas.addEventListener('mouseup', () => painting = false);
  canvas.addEventListener('touchstart', e => { e.preventDefault(); painting = true; }, { passive: false });
  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    if (!painting) return;
    const r = canvas.getBoundingClientRect();
    const t = e.touches[0];
    scratch(t.clientX - r.left, t.clientY - r.top);
  }, { passive: false });
  canvas.addEventListener('touchend', () => painting = false);
}

// ═══ S9 – KISS ═══
function sendKiss() {
  kissCount++;
  const el = document.getElementById('kissCount');
  el.textContent = kissCount;
  el.style.animation = 'none';
  requestAnimationFrame(() => { el.style.animation = 'countPop 0.3s ease'; });
  spawnParticles(document.getElementById('kissEmoji').getBoundingClientRect(), 6, '💋');
  document.getElementById('kissEmoji').style.transform = 'scale(0.8)';
  setTimeout(() => document.getElementById('kissEmoji').style.transform = '', 150);
  if (kissCount === 10) {
    document.getElementById('kissGoal').textContent = 'Love is infinite with you 💕';
    document.getElementById('kissNextBtn').style.display = 'block';
  }
  if (kissCount === 50) {
    document.getElementById('kissGoal').innerHTML = '<span style="color:#ff9fcb;font-weight:600">Unlimited Kisses of Love! ❤️</span>';
    heartExplosion();
  }
}

// ═══ S10 – LOVE ME ═══
function initLoveMe() {
  noMoves = 0;
  const noBtn = document.getElementById('noBtn');
  const wrap = document.getElementById('loveMeBtns');
  noBtn.style.position = 'absolute';
  noBtn.style.right = '0';
  noBtn.style.top = '0';
}

function runAway() {
  noMoves++;
  const noBtn = document.getElementById('noBtn');
  const wrap = document.getElementById('loveMeBtns');
  const r = wrap.getBoundingClientRect();
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 160 - 80;
  noBtn.style.position = 'fixed';
  noBtn.style.left = Math.max(10, Math.min(window.innerWidth - 120, r.left + x)) + 'px';
  noBtn.style.top = Math.max(10, Math.min(window.innerHeight - 60, r.top + y)) + 'px';
  if (noMoves >= 5) noBtn.style.opacity = '0.3';
  if (noMoves >= 8) { noBtn.style.display = 'none'; }
}

// ═══ S11 – TIMELINE ═══
function initTimeline() {
  const wrap = document.getElementById('tlWrapper');
  wrap.querySelectorAll('.tl-item').forEach(el => el.remove());
  TL_ITEMS.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'tl-item';
    el.innerHTML = `<div class="tl-dot">${item.icon}</div>
      <div class="tl-content"><div class="tl-title">${item.title}</div><div class="tl-desc">${item.desc}</div></div>`;
    wrap.appendChild(el);
    setTimeout(() => {
      el.classList.add('revealed');
      if (i === TL_ITEMS.length - 1) setTimeout(() => document.getElementById('tlNext').style.display = 'block', 600);
    }, ANIMATION_SPEED.timelineReveal + i * 400);
  });
}

// ═══ S12 – GALLERY ═══
let galIdx = 0;

function initGallery() {
  galIdx = 0;
  renderGallery();
}

function renderGallery() {
  const wrap = document.getElementById('galleryWrap');
  const nav = document.getElementById('galNav');
  const d = GALLERY_DATA[galIdx];
  wrap.innerHTML = `
    <div class="polaroid" onclick="galNext()">
      <div class="polaroid-inner" style="background:linear-gradient(135deg,${d.color})">
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:60px">${d.emoji}</div>
      </div>
      <div class="polaroid-caption">${d.caption}</div>
    </div>
    <p style="color:rgba(255,200,220,0.5);font-size:0.8rem;margin-top:8px;text-align:center">Photo ${galIdx + 1}/10 · Replace with your photos</p>`;
  wrap.style.animation = 'none';
  requestAnimationFrame(() => wrap.style.animation = '');
  nav.innerHTML = '';
  GALLERY_DATA.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'gal-dot' + (i === galIdx ? ' active' : '');
    dot.onclick = () => { galIdx = i; renderGallery(); };
    nav.appendChild(dot);
  });
}

function galNext() {
  galIdx = (galIdx + 1) % GALLERY_DATA.length;
  renderGallery();
}

// ═══ S13 – NOTES ═══
function initNotes() {
  const field = document.getElementById('notesField');
  field.innerHTML = '';
  const positions = [[10, 10], [150, 60], [50, 120], [170, 140], [20, 180], [120, 30]];
  CONFIG.NOTES_TXT.slice(0, 6).forEach((txt, i) => {
    const c = document.createElement('div');
    c.className = 'note-card';
    const r = (Math.random() - 0.5) * 12;
    c.style.cssText = `left:${positions[i][0]}px;top:${positions[i][1]}px;--r:${r}deg;animation-duration:${4 + Math.random() * 3}s;animation-delay:${i * 0.5}s;font-size:clamp(0.9rem,2.5vw,1.2rem)`;
    c.textContent = txt;
    field.appendChild(c);
  });
}

// ═══ S14 – LETTER ═══
function startLetter() {
  const wrap = document.getElementById('letterContent');
  wrap.innerHTML = '';
  LETTER_LINES.forEach(line => {
    const el = document.createElement('div');
    el.className = 'letter-line';
    el.innerHTML = line || '&nbsp;';
    if (LETTER_LINES.indexOf(line) === 0) {
      el.style.fontFamily = "'Sacramento', cursive";
      el.style.fontSize = 'clamp(1.8rem,5vw,2.6rem)';
      el.style.color = '#ff9fcb';
    }
    wrap.appendChild(el);
  });
  let i = 0;
  function showLine() {
    if (i >= wrap.children.length) {
      document.getElementById('letterNext').style.display = 'block';
      return;
    }
    wrap.children[i].classList.add('show');
    i++;
    setTimeout(showLine, ANIMATION_SPEED.textReveal);
  }
  setTimeout(showLine, 300);
}

// ═══ S15 – AUDIO ═══
let simPlaying = false, simTime = 0, simMax = 180, simIv = null;

function initAudioWave() {
  const bars = document.getElementById('waveBars');
  for (let i = 0; i < 20; i++) {
    const b = document.createElement('div');
    b.className = 'wave-bar';
    b.style.height = (20 + Math.random() * 28) + 'px';
    b.style.animationDuration = (0.4 + Math.random() * 0.6) + 's';
    b.style.animationDelay = (i * 0.05) + 's';
    b.style.animationPlayState = 'paused';
    bars.appendChild(b);
  }
}

function toggleAudio() {
  simPlaying = !simPlaying;
  document.getElementById('playBtn').textContent = simPlaying ? '⏸ Pause' : '▶ Play';
  document.querySelectorAll('.wave-bar').forEach(b => b.style.animationPlayState = simPlaying ? 'running' : 'paused');
  document.getElementById('audioStatus').textContent = simPlaying ? '🎵 Playing a message of love...' : '🎵 Tap play to listen';
  if (simPlaying) {
    simIv = setInterval(() => {
      simTime = Math.min(simTime + 1, simMax);
      document.getElementById('audioProgress').style.width = (simTime / simMax * 100) + '%';
      const m = Math.floor(simTime / 60), s = String(simTime % 60).padStart(2, '0');
      document.getElementById('audioTime').textContent = m + ':' + s;
      if (simTime >= simMax) {
        clearInterval(simIv);
        simPlaying = false;
        document.getElementById('playBtn').textContent = '▶ Play Again';
      }
    }, 1000);
  } else {
    clearInterval(simIv);
  }
}

// ═══ S16 – COUNTER ═══
function startCounter() {
  const start = new Date(CONFIG.relationshipStartDate);
  function tick() {
    const diff = Date.now() - start.getTime();
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    animNum('cDays', days);
    animNum('cHours', hours);
    animNum('cMins', mins);
  }
  tick();
  setInterval(tick, 1000);
}

let prevNums = {};

function animNum(id, val) {
  const el = document.getElementById(id);
  if (prevNums[id] === val) return;
  prevNums[id] = val;
  el.style.animation = 'none';
  requestAnimationFrame(() => {
    el.style.animation = 'countPop 0.4s cubic-bezier(.4,2,.3,1)';
    el.textContent = val.toLocaleString();
  });
}

// ═══ S17 – GIFT ═══
let giftOpened = false;

function openGift() {
  if (giftOpened) return;
  giftOpened = true;
  const emoji = document.getElementById('giftEmoji');
  emoji.style.animation = 'none';
  const seq = ['🎁', '📦', '✨', '💝', '💋'];
  let i = 0;
  const iv = setInterval(() => {
    emoji.textContent = seq[i];
    emoji.style.transform = `scale(${1.2 + i * 0.1}) rotate(${i % 2 === 0 ? -10 : 10}deg)`;
    i++;
    if (i >= seq.length) {
      clearInterval(iv);
      heartExplosion();
      launchFireworks();
      document.getElementById('giftHint').innerHTML = '<span style="font-family:Sacramento,cursive;font-size:1.8rem;color:#ff9fcb">More Memories Below 💋❤️</span>';
      document.getElementById('giftPhotos').style.display = 'grid';
      setTimeout(() => document.getElementById('giftNext').style.display = 'block', 600);
    }
  }, ANIMATION_SPEED.giftUnwrap);
}

function showGiftPhoto(n) {
  alert(`Memory ${n}: 💕\n\n"A precious moment with you that I cherish forever. These are the memories that make my heart smile."`);
}

// ═══ S18 – FINALE ═══
function initFinale() {
  document.getElementById('finaleName').textContent = 'I Love You, ' + userName + ' 💕';
  const c = document.getElementById('finaleHearts');
  c.innerHTML = '';
  const e = ['❤️', '💕', '💗', '💋', '🌹', '💝', '💞', '✨', '🎊', '🌸'];
  for (let i = 0; i < 30; i++) {
    const h = document.createElement('div');
    h.className = 'finale-h';
    h.textContent = e[Math.floor(Math.random() * e.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = (16 + Math.random() * 24) + 'px';
    h.style.animationDuration = (5 + Math.random() * 8) + 's';
    h.style.animationDelay = (Math.random() * 6) + 's';
    c.appendChild(h);
  }
  launchFireworks();
  setTimeout(launchFireworks, 1500);
  setTimeout(launchFireworks, 3000);
  massConfetti();
}
