# 🚀 Quick Start Guide

Get your romantic experience up and running in 5 minutes!

## ⚡ Super Quick Setup

1. **Open the app:**
   - Find `index.html` and double-click it
   - Opens in your default browser

2. **Enter password:**
   - Default: `mero pyaro sirmati`

3. **Go through 18 screens:**
   - Each screen has interactive elements
   - Follow the prompts

4. **Share the link:**
   - Upload entire `project` folder to any web host
   - Share the link with that special person

## 🎨 Most Common Customizations

### Change the Password
1. Open `data/config.js`
2. Find: `password: 'mero pyaro sirmati'`
3. Replace with your password
4. Save and refresh browser

### Add Your Photos
1. Place photos in `images/` folder (JPG or PNG)
2. Open `data/gallery.js`
3. Replace emoji with file path:
   ```javascript
   emoji: '<img src="images/photo1.jpg" style="width:100%;height:100%;object-fit:cover;">',
   ```
4. Update caption
5. Refresh browser

### Personalize the Quiz
1. Open `data/quiz.js`
2. Edit questions, options, and answers
3. Save and refresh

### Change Your Names & Dates
1. Open `data/config.js`
2. Update:
   - `relationshipStartDate: 'YYYY-MM-DD'` → e.g., `'2023-05-15'`
   - Default names appear in screens

### Edit Love Letter
1. Open `data/letter.js`
2. Edit each line in `LETTER_LINES` array
3. Empty strings create line breaks
4. First line appears in special font

## 📱 Testing on Phone

1. **Same Device:**
   - Open `index.html` on phone browser

2. **Different Device (WiFi):**
   - Find your computer's IP address
   - Put in phone browser: `http://192.168.x.x:8000` (if running local server)
   - Or upload and share link

3. **Mobile Optimization:**
   - App is fully responsive
   - All buttons are touch-friendly
   - Try rotating phone to see responsive layout

## 🎵 Add Music/Audio

1. Get an MP3 file
2. Place in `project` folder
3. In `index.html`, find:
   ```html
   <audio id="bgAudio" preload="metadata"></audio>
   ```
4. Add:
   ```html
   <source src="your-music.mp3" type="audio/mpeg">
   ```
5. Refresh browser

## 🧪 Quick Testing Checklist

- [ ] Open `index.html`
- [ ] Enter password
- [ ] Tap through screens
- [ ] Customize at least one section
- [ ] Test on phone
- [ ] Share with someone special!

## 📂 File Locations Quick Reference

| What You Want | File to Edit |
|---|---|
| Change password | `data/config.js` |
| Quiz questions | `data/quiz.js` |
| Chat messages | `data/chat.js` |
| Timeline events | `data/timeline.js` |
| Photo gallery | `data/gallery.js` + `images/` folder |
| Love letter | `data/letter.js` |
| Relationship date | `data/config.js` |
| Colors & fonts | `css/styles.css` |
| Background music | `index.html` audio element |
| Animations speed | `data/config.js` ANIMATION_SPEED |

## 🎁 Share Your Creation!

### Option 1: GitHub Pages (Free)
1. Create GitHub account
2. Upload `project` folder
3. Enable GitHub Pages
4. Share the link

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag & drop `project` folder
3. Get instant live link

### Option 3: Simple Link Share
1. Email/message the `project` folder as ZIP
2. Recipient extracts and opens `index.html`

## ❓ Troubleshooting

**Q: Password not working?**
- Make sure `data/config.js` is saved
- Check exact spelling (case matters)
- Refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

**Q: Images not showing?**
- Check file path is correct
- Make sure image file is in `images/` folder
- Use forward slashes: `images/photo.jpg`

**Q: Styles look wrong?**
- Make sure `css/styles.css` is in right folder
- Refresh browser thoroughly
- Check browser console for errors (F12)

**Q: Animations too fast/slow?**
- Edit `ANIMATION_SPEED` in `data/config.js`
- Values in milliseconds (1000 = 1 second)

## 🎯 Next Steps

1. ✅ Complete basic customization (password, name, date)
2. ✅ Add your photos to gallery
3. ✅ Write custom quiz questions
4. ✅ Add personal chat messages
5. ✅ Personalize the love letter
6. ✅ Test all 18 screens
7. ✅ Share with someone special!

## 💡 Pro Tips

- **Backup Original:** Keep the original modular project safe
- **Version Control:** Copy project folder for different versions
- **Test Thoroughly:** Go through all screens before sharing
- **Mobile First:** Always test on phone
- **Share Early:** Get feedback before final tweaks

---

**Need help?** Check README.md for detailed documentation
**Made with ❤️ for romantic tech lovers**
