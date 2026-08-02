// ═══════════════════════════════════════════════════════════════════════════
// MAIN - Initialization & Setup
// ═══════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  // Initialize everything
  spawnGlobalHearts();
  initProgressDots();
  updateDots(0);
  setupEasterEggs();
  
  // Setup event listeners
  setupPasswordScreen();
  setupNameScreen();
  setupAudio();
  
  // Start loading animation when screen 1 loads
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      const s1 = document.getElementById('s1');
      if (s1 && s1.classList.contains('active')) {
        setTimeout(startLoadingAnimation, 100);
      }
    });
  });
  
  observer.observe(document.getElementById('app'), {
    attributes: true,
    subtree: true
  });
});

// ═══ PASSWORD SCREEN SETUP ═══
function setupPasswordScreen() {
  const passInput = document.getElementById('passwordInput');
  if (passInput) {
    passInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') checkPassword();
    });
  }
}

// ═══ NAME SCREEN SETUP ═══
function setupNameScreen() {
  const nameInput = document.getElementById('nameInput');
  if (nameInput) {
    nameInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') submitName();
    });
  }
}

// ═══ AUDIO SETUP ═══
function setupAudio() {
  // Initialize wave bars for audio player
  setTimeout(initAudioWave, 100);
}

// Export for HTML
window.CONFIG = CONFIG;
window.FEATURES = FEATURES;
