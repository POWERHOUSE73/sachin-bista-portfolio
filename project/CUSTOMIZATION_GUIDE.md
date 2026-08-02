# 🎨 Customization Guide

Complete examples for personalizing every aspect of your romantic experience.

## 1. Configuration & Settings

**File:** `data/config.js`

### Change Password
```javascript
password: 'your-custom-password'  // Case-insensitive
```

### Set Relationship Start Date
```javascript
relationshipStartDate: '2023-05-14'  // YYYY-MM-DD format
```

### Change Secret Code
```javascript
secretCode: '1408'  // Shown after selecting 3 hearts
```

### Customize Notes
```javascript
NOTES_TXT: [
  '💕 You complete me',
  '🌹 I love your smile',
  '💋 You're my everything',
  '✨ Forever with you',
  '🎁 You make me happy',
  '💑 My soulmate'
]
```

### Adjust Animation Speeds (in milliseconds)
```javascript
ANIMATION_SPEED: {
  screenTransition: 700,      // 0.7 seconds
  quizAnswer: 1200,
  chatMessage: 800,
  timelineReveal: 600,
  giftUnwrap: 100,
  textReveal: 300             // Love letter reveal speed
}
```

### Change Colors
```javascript
colors: {
  pink: '#ff4d88',
  rose: '#ff1a6b',
  gold: '#f7c59f',
  cream: '#fff5f8',
  deep: '#1a0015',
  mid: '#2d0026'
}
```

## 2. Quiz Customization

**File:** `data/quiz.js`

### Add Your Questions
```javascript
const QUIZ = [
  {
    q: "What's your favorite moment with me?",
    opts: [
      "Our first meeting",
      "First kiss under the stars",
      "That special night",
      "Every moment with you"
    ],
    ans: 3  // Correct answer index (0-3)
  },
  {
    q: "How many times have you said 'I love you'?",
    opts: [
      "A few times",
      "Many times",
      "Countless times",
      "More than the stars"
    ],
    ans: 3
  },
  // Add more questions...
];
```

**Tips:**
- `ans: 0` = first option is correct
- `ans: 3` = last option (usually "perfect" answer)
- All questions should support 4 options
- Keep responses flirty and romantic

## 3. Chat Messages

**File:** `data/chat.js`

### Add Personal Conversation
```javascript
const CHAT_MSGS = [
  { side: 'sent', text: "Hey beautiful 💕" },
  { side: 'recv', text: "Hi my love! 😘" },
  { side: 'sent', text: "I can't stop thinking about you" },
  { side: 'recv', text: "I miss you too 💋" },
  { side: 'sent', text: "You're my everything 🌹" },
  { side: 'recv', text: "Forever & always ❤️" },
  { side: 'sent', text: "Will you be mine?" },
  { side: 'recv', text: "Always & forever 💕" },
  { side: 'sent', text: "I love you to infinity" },
  { side: 'recv', text: "I love you more than that 💋❤️" }
];
```

**Tips:**
- Alternate `sent` (user) and `recv` (them)
- Add emojis for personality
- Keep messages flirty and intimate
- Length doesn't matter - animates at same speed

## 4. Timeline Events

**File:** `data/timeline.js`

### Customize Your Journey
```javascript
const TL_ITEMS = [
  {
    icon: '👀',
    title: 'First Sight',
    desc: 'That moment I first saw you...'
  },
  {
    icon: '💬',
    title: 'First Chat',
    desc: 'You made me smile for the first time'
  },
  {
    icon: '🤝',
    title: 'First Touch',
    desc: 'Our hands finally touched'
  },
  {
    icon: '🌹',
    title: 'First Special Date',
    desc: 'Our perfect evening together'
  },
  {
    icon: '💕',
    title: 'First Hug',
    desc: 'Wrapped in your arms, home at last'
  },
  {
    icon: '💋',
    title: 'First Kiss',
    desc: 'A kiss that changed everything'
  },
  {
    icon: '❤️',
    title: 'First Intimate Moment',
    desc: 'Our love became complete'
  },
  {
    icon: '✨',
    title: 'Every Day Since',
    desc: 'Each day more beautiful than before'
  },
  {
    icon: '💍',
    title: 'Today - Our Promise',
    desc: 'Together forever, my love'
  }
];
```

**Emoji Ideas:**
- 👀 First sight
- 💬 First conversation
- 🤝 First touch
- 🌹 First date
- 💕 First feelings
- 💋 First kiss
- 🎂 Birthday
- 🎄 Holiday
- ✈️ Trip together
- 🏠 Moving in
- 💍 Engagement
- 💒 Wedding

## 5. Photo Gallery

**File:** `data/gallery.js`

### Add Your Photos
```javascript
const GALLERY_DATA = [
  {
    emoji: '<img src="images/photo1.jpg" style="width:100%;height:100%;object-fit:cover;">',
    caption: 'Our First Date',
    color: '#ff4d88, #ff1a6b'  // Gradient fallback
  },
  {
    emoji: '<img src="images/photo2.jpg" style="width:100%;height:100%;object-fit:cover;">',
    caption: 'Beach Paradise',
    color: '#7cd8ff, #b8c5ff'
  },
  {
    emoji: '<img src="images/photo3.jpg" style="width:100%;height:100%;object-fit:cover;">',
    caption: 'Under The Stars',
    color: '#2d0026, #5c0040'
  },
  // ... more photos
];
```

**Gradient Colors (if no photos):**
```javascript
const GALLERY_DATA = [
  {
    emoji: '💕',
    caption: 'Love Like Ours',
    color: '#ff4d88, #ff1a6b'
  },
  {
    emoji: '🌹',
    caption: 'Sweet Rose',
    color: '#ff1a6b, #5c0040'
  },
  {
    emoji: '💋',
    caption: 'Kiss Me',
    color: '#ff9fcb, #ff4d88'
  },
  {
    emoji: '🌙',
    caption: 'Moonlight',
    color: '#2d0026, #5c0040'
  },
  {
    emoji: '☀️',
    caption: 'Sunrise',
    color: '#ff9fcb, #ffd700'
  },
  {
    emoji: '🌊',
    caption: 'Ocean Views',
    color: '#7cd8ff, #b8c5ff'
  },
  {
    emoji: '🎊',
    caption: 'Celebration',
    color: '#ffd700, #ff9fcb'
  },
  {
    emoji: '💐',
    caption: 'Flowers',
    color: '#ff1a6b, #ffb347'
  },
  {
    emoji: '💎',
    caption: 'Diamond Heart',
    color: '#b8c5ff, #ffd700'
  },
  {
    emoji: '🎁',
    caption: 'Special Gift',
    color: '#ff4d88, '#ffb347'
  }
];
```

**Tips:**
- Keep exactly 10 items
- Photos appear in `images/` folder
- Use `object-fit:cover` for perfect fit
- Captions auto-wrap
- Can be any image format (JPG, PNG, WebP)

## 6. Love Letter

**File:** `data/letter.js`

### Write Your Personal Letter
```javascript
const LETTER_LINES = [
  'My Dearest Love,',
  '',
  'From the moment I saw you, my world changed.',
  'Every laugh, every smile, every tear - all because of you.',
  '',
  'You are my greatest adventure, my deepest peace,',
  'the answer to every prayer I never knew I was making.',
  '',
  'I promise to love you with all my heart,',
  'to stand by you through every season,',
  'to make you laugh until your stomach aches,',
  'and to be the best version of myself for you.',
  '',
  'I want to spend my life writing our love story.',
  'Every day with you is a gift I never take for granted.',
  '',
  'Will you marry me and make me the happiest soul alive?',
  '',
  'Forever yours,',
  'Your Love ❤️'
];
```

**Tips:**
- Empty string `''` = line break
- First line displays in special font
- Max recommended 20-25 lines
- Each line animates sequentially
- Emojis work in text
- No character limit per line

## 7. Compatibility Metrics

**File:** `data/compat.js`

### Customize Compatibility Scores
```javascript
const COMPAT_DATA = [
  { label: 'Trust', pct: 100 },
  { label: 'Passion', pct: 100 },
  { label: 'Loyalty', pct: 100 },
  { label: 'Understanding', pct: 100 },
  { label: 'Love ❤️', pct: 100 }  // Special display for Love
];
```

**Tips:**
- All percentages recommended at 100%
- Maximum 5 items
- Can use emojis in labels
- Animates with progressive fill
- Final message after all load: "Perfect Match!"

## 8. Styling & Colors

**File:** `css/styles.css`

### Change Primary Color
Search for `--pink` and replace:
```css
:root {
  --pink: #ff4d88;      /* Main color */
  --rose: #ff1a6b;      /* Darker variant */
  --gold: #f7c59f;      /* Accent */
  --cream: #fff5f8;     /* Light text */
  --deep: #1a0015;      /* Dark bg */
  --mid: #2d0026;       /* Mid bg */
  --glow: rgba(255,77,136,0.6);  /* Glow effect */
}
```

### Example Color Schemes
**Sunset:**
```css
--pink: #ff6b6b;
--rose: #ee5a6f;
--gold: #ffb347;
```

**Ocean:**
```css
--pink: #5a9fd4;
--rose: #2e7dad;
--gold: #7cd8ff;
```

**Forest:**
```css
--pink: #2d5016;
--rose: #1a3a0a;
--gold: #8fbc8f;
```

## 9. Background Music

**File:** `index.html`

### Add Your Music
Find the audio element:
```html
<audio id="bgAudio" preload="metadata">
  <source src="your-song.mp3" type="audio/mpeg">
</audio>
```

**Music Tips:**
- MP3 format recommended
- Place in `project` folder
- Use royalty-free music (YouTube Audio Library, etc.)
- Music plays when user clicks music button (🎵)

## 10. Advanced: Screen Customization

**File:** `js/screens.js`

### Modify Screen Behavior
Each screen has an initialization function:
```javascript
function onScreenEnter(n) {
  if (n === 6) renderQuiz();     // Quiz screen
  if (n === 9) initKissScreen();  // Kiss screen
  // etc.
}
```

### Add Custom Logic
Example - modify kiss button:
```javascript
function sendKiss() {
  kissCount++;
  // Add custom logic here
  if (kissCount === 5) {
    // Do something special
  }
}
```

---

## 📋 Customization Checklist

- [ ] **Password** - `data/config.js`
- [ ] **Relationship Date** - `data/config.js`
- [ ] **Quiz Questions** - `data/quiz.js` (customize all 6)
- [ ] **Chat Messages** - `data/chat.js` (add personal touches)
- [ ] **Timeline** - `data/timeline.js` (update milestones)
- [ ] **Photos** - Add to `images/` and update `data/gallery.js`
- [ ] **Love Letter** - `data/letter.js` (write heartfelt words)
- [ ] **Background Music** - Add to `index.html`
- [ ] **Colors** - `css/styles.css` (optional)
- [ ] **Test All Screens** - Go through all 18 screens
- [ ] **Mobile Test** - Test on phone
- [ ] **Share** - Send to that special person!

---

**Happy customizing! 💕**
