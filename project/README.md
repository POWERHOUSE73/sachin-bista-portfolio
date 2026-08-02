# 💋 Happy Kiss Day - Modular Project Structure

A beautiful, interactive romantic experience for someone special. This is the modular version with organized files for easy customization.

## 📁 Project Structure

```
project/
├── index.html              # Main entry point (19 screens)
├── css/
│   └── styles.css          # All styling, animations, and responsive design
├── js/
│   ├── utils.js            # Core utility functions (hearts, particles, navigation)
│   ├── screens.js          # Screen-specific logic and event handlers
│   └── main.js             # Initialization and setup
├── data/
│   ├── config.js           # Configuration (password, dates, feature flags)
│   ├── quiz.js             # Quiz questions and answers (Screen 6)
│   ├── chat.js             # Chat messages (Screen 7)
│   ├── timeline.js         # Timeline milestones (Screen 11)
│   ├── gallery.js          # Photo gallery data (Screen 12)
│   ├── letter.js           # Love letter lines (Screen 14)
│   └── compat.js           # Compatibility metrics (Screen 5)
├── images/                 # User photos (empty, ready for your images)
└── docs/                   # Documentation (guides, etc.)
```

## 🚀 How to Use

### 1. Open the App
Simply open `index.html` in any modern browser. No installation needed!

```bash
# Windows
start project/index.html

# Mac
open project/index.html

# Linux
xdg-open project/index.html
```

### 2. Password to Enter
Default password: **`mero pyaro sirmati`** (Nepali for "my dear wife")

Edit in `data/config.js` to change.

### 3. Customize Everything

#### Change Password
**File:** `data/config.js`
```javascript
password: 'your-custom-password-here'
```

#### Add Custom Quiz Questions
**File:** `data/quiz.js`
```javascript
const QUIZ = [
  {
    q: "Your question here?",
    opts: ["Option 1", "Option 2", "Option 3", "Option 4"],
    ans: 3  // 0-3 = which option is correct
  }
];
```

#### Add Chat Messages
**File:** `data/chat.js`
```javascript
const CHAT_MSGS = [
  { side: 'sent', text: 'Your message here' },
  { side: 'recv', text: 'Their response here' },
  // Alternate between 'sent' and 'recv'
];
```

#### Customize Timeline
**File:** `data/timeline.js`
```javascript
const TL_ITEMS = [
  {
    icon: '👀',
    title: 'First Sight',
    desc: 'The moment I saw you...'
  },
  // Add more items
];
```

#### Add Photos to Gallery
**File:** `data/gallery.js`

Replace emojis with image paths:
```javascript
const GALLERY_DATA = [
  {
    emoji: '<img src="images/photo1.jpg" style="width:100%;height:100%;object-fit:cover;">',
    caption: 'Our First Date 💕',
    color: '#ff4d88, #ff1a6b'
  },
  // Add more photos
];
```

#### Edit Love Letter
**File:** `data/letter.js`
```javascript
const LETTER_LINES = [
  'My Dearest Love,',
  '',
  'Every moment with you is a treasure...',
  'Will you marry me soon?',
  '',
  'Forever & Always, Your Love'
];
```

#### Change Relationship Start Date
**File:** `data/config.js`
```javascript
relationshipStartDate: '2024-04-14'  // YYYY-MM-DD format
```

#### Change Secret Code Display
**File:** `data/config.js`
```javascript
secretCode: '2102'  // Shown after selecting 3 hearts
```

## 🎨 18 Screens Overview

| # | Screen | Purpose |
|---|--------|---------|
| 0 | Password | Protected access |
| 1 | Loading | Animated loading bar |
| 2 | Lock Screen | Phone-style unlock |
| 3 | Name Input | Get their name |
| 4 | Hearts Game | Select 3 hearts → reveals secret code |
| 5 | Compatibility | Love metrics analysis |
| 6 | Quiz | Relationship knowledge test |
| 7 | Chat | Intimate conversation story |
| 8 | Scratch Card | Reveal hidden message |
| 9 | Kiss Counter | Send 10+ kisses |
| 10 | Proposal | "Will you marry me?" |
| 11 | Timeline | Your relationship journey (9 milestones) |
| 12 | Gallery | Photo collection (10 photos) |
| 13 | Notes | Floating love notes |
| 14 | Love Letter | Letter with proposal |
| 15 | Audio | Voice message player |
| 16 | Counter | Days together counter |
| 17 | Gift | Unwrapping surprise + 4 memory photos |
| 18 | Finale | Grand celebration finale |

## 🎵 Add Background Music

In `index.html`, find the audio element and add your music:

```html
<audio id="bgAudio" preload="metadata">
  <source src="path/to/your-music.mp3" type="audio/mpeg">
</audio>
```

Or modify in `data/config.js`:
```javascript
musicFilePath: 'path/to/your-music.mp3'
```

## ✨ Features

✅ **18 Interactive Screens** - Complete romantic journey  
✅ **Password Protected** - Secure experience  
✅ **Secret Code Easter Egg** - Hidden surprise  
✅ **Quiz System** - Test relationship knowledge  
✅ **Chat Simulation** - Animated conversation  
✅ **Photo Gallery** - 10-photo showcase  
✅ **Gift Unwrapping** - Interactive gift opening  
✅ **Fireworks & Confetti** - Celebration animations  
✅ **Responsive Design** - Works on all devices  
✅ **No Dependencies** - Pure HTML/CSS/JavaScript  
✅ **Easter Eggs** - Konami code + tap secret  
✅ **Share Button** - Easy sharing feature  

## 🎮 Easter Eggs

1. **Music Button Easter Egg**
   - Tap the music button (🎵) 5 times
   - Opens secret "Forever & Always" page

2. **Konami Code**
   - Press: ↑ ↑ ↓ ↓ ← → ← → B A
   - Opens the same secret page

## 🛠️ Adding Custom Features

### Add a New Data Variable
1. Create new entry in `data/config.js`
2. Access anywhere: `CONFIG.yourVariable`

### Add Screen-Specific Logic
Edit the function in `js/screens.js`:

```javascript
if (n === 9) {
  // Your custom logic for when screen 9 loads
  customFunctionName();
}
```

### Modify Animations
All animations are in `css/styles.css`. Search for `@keyframes` to find animation definitions.

## 📱 Mobile Optimization

- Responsive design works on phones, tablets, desktops
- Touch-friendly buttons and interactions
- Mobile-optimized chat and gallery views

## 🔧 Customization Tips

1. **Colors**: Change in `css/styles.css` CSS variables
2. **Fonts**: Already using Google Fonts (Playfair, Sacramento, DM Sans)
3. **Animations**: Adjust duration in `data/config.js` ANIMATION_SPEED object
4. **Dates**: Update `relationshipStartDate` for accurate counter

## 📝 Notes

- **No Server Required** - Works locally as static files
- **Fully Customizable** - Every aspect can be personalized
- **Works Offline** - Once loaded, works without internet
- **Easy to Share** - Upload to GitHub Pages, Netlify, or any host

## 💝 For Special Delivery

1. Keep `index.html` as main file
2. Zip the entire `project` folder
3. Share via link or USB drive
4. No installation - just open in browser!

## 🎁 Personalization Checklist

- [ ] Change password in `data/config.js`
- [ ] Customize quiz in `data/quiz.js`
- [ ] Add chat messages in `data/chat.js`
- [ ] Update timeline in `data/timeline.js`
- [ ] Add photos to `images/` folder and update `data/gallery.js`
- [ ] Edit love letter in `data/letter.js`
- [ ] Set relationship date in `data/config.js`
- [ ] Add background music in `index.html`
- [ ] Test all 18 screens before sharing

---

**Made with ❤️ for someone special**

Version 1.0 - Fully Modular & Customizable
