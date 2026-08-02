// ═══════════════════════════════════════════════════════════════════════════
// CONFIG - Main settings and customization
// ═══════════════════════════════════════════════════════════════════════════

// PASSWORD SETTINGS
const CONFIG = {
  // Password to unlock the experience
  password: 'mero pyaro sirmati', // Nepali for "my dear wife"
  
  // Relationship start date (for days together counter)
  // Format: 'YYYY-MM-DD'
  // Example: '2024-04-14' = April 14, 2024
  relationshipStartDate: '2024-04-14',
  
  // Display name for relationship date
  relationshipDateDisplay: '2080 Baishak 01 (Nepali New Year)',
  
  // Secret code shown after selecting 3 hearts
  secretCode: '2102',
  
  // Total number of screens
  totalScreens: 18,
  
  // Love notes that float around screen 13
  NOTES_TXT: [
    'You Are My Everything ❤️',
    'My Favorite Person 💕',
    'Forever Yours 🌟',
    'You Make Me Smile 🌹',
    'My Heart Is Yours 💋',
    'You Are My Peace ✨',
    'Endlessly Loved 💗',
    'My Only Love ❤️'
  ],
  
  // Colors for customization
  colors: {
    pink: '#ff4d88',
    rose: '#ff1a6b',
    gold: '#f7c59f',
    cream: '#fff5f8',
    deep: '#1a0015',
    mid: '#2d0026',
    glow: 'rgba(255,77,136,0.6)'
  },
  
  // Music file path (optional)
  // Set to your music file path or leave empty
  musicFilePath: '',
  // Example: musicFilePath: 'songs/romantic-song.mp3'
  
  // Audio simulation settings (for voice message)
  audioSimulation: {
    duration: 180, // seconds (3 minutes)
    playText: '▶ Play Message',
    pauseText: '⏸ Pause'
  }
};

// FEATURE FLAGS - Enable/disable features
const FEATURES = {
  passwordProtection: true,     // Password lock screen
  secretCode: true,              // Show code 2102 after hearts
  musicPlayer: true,             // Music button
  voiceMessage: true,            // Voice message simulation
  daysCounter: true,             // Relationship counter
  confetti: true,                // Confetti animation
  fireworks: true,               // Fireworks on finale
  easterEggs: true               // Secret pages
};

// ANIMATION SPEEDS (in milliseconds)
const ANIMATION_SPEED = {
  screenTransition: 700,         // Screen fade transition
  textReveal: 260,               // Letter line appearance
  quizAnswer: 900,               // Quiz answer feedback
  chatMessage: 700,              // Chat message typing
  particleExplosion: 30,         // Particle spacing
  heartExplosion: 1400,          // Heart explosion duration
  counterAnimation: 400,         // Counter number animation
  giftUnwrap: 300,               // Gift opening animation
  timelineReveal: 400            // Timeline item reveal
};
